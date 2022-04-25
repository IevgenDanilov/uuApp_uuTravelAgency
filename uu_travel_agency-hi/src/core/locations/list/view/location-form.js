//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsi } from "uu5g04-hooks";
import Config from "../../../config/config.js";
import "uu5g04-forms";
import Lsi from "../../lsi.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "LocationForm",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const LocationForm = createVisualComponent({
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
      const { values } = opt;
      if (props.onSave) {
        props.onSave(values);
      } else {
        props.onUpdate(values);
      }
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);

    return (
      <div {...attrs}>
        <UU5.Forms.Form onSave={_handleOnSave} onCancel={props.modalRef.current.close} values={props.values || null}>
          <UU5.Forms.Text required placeholder="Radisson Blu Béke Hotel" name="title" label={useLsi(Lsi.title)} />
          <UU5.Forms.Text
            placeholder="1067 Budapest, Teréz körút 43., Hungary"
            name="address"
            label={useLsi(Lsi.address)}
          />
          <UU5.Forms.Text placeholder="40" name="pricePerNight" label={useLsi(Lsi.pricePerNight)} />
          <UU5.Forms.Text placeholder="4.3" name="rating" label={useLsi(Lsi.rating)} />
          <UU5.Forms.Radios
            name="state"
            required
            label={useLsi(Lsi.state)}
            size="m"
            value={[
              { label: "Opened", name: "opened" },
              { label: "Closed", name: "closed", value: true },
            ]}
          />
          <UU5.Forms.Controls />
        </UU5.Forms.Form>
      </div>
    );
    //@@viewOff:render
  },
});

export default LocationForm;
