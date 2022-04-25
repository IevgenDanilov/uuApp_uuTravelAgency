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
          <UU5.Forms.Text placeholder="Throw the world" required name="title" label={useLsi(Lsi.title)} />
          <UU5.Forms.Text
            placeholder="625dc00acd91c93ff007e1a6"
            required
            name="locationId"
            label={useLsi(Lsi.location)}
          />
          <UU5.Forms.Text placeholder="2000" name="price" label={useLsi(Lsi.price)} />
          <UU5.Forms.Text placeholder="50" name="maxCapacity" label={useLsi(Lsi.maxCapacity)} />
          <UU5.Forms.Radios
            name="state"
            required
            label={useLsi(Lsi.state)}
            size="m"
            value={[
              { label: "Active", name: "active" },
              { label: "Draft", name: "draft", value: true },
            ]}
          />
          <UU5.Forms.DatePicker
            placeholder="01/01/2025"
            required
            openToContent
            name="dateFrom"
            label={useLsi(Lsi.dateFrom)}
            valueType="iso"
            onValidate={(opt) => {
              let feedback;
              if (new Date(opt.value) > new Date()) {
                feedback = {
                  feedback: "success",
                  message: "Value is correct.",
                  value: opt.value,
                };
              } else {
                feedback = {
                  feedback: "error",
                  message: "Value is incorrect.",
                  value: opt.value,
                };
              }

              return opt.value ? feedback : null;
            }}
          />
          <UU5.Forms.Controls />
        </UU5.Forms.Form>
      </div>
    );
    //@@viewOff:render
  },
});

export default TripForm;
