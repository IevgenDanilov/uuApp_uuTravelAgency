//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsi } from "uu5g04-hooks";
import Config from "../../../config/config.js";
import "uu5g04-forms";
import Lsi from "../../lsi.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ParticipantForm",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const ParticipantForm = createVisualComponent({
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
          <UU5.Forms.Text required placeholder="Vladimír" name="firstName" label={useLsi(Lsi.firstName)} />
          <UU5.Forms.Text required placeholder="Kovář" name="lastName" label={useLsi(Lsi.lastName)} />
          <UU5.Forms.Text required placeholder="Čech" name="nationality" label={useLsi(Lsi.nationality)} />
          <UU5.Forms.Text required placeholder="1962-01-18" name="dateOfBirth" label={useLsi(Lsi.dateOfBirth)} />
          <UU5.Forms.Text required placeholder="XX000000" name="passportNumber" label={useLsi(Lsi.passportNumber)} />
          <UU5.Forms.Radios
            name="gender"
            required
            label={useLsi(Lsi.gender)}
            size="m"
            value={[
              { label: "Man", name: "man", value: true },
              { label: "Woman", name: "woman" },
            ]}
          />
          <UU5.Forms.Controls />
        </UU5.Forms.Form>
      </div>
    );
    //@@viewOff:render
  },
});

export default ParticipantForm;
