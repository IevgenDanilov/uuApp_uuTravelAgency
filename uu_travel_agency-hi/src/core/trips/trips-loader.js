//@@viewOn:imports
import { createComponent, useDataList } from "uu5g04-hooks";
import { TripsContext } from "./context/context.js";

import Config from "./config/config.js";
import Calls from "calls";
//@@viewOff:imports

export const TripsLoader = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "TripsLoader",
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const tripsDataList = useDataList({
      handlerMap: {
        load: Calls.tripsList,
        create: Calls.tripCreate,
      },
      itemHandlerMap: {
        delete: Calls.tripDelete,
        update: Calls.tripUpdate,
        get: Calls.tripGet,
        locationGet: Calls.locationGet,
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
    return <TripsContext.Provider value={tripsDataList}>{props.children}</TripsContext.Provider>;
    //@@viewOff:render
  },
});

//@@viewOn:helpers
//@@viewOff:helpers

export default TripsLoader;
