//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js";
import useLocations from "../context/use-locations.js";
import DataListStateResolver from "../../../common/data-list-state-resolver.js";
import LocationsView from "./view/locations-view.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Locations",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const Locations = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const locationsDataList = useLocations();
    //@@viewOff:hooks

    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    return (
      <div {...attrs}>
        <DataListStateResolver dataList={locationsDataList}>
          <LocationsView locationsDataList={locationsDataList} />
        </DataListStateResolver>
      </div>
    );
    //@@viewOff:render
  },
});

export default Locations;
