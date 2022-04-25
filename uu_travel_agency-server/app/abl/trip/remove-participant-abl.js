// "use strict";

const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../../api/errors/trip-error.js");

const WARNINGS = {
  removeParticipantUnsupportedKeys: {
    code: `${Errors.RemoveParticipant.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
};

class RemoveParticipantAbl {
  constructor() {
    this.validator = Validator.load();
    this.mainDao = DaoFactory.getDao("travelAgency");
    this.tripDao = DaoFactory.getDao("trip");
    this.locationDao = DaoFactory.getDao("location");
    this.participantDao = DaoFactory.getDao("participant");
  }

  async removeParticipant(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1
    let validationResult = this.validator.validate("tripRemoveParticipantDtoInType", dtoIn);
    // 1.1, 1.2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.removeParticipantUnsupportedKeys.code,
      Errors.RemoveParticipant.InvalidDtoIn
    );

    // HDS 2
    const travelAgency = await this.mainDao.getByAwid(awid);
    // 2.1
    if (!travelAgency) {
      throw new Errors.RemoveParticipant.TravelAgencyDoesNotExist(uuAppErrorMap, { awid });
    }
    // 2.2
    if (travelAgency.state !== "active") {
      throw new Errors.RemoveParticipant.TravelAgencyNotInCorrectState(uuAppErrorMap, {
        awid: awid,
        state: travelAgency.state,
        expectedState: "active",
      });
    }

    // HDS 3
    const { tripId, participantId } = dtoIn;

    let trip = null;

    trip = await this.tripDao.get(awid, tripId);

    // 3.1
    if (!trip) {
      throw new Errors.RemoveParticipant.TripDoesNotExist({ uuAppErrorMap }, { id: tripId });
    }

    // HDS 4

    let participantIdList = [];

    trip.participantIdList &&
      (participantIdList = trip.participantIdList.filter((participant) => participant !== participantId));

    // HDS 5
    let tripUpd = null;

    try {
      tripUpd = await this.tripDao.removeParticipant(awid, tripId, participantIdList);
    } catch (e) {
      // 5.1
      throw new Errors.RemoveParticipant.TripDaoRemoveParticipantFailed({ uuAppErrorMap }, e);
    }

    // HDS 6
    return {
      ...tripUpd,
      uuAppErrorMap,
    };
  }
}

module.exports = new RemoveParticipantAbl();
