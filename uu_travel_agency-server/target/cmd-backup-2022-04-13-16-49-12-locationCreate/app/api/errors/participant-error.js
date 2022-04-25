"use strict";

const TravelAgencyUseCaseError = require("./travel-agency-use-case-error.js");
const PARTICIPANT_ERROR_PREFIX = `${TravelAgencyUseCaseError.ERROR_PREFIX}participant/`;

const Create = {
  UC_CODE: `${PARTICIPANT_ERROR_PREFIX}create/`,
  
};

module.exports = {
  Create
};
