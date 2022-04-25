//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsi } from "uu5g04-hooks";
import "uu5g04-forms";
import Config from "../../config/config.js";
import Lsi from "../../lsi.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "TripForm",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const TripForm = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    //@@viewOff:hooks

    //@@viewOn:private
    function _handleOnSave(opt) {
      props.onSave({ tripId: props.tripId, ...opt.values });
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    return (
      <div {...attrs}>
        <UU5.Forms.Form onSave={_handleOnSave} onCancel={props.modalRef.current.close} tripId={props.tripId}>
          <UU5.Forms.Text
            placeholder="6258713e2541970150d9ff55"
            required
            name="participantId"
            label={useLsi(Lsi.participantId)}
          />
          <UU5.Forms.Controls />
        </UU5.Forms.Form>
      </div>
    );
    //@@viewOff:render
  },
});

export default TripForm;
