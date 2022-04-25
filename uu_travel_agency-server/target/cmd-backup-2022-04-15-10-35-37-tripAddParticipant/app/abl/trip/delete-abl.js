// "use strict";

const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../../api/errors/trip-error.js");

const WARNINGS = {
  deleteUnsupportedKeys: {
    code: `${Errors.Delete.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
};

class DeleteAbl {
  constructor() {
    this.validator = Validator.load();
    this.mainDao = DaoFactory.getDao("travelAgency");
    this.tripDao = DaoFactory.getDao("trip");
    this.locationDao = DaoFactory.getDao("location");
    this.participantDao = DaoFactory.getDao("participant");
  }

  async delete(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1
    let validationResult = this.validator.validate("tripDeleteDtoInType", dtoIn);
    // 1.1, 1.2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    // HDS 2
    const travelAgency = await this.mainDao.getByAwid(awid);
    // 2.1
    if (!travelAgency) {
      throw new Errors.Delete.TravelAgencyDoesNotExist(uuAppErrorMap, { awid });
    }
    // 2.2
    if (travelAgency.state !== "active") {
      throw new Errors.Delete.TravelAgencyNotInCorrectState(uuAppErrorMap, {
        awid: awid,
        state: travelAgency.state,
        expectedState: "active",
      });
    }

    // HDS 3

    const { id } = dtoIn;

    const trip = await this.tripDao.get(awid, id);
    if (!trip) {
      // 3.1
      throw new Errors.Delete.TripDoesNotExist({ uuAppErrorMap }, { id: id });
    }

    // HDS 4
    if (trip.state === "active" || trip.state === "full") {
      throw new Errors.Delete.TripIsNotInCorrectState({ uuAppErrorMap }, { id: id, state: trip.state });
    }

    // HDS 5
    try {
      await this.tripDao.delete(awid, id);
    } catch (e) {
      throw new Errors.Delete.TripDaoDeleteFailed({ uuAppErrorMap }, { id: id }, e);
    }

    // HDS 4
    return {
      uuAppErrorMap,
    };
  }
}

module.exports = new DeleteAbl();
