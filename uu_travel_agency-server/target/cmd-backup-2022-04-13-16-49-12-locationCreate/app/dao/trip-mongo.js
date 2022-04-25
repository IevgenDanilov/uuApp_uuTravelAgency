"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class TripMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = TripMongo;
