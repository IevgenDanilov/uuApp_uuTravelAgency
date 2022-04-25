// "use strict";

const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../../api/errors/trip-error.js");

const WARNINGS = {
  addParticipantUnsupportedKeys: {
    code: `${Errors.AddParticipant.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
};

class AddParticipantAbl {
  constructor() {
    this.validator = Validator.load();
    this.mainDao = DaoFactory.getDao("travelAgency");
    this.tripDao = DaoFactory.getDao("trip");
    this.locationDao = DaoFactory.getDao("location");
    this.participantDao = DaoFactory.getDao("participant");
  }

  async addParticipant(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1
    let validationResult = this.validator.validate("tripAddParticipantDtoInType", dtoIn);
    // 1.1, 1.2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.addParticipantUnsupportedKeys.code,
      Errors.AddParticipant.InvalidDtoIn
    );

    // HDS 2
    const travelAgency = await this.mainDao.getByAwid(awid);
    // 2.1
    if (!travelAgency) {
      throw new Errors.AddParticipant.TravelAgencyDoesNotExist(uuAppErrorMap, { awid });
    }
    // 2.2
    if (travelAgency.state !== "active") {
      throw new Errors.AddParticipant.TravelAgencyNotInCorrectState(uuAppErrorMap, {
        awid: awid,
        state: travelAgency.state,
        expectedState: "active",
      });
    }

    // HDS 3
    const { tripId, participantIdList } = dtoIn;

    let trip = null;

    trip = await this.tripDao.get(awid, tripId);

    // 3.1
    if (!trip) {
      throw new Errors.AddParticipant.TripDoesNotExist({ uuAppErrorMap }, { id: tripId });
    }

    // HDS 4

    let tripUpd = null;

    try {
      tripUpd = await this.tripDao.addParticipant(awid, tripId, participantIdList);
    } catch (e) {
      // 4.1
      throw new Errors.AddParticipant.TripDaoAddParticipantFailed({ uuAppErrorMap }, e);
    }

    // HDS 5
    return {
      ...tripUpd,
      uuAppErrorMap,
    };
  }
}

module.exports = new AddParticipantAbl();
