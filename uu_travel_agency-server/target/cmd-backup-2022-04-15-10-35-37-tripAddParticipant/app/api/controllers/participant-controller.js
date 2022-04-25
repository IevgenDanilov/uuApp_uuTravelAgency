"use strict";

const CreateAbl = require("../../abl/participant/create-abl.js");
const GetAbl = require("../../abl/participant/get-abl.js");
const DeleteAbl = require("../../abl/participant/delete-abl.js");
const ListAbl = require("../../abl/participant/list-abl.js");
const UpdateAbl = require("../../abl/participant/update-abl.js");

class ParticipantController {
  create(ucEnv) {
    return CreateAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  get(ucEnv) {
    return GetAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  delete(ucEnv) {
    return DeleteAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  list(ucEnv) {
    return ListAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  update(ucEnv) {
    return UpdateAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new ParticipantController();
