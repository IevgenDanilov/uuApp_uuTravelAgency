"use strict";
const TravelAgencyAbl = require("../../abl/travel-agency-abl.js");

class TravelAgencyController {
  init(ucEnv) {
    return TravelAgencyAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new TravelAgencyController();
