// "use strict";

"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../../api/errors/participant-error.js");

const WARNINGS = {
  updateUnsupportedKeys: {
    code: `${Errors.Update.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
};

class UpdateAbl {
  constructor() {
    this.validator = Validator.load();
    this.mainDao = DaoFactory.getDao("travelAgency");
    this.tripDao = DaoFactory.getDao("trip");
    this.locationDao = DaoFactory.getDao("location");
    this.participantDao = DaoFactory.getDao("participant");
  }

  async update(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1
    let validationResult = this.validator.validate("participantUpdateDtoInType", dtoIn);
    // 1.1, 1.2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.updateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    // HDS 2
    const travelAgency = await this.mainDao.getByAwid(awid);
    // 2.1
    if (!travelAgency) {
      throw new Errors.Update.TravelAgencyDoesNotExist(uuAppErrorMap, { awid });
    }
    // 2.2
    if (travelAgency.state !== "active") {
      throw new Errors.Update.TravelAgencyNotInCorrectState(uuAppErrorMap, {
        awid: awid,
        state: travelAgency.state,
        expectedState: "active",
      });
    }

    // HDS 3
    const { id } = dtoIn;
    let participant = null;

    participant = await this.participantDao.get(awid, id);

    // 3.1
    if (!participant) {
      throw new Errors.Update.ParticipantDoesNotExist({ uuAppErrorMap }, { id: id });
    }

    // HDS 4

    try {
      participant = await this.participantDao.update({ awid, ...dtoIn });
    } catch (e) {
      // 4.1
      throw new Errors.Update.ParticipantDaoUpdateFailed({ uuAppErrorMap }, e);
    }

    // HDS 5
    return {
      ...participant,
      uuAppErrorMap,
    };
  }
}

module.exports = new UpdateAbl();
