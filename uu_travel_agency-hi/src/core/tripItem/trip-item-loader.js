//@@viewOn:imports
import { createComponent } from "uu5g04-hooks";
import { TripItemContext } from "./context/context.js";

import Config from "./config/config.js";
import Calls from "calls";
import { useDataObject } from "uu5g05";
//@@viewOff:imports

export const TripItemLoader = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "TripItemLoader",
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const tripItemDataList = useDataObject({
      handlerMap: {
        load: Calls.tripGet,
        create: Calls.tripCreate,
        delete: Calls.tripDelete,
        update: Calls.tripUpdate,
        locationGet: Calls.locationGet,
        participantsList: Calls.participantsList,
        addParticipant: Calls.tripAddParticipant,
        removeParticipant: Calls.tripRemoveParticipant,
      },
      initialDtoIn: {
        id: props.id,
      },
    });
    //@@viewOff:hooks

    //@@viewOn:handlers
    //@@viewOff:handlers

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render
    return <TripItemContext.Provider value={tripItemDataList}>{props.children}</TripItemContext.Provider>;
    //@@viewOff:render
  },
});

//@@viewOn:helpers
//@@viewOff:helpers

export default TripItemLoader;
