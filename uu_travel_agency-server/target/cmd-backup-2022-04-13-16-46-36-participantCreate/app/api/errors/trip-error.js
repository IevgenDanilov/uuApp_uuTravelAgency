"use strict";

const TravelAgencyUseCaseError = require("./travel-agency-use-case-error.js");
const TRIP_ERROR_PREFIX = `${TravelAgencyUseCaseError.ERROR_PREFIX}trip/`;

const Create = {
  UC_CODE: `${TRIP_ERROR_PREFIX}create/`,
  
};

module.exports = {
  Create
};
