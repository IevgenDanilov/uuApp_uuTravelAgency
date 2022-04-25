// "use strict";

const TravelAgencyUseCaseError = require("./travel-agency-use-case-error.js");

const Create = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}location/create/`,

  InvalidDtoIn: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  LocationDaoCreateFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}locationDaoCreateFailed`;
      this.message = "Creating list by list DAO create failed.";
    }
  },
  LocationImageDaoCreateFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}locationImageDaoCreateFailed`;
      this.message = "Creating image by image DAO create failed.";
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
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}location/get/`,

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
  LocationDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}locationDoesNotExist`;
      this.message = "Location does not exist.";
    }
  },
};

const Delete = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}location/delete/`,

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
  LocationDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}locationDoesNotExist`;
      this.message = "Location does not exist.";
    }
  },
  LocationDaoDeleteFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}locationDaoDeleteFailed`;
      this.message = "Location by location Dao delete failed.";
    }
  },
};
const Update = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}location/update/`,

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
  LocationDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}locationDoesNotExist`;
      this.message = "Location does not exist.";
    }
  },
  LocationDaoUpdateFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}locationDaoUpdateFailed`;
      this.message = "Location by location Dao update failed.";
    }
  },
};

const List = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}location/list/`,

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
  LocationDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}locationDoesNotExist`;
      this.message = "Location does not exist.";
    }
  },
  LocationDaoListFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}locationDaoListFailed`;
      this.message = "Location by location Dao list failed.";
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

module.exports = {
  Create,
  Get,
  Update,
  Delete,
  List,
};
