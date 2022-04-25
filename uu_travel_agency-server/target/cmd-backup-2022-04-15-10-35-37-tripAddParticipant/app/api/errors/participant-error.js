// "use strict";

const TravelAgencyUseCaseError = require("./travel-agency-use-case-error.js");

const Create = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}participant/create/`,

  InvalidDtoIn: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ParticipantDaoCreateFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}participantDaoCreateFailed`;
      this.message = "Creating list by list DAO create failed.";
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
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}participant/get/`,

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
  ParticipantDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}participantDoesNotExist`;
      this.message = "Participant does not exist.";
    }
  },
};

const Delete = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}participant/delete/`,

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
  ParticipantDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}participantDoesNotExist`;
      this.message = "Participant does not exist.";
    }
  },
  ParticipantDaoDeleteFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}participantDaoDeleteFailed`;
      this.message = "Participant by participant Dao delete failed.";
    }
  },
};

const Update = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}participant/update/`,

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
  ParticipantDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}participantDoesNotExist`;
      this.message = "Participant does not exist.";
    }
  },
  ParticipantDaoUpdateFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}participantDaoUpdateFailed`;
      this.message = "Participant by participant Dao update failed.";
    }
  },
};

const List = {
  UC_CODE: `${TravelAgencyUseCaseError.ERROR_PREFIX}participant/list/`,

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
  ParticipantDoesNotExist: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}participantDoesNotExist`;
      this.message = "Participant does not exist.";
    }
  },
  ParticipantDaoListFailed: class extends TravelAgencyUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}participantDaoListFailed`;
      this.message = "Participant by participant Dao list failed.";
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
