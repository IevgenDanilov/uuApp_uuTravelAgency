// "use strict";

const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../../api/errors/location-error.js");
const { BinaryStoreError } = require("uu_appg01_binarystore");

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
    this.locationImageDao = DaoFactory.getDao("locationImage");
  }

  async create(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1
    let validationResult = this.validator.validate("locationCreateDtoInType", dtoIn);
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

    const createLocationDtoIn = {
      awid,
      ...dtoIn,
    };

    let locationImage = null;

    if (dtoIn.image) {
      try {
        locationImage = await this.locationImageDao.create({ awid }, dtoIn.image);
      } catch (e) {
        if (e instanceof BinaryStoreError) {
          // 3.1
          throw new Errors.Create.LocationImageDaoCreateFailed({ uuAppErrorMap }, e);
        }
        throw e;
      }
      createLocationDtoIn.image = locationImage.code;
    }

    // HDS 4

    let location = null;
    try {
      location = await this.locationDao.create(createLocationDtoIn);
    } catch (e) {
      throw new Errors.Create.LocationDaoCreateFailed({ uuAppErrorMap }, e);
    }

    // HDS 4
    return {
      ...location,
      uuAppErrorMap,
    };
  }
}

module.exports = new CreateAbl();
