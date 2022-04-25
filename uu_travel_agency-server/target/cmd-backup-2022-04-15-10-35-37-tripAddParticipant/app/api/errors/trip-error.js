"use strict";

const TravelAgencyUseCaseError = require("./travel-agency-use-case-error.js");

const Create = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}trip/create/`,

  InvalidDtoIn: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  TripDaoCreateFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}tripDaoCreateFailed`;
      this.message = "Create trip by trip DAO create failed.";
    }
  },
  TravelAgencyDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}travelAgencyDoesNotExist`;
      this.message = "TravelAgency does not exist.";
    }
  },
  TravelAgencyNotInCorrectState: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}travelAgencyNotInCorrectState`;
      this.message = "TravelAgency is not in correct state.";
    }
  },
  LocationDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}locationDoesNotExist`;
      this.message = "Location with given id do not exist.";
    }
  },
};

const Get = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}trip/get/`,

  InvalidDtoIn: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TravelAgencyDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}travelAgencyDoesNotExist`;
      this.message = "TravelAgency does not exist.";
    }
  },
  TravelAgencyNotInCorrectState: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}travelAgencyNotInCorrectState`;
      this.message = "TravelAgency is not in correct state.";
    }
  },
  TripDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}tripDoesNotExist`;
      this.message = "Trip does not exist.";
    }
  },
};

const Delete = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}trip/delete/`,

  InvalidDtoIn: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TravelAgencyDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}travelAgencyDoesNotExist`;
      this.message = "TravelAgency does not exist.";
    }
  },
  TravelAgencyNotInCorrectState: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}travelAgencyNotInCorrectState`;
      this.message = "TravelAgency is not in correct state.";
    }
  },
  TripDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tripDoesNotExist`;
      this.message = "Trip does not exist.";
    }
  },

  TripIsNotInCorrectState: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tripIsNotInCorrectState`;
      this.message = "Trip in active or full state - the system can not delete trip.";
    }
  },
  TripDaoDeleteFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tripDaoDeleteFailed`;
      this.message = "Delete trip by this id failed.";
    }
  },
};

const List = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}trip/list/`,

  InvalidDtoIn: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TravelAgencyDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}travelAgencyDoesNotExist`;
      this.message = "TravelAgency does not exist.";
    }
  },
  TravelAgencyNotInCorrectState: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}travelAgencyNotInCorrectState`;
      this.message = "TravelAgency is not in correct state.";
    }
  },
  TripDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}tripDoesNotExist`;
      this.message = "Trip does not exist.";
    }
  },
};
const Update = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}trip/update/`,

  InvalidDtoIn: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  TravelAgencyDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}travelAgencyDoesNotExist`;
      this.message = "TravelAgency does not exist.";
    }
  },
  TravelAgencyNotInCorrectState: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}travelAgencyNotInCorrectState`;
      this.message = "TravelAgency is not in correct state.";
    }
  },
  TripDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}tripDoesNotExist`;
      this.message = "Trip does not exist.";
    }
  },
  TripDaoUpdateFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}tripDaoUpdateFailed`;
      this.message = "Trip by trip Dao update failed.";
    }
  },
};

module.exports = {
  Create,
  Get,
  Update,
  Delete,
  List,
};
