import { Environment } from "uu5g05";
import Plus4U5 from "uu_plus4u5g02";

// the base URI of calls for development / staging environments can be configured in *-hi/env/development.json
// (or <stagingEnv>.json), e.g.:
//   "uu5Environment": {
//     "callsBaseUri": "http://localhost:8080/vnd-app/awid"
//   }
const CALLS_BASE_URI = (
  (process.env.NODE_ENV !== "production" ? Environment.get("callsBaseUri") : null) || Environment.appBaseUri
).replace(/\/*$/, "/");

const Calls = {
  async call(method, url, dtoIn, clientOptions) {
    const response = await Plus4U5.Utils.AppClient[method](url, dtoIn, clientOptions);
    return response.data;
  },

  // // example for mock calls
  // loadDemoContent(dtoIn) {
  //   const commandUri = Calls.getCommandUri("loadDemoContent");
  //   return Calls.call("get", commandUri, dtoIn);
  // },

  loadIdentityProfiles() {
    const commandUri = Calls.getCommandUri("sys/uuAppWorkspace/initUve");
    return Calls.call("get", commandUri, {});
  },

  initWorkspace(dtoInData) {
    const commandUri = Calls.getCommandUri("sys/uuAppWorkspace/init");
    return Calls.call("post", commandUri, dtoInData);
  },

  getWorkspace() {
    const commandUri = Calls.getCommandUri("sys/uuAppWorkspace/get");
    return Calls.call("get", commandUri, {});
  },

  async initAndGetWorkspace(dtoInData) {
    await Calls.initWorkspace(dtoInData);
    return await Calls.getWorkspace();
  },

  getCommandUri(useCase) {
    return CALLS_BASE_URI + useCase.replace(/^\/+/, "");
  },

  tripCreate(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("trip/create");
    return Calls.call("post", commandUri, dtoIn);
  },

  tripGet(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("trip/get");
    return Calls.call("get", commandUri, dtoIn);
  },

  tripsList(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("trip/list");
    return Calls.call("get", commandUri, dtoIn);
  },

  tripUpdate(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("trip/update");
    return Calls.call("post", commandUri, dtoIn);
  },

  tripDelete(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("trip/delete");
    return Calls.call("post", commandUri, dtoIn);
  },

  tripAddParticipant(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("trip/addParticipant");
    return Calls.call("post", commandUri, dtoIn);
  },
  tripRemoveParticipant(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("trip/removeParticipant");
    return Calls.call("post", commandUri, dtoIn);
  },

  participantsList(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("participant/list");
    return Calls.call("get", commandUri, dtoIn);
  },

  participantCreate(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("participant/create");
    return Calls.call("post", commandUri, dtoIn);
  },

  participantUpdate(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("participant/update");
    return Calls.call("post", commandUri, dtoIn);
  },

  participantDelete(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("participant/delete");
    return Calls.call("post", commandUri, dtoIn);
  },

  participantGet(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("participant/get");
    return Calls.call("get", commandUri, dtoIn);
  },
  locationsList(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("location/list");
    return Calls.call("get", commandUri, dtoIn);
  },

  locationCreate(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("location/create");
    return Calls.call("post", commandUri, dtoIn);
  },

  locationUpdate(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("location/update");
    return Calls.call("post", commandUri, dtoIn);
  },

  locationDelete(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("location/delete");
    return Calls.call("post", commandUri, dtoIn);
  },

  locationGet(dtoIn = {}) {
    const commandUri = Calls.getCommandUri("location/get");
    return Calls.call("get", commandUri, dtoIn);
  },
};

export default Calls;
