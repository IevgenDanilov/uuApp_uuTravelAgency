"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ParticipantMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, passportNumber: 1 }, { unique: true });
    await super.createIndex({ awid: 1, firstName: 1, lastName: 1 }, { unique: false });
    await super.createIndex({ awid: 1, gender: 1 }, { unique: false });
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

  async list(awid, sortBy, order, pageInfo) {
    let filter = { awid };
    const sorting = { [sortBy]: order === "asc" ? 1 : -1 };
    return await super.find(filter, pageInfo, sorting);
  }

  async listByIdList(awid, tripId, sortBy, order, pageInfo) {
    let filter = { awid, tripId };
    const sorting = { [sortBy]: order === "asc" ? 1 : -1 };
    return await super.find(filter, pageInfo, sorting);
  }

  async listByGender(awid, gender, sortBy, order, pageInfo) {
    let filter = { awid, gender };
    const sorting = { [sortBy]: order === "asc" ? 1 : -1 };
    return await super.find(filter, pageInfo, sorting);
  }

  async listByIdListAndGender(awid, tripId, gender, sortBy, order, pageInfo) {
    let filter = { awid, tripId, gender };
    const sorting = { [sortBy]: order === "asc" ? 1 : -1 };
    return await super.find(filter, pageInfo, sorting);
  }
}
module.exports = ParticipantMongo;
