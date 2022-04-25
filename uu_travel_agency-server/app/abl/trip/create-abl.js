// "use strict";

const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../../api/errors/trip-error.js");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
  notEnoughData: {
    code: `${Errors.Create.UC_CODE}notEnoughData`,
    massege: "Not enough data for 'active' state.",
  },
};

class CreateAbl {
  constructor() {
    this.validator = Validator.load();
    this.mainDao = DaoFactory.getDao("travelAgency");
    this.tripDao = DaoFactory.getDao("trip");
    this.locationDao = DaoFactory.getDao("location");
    this.participantDao = DaoFactory.getDao("participant");
  }

  async create(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1
    let validationResult = this.validator.validate("tripCreateDtoInType", dtoIn);
    // 1.1, 1.2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // HDS 2
    const travelAgency = await this.mainDao.getByAwid(awid);
    // 2.1
    if (!travelAgency) {
      throw new Errors.Create.TravelAgencyDoesNotExist(uuAppErrorMap, { awid });
    }
    // 2.2
    if (travelAgency.state !== "active") {
      throw new Errors.Create.TravelAgencyNotInCorrectState(uuAppErrorMap, {
        awid: awid,
        state: travelAgency.state,
        expectedState: "active",
      });
    }

    // HDS 3

    const { locationId } = dtoIn;

    let location = null;

    location = await this.locationDao.get(awid, locationId);

    if (!location) {
      throw new Errors.Create.LocationDoesNotExist({ uuAppErrorMap }, { locationId });
    }

    // HDS 4
    const { maxCapacity, price, state } = dtoIn;
    let trip = null;

    // 4.1
    if ((!maxCapacity || !price) && state === "active") {
      trip = await this.tripDao.create({ awid, ...dtoIn, state: "draft" });

      ValidationHelper.addWarning(uuAppErrorMap, WARNINGS.notEnoughData.code, WARNINGS.notEnoughData.message, {
        maxCapacity: maxCapacity,
        price: price,
      });
    }
    // 4.2
    else {
      try {
        trip = await this.tripDao.create({ awid, ...dtoIn });
      } catch (e) {
        throw new Errors.Create.TripDaoCreateFailed({ uuAppErrorMap }, e);
      }
    }

    // HDS 5
    return {
      ...trip,
      uuAppErrorMap,
    };
  }
}

module.exports = new CreateAbl();
