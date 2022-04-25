//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "../config/config.js";
import useTrips from "../context/use-trips.js";
import useLocations from "../../locations/context/use-locations.js";
import DataListStateResolver from "../../../common/data-list-state-resolver.js";
import TripsListView from "./view/list-view.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "TripsList",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const TripsList = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const tripsDataList = useTrips();
    const locationsDataList = useLocations();
    const modalRef = useRef();
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
          <DataListStateResolver dataList={tripsDataList}>
            <TripsListView tripsDataList={tripsDataList} modalRef={modalRef} />
          </DataListStateResolver>
        </DataListStateResolver>
      </div>
    );
    //@@viewOff:render
  },
});

export default TripsList;
