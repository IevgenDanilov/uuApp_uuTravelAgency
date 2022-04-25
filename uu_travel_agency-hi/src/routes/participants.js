//@@viewOn:imports
import { Utils, createVisualComponent, useRoute } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import "uu5g04-bricks";
import Config from "./config/config.js";
import ParticipantsContextResolver from "../core/participants/context/participants-context-resolver.js";
import ParticipantsList from "../core/participants/list/list.js";
import RouteBar from "../core/route-bar.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Participants = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Participants",
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
          <ParticipantsList />
        </ParticipantsContextResolver>
      </div>
    );
  },
  //@@viewOff:render
});

Participants = withRoute(Participants);

//@@viewOn:exports
export { Participants };
export default Participants;
//@@viewOff:exports
