"use strict";
const ParticipantAbl = require("../../abl/participant-abl.js");

class ParticipantController {

  create(ucEnv) {
    return ParticipantAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new ParticipantController();
