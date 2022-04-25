"use strict";

const CreateAbl = require("../../abl/trip/create-abl.js");
const GetAbl = require("../../abl/trip/get-abl.js");
const DeleteAbl = require("../../abl/trip/delete-abl.js");
const ListAbl = require("../../abl/trip/list-abl.js");
const UpdateAbl = require("../../abl/trip/update-abl.js");
const AddParticipantAbl = require("../../abl/trip/add-participant-abl.js");
const RemoveParticipantAbl = require("../../abl/trip/remove-participant-abl.js");

class TripController {
  addParticipant(ucEnv) {
    return AddParticipantAbl.addParticipant(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  removeParticipant(ucEnv) {
    return RemoveParticipantAbl.removeParticipant(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
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

module.exports = new TripController();
