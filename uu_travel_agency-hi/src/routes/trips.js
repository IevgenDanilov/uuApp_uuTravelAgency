//@@viewOn:imports
import { Utils, createVisualComponent } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import "uu5g04-bricks";
import Config from "./config/config.js";
import TripsContextResolver from "../core/trips/context/trips-context-resolver.js";
import LocationsContextResolver from "../core/locations/context/locations-context-resolver.js";
import TripsList from "../core/trips/list/list.js";
import RouteBar from "../core/route-bar.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Trips = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Trips",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <RouteBar />
        <LocationsContextResolver>
          <TripsContextResolver>
            <TripsList />
          </TripsContextResolver>
        </LocationsContextResolver>
      </div>
    );
  },
  //@@viewOff:render
});

Trips = withRoute(Trips);

//@@viewOn:exports
export { Trips };
export default Trips;
//@@viewOff:exports
