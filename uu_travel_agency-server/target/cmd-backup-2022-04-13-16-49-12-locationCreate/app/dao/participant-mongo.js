"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ParticipantMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = ParticipantMongo;
