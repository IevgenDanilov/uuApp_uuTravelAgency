//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js";
import useTripItem from "../context/use-trip-item.js";
import useTrips from "../../trips/context/use-trips.js";
import useLocations from "../../locations/context/use-locations.js";
import useParticipants from "../../participants/context/use-participants.js";
import DataObjectStateResolver from "../../../common/data-object-state-resolver.js";
import DataListStateResolver from "../../../common/data-list-state-resolver.js";
import TripView from "./view/trip-view.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "TripItem",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const TripItem = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const tripItemDataObject = useTripItem();
    const tripsDataList = useTrips();
    const locationsDataList = useLocations();
    const participantsDataList = useParticipants();
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
        <DataListStateResolver dataList={participantsDataList}>
          <DataListStateResolver dataList={locationsDataList}>
            <DataListStateResolver dataList={tripsDataList}>
              <DataObjectStateResolver dataObject={tripItemDataObject}>
                <TripView dataObject={tripItemDataObject} />
              </DataObjectStateResolver>
            </DataListStateResolver>
          </DataListStateResolver>
        </DataListStateResolver>
      </div>
    );
    //@@viewOff:render
  },
});

export default TripItem;
