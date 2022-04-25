//@@viewOn:imports
import { createComponent, useDataList } from "uu5g04-hooks";
import { LocationsContext } from "./context/context.js";
import Config from "./config/config.js";
import Calls from "calls";
//@@viewOff:imports

export const LocationsLoader = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "LocationsLoader",
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const locationsDataList = useDataList({
      handlerMap: {
        load: Calls.locationsList,
        create: Calls.locationCreate,
      },
      itemHandlerMap: {
        update: Calls.locationUpdate,
        delete: Calls.locationDelete,
        get: Calls.locationGet,
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
    return <LocationsContext.Provider value={locationsDataList}>{props.children}</LocationsContext.Provider>;
    //@@viewOff:render
  },
});

//@@viewOn:helpers
//@@viewOff:helpers

export default LocationsLoader;
