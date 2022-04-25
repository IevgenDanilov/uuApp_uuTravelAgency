//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "../config/config.js";
import useParticipants from "../context/use-participants.js";
import DataListStateResolver from "../../../common/data-list-state-resolver.js";
import ParticipantsView from "./view/participants-view.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Participants",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const Participants = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
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
          <ParticipantsView participantsDataList={participantsDataList} />
        </DataListStateResolver>
      </div>
    );
    //@@viewOff:render
  },
});

export default Participants;
