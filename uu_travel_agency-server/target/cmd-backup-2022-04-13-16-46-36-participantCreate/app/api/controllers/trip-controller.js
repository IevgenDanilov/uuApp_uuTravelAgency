"use strict";
const TripAbl = require("../../abl/trip-abl.js");

class TripController {

  create(ucEnv) {
    return TripAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new TripController();
