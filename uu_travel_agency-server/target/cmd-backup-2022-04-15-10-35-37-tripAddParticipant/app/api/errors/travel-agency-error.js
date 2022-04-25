"use strict";
const TravelAgencyUseCaseError = require("./travel-agency-use-case-error.js");

const Init = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}init/`,

  InvalidDtoIn: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  SysUuAppWorkspaceProfileSetFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sysUuAppWorkspaceProfileSetFailed`;
      this.message = "Call sys/uuAppWorkspace/profile/set failed.";
    }
  },

  TravelAgencyCreateDaoFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}travelAgencyCreateDaoFailed`;
      this.message = "TodoInstance DAO create failed.";
    }
  },
};

module.exports = {
  Init,
};
