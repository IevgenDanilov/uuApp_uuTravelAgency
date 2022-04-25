"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class LocationMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, title: 1 }, { unique: true });
    await super.createIndex({ awid: 1, state: 1 }, { unique: false });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(awid, id) {
    let filter = {
      awid: awid,
      id: id,
    };
    return await super.findOne(filter);
  }

  async update(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }

  async delete(awid, id) {
    let filter = {
      awid: awid,
      id: id,
    };
    return await super.deleteOne(filter);
  }
  async list(awid, pageInfo) {
    let filter = { awid };
    let object = await super.find(filter, pageInfo);
    return object;
  }
  // Returns a paged list of uuObjects. The sortBy parameter determines what the list is sorted by (title, state) and the list could be returned in alphabetical order.
}

module.exports = LocationMongo;
