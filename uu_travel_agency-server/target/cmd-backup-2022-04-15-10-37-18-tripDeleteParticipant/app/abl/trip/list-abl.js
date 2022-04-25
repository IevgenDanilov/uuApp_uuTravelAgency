// "use strict";

const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../../api/errors/trip-error.js");

const WARNINGS = {
  listUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
};

class ListAbl {
  constructor() {
    this.validator = Validator.load();
    this.mainDao = DaoFactory.getDao("travelAgency");
    this.tripDao = DaoFactory.getDao("trip");
    this.locationDao = DaoFactory.getDao("location");
    this.participantDao = DaoFactory.getDao("participant");
  }

  async list(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1
    let validationResult = this.validator.validate("tripListDtoInType", dtoIn);
    // 1.1, 1.2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    // HDS 2
    const travelAgency = await this.mainDao.getByAwid(awid);
    // 2.1
    if (!travelAgency) {
      throw new Errors.List.TravelAgencyDoesNotExist(uuAppErrorMap, { awid });
    }
    // 2.2
    if (travelAgency.state !== "active") {
      throw new Errors.List.TravelAgencyNotInCorrectState(uuAppErrorMap, {
        awid: awid,
        state: travelAgency.state,
        expectedState: "active",
      });
    }

    // HDS 3
    const { pageInfo } = dtoIn;

    let tripList = await this.tripDao.list(awid, pageInfo);

    // let tripList = await this.tripDao.list(awid, sortBy, pageInfo);

    // HDS 4
    return {
      ...tripList,
      uuAppErrorMap,
    };
  }
}

module.exports = new ListAbl();
