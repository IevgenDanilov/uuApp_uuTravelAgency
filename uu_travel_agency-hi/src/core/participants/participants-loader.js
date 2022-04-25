//@@viewOn:imports
import { createComponent, useDataList } from "uu5g04-hooks";
import { ParticipantsContext } from "./context/context.js";
import Config from "./config/config.js";
import Calls from "calls";
//@@viewOff:imports

export const ParticipantsLoader = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "ParticipantsLoader",
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const participantsDataList = useDataList({
      handlerMap: {
        load: Calls.participantsList,
        create: Calls.participantCreate,
      },
      itemHandlerMap: {
        update: Calls.participantUpdate,
        delete: Calls.participantDelete,
        get: Calls.participantGet,
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
    return <ParticipantsContext.Provider value={participantsDataList}>{props.children}</ParticipantsContext.Provider>;
    //@@viewOff:render
  },
});

//@@viewOn:helpers
//@@viewOff:helpers

export default ParticipantsLoader;
