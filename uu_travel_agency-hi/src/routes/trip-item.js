//@@viewOn:imports
import { Utils, createVisualComponent, useRoute } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import "uu5g04-bricks";
import Config from "./config/config.js";
import TripItemContextResolver from "../core/tripItem/context/trip-item-context-resolver.js";
import TripsContextResolver from "../core/trips/context/trips-context-resolver.js";
import LocationsContextResolver from "../core/locations/context/locations-context-resolver.js";
import ParticipantsContextResolver from "../core/participants/context/participants-context-resolver.js";
import Trip from "../core/tripItem/item/item.js";
import RouteBar from "../core/route-bar.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let TripItem = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TripItem",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const [route] = useRoute();
    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <RouteBar />
        <ParticipantsContextResolver>
          <LocationsContextResolver>
            <TripsContextResolver>
              <TripItemContextResolver id={props.params.id}>
                <Trip />
              </TripItemContextResolver>
            </TripsContextResolver>
          </LocationsContextResolver>
        </ParticipantsContextResolver>
      </div>
    );
  },
  //@@viewOff:render
});

TripItem = withRoute(TripItem);

//@@viewOn:exports
export { TripItem };
export default TripItem;
//@@viewOff:exports
