//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import "uu5g04-forms";
import Config from "../../config/config.js";
import Lsi from "../../lsi.js";
import ParticipantForm from "./participant-form.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ParticipantCard",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const ParticipantCard = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const modalRef = useRef();
    const confirmModalRef = useRef();
    //@@viewOff:hooks

    const { id, firstName, lastName, gender, nationality, dateOfBirth, passportNumber } = props.data.data;
    const { handlerMap } = props.data;

    //@@viewOn:private
    function _handleOnUpdate(modalRef, props, handlerMap) {
      modalRef.current.open({
        header: <UU5.Bricks.Lsi lsi={Lsi.updateFormHeader} />,
        content: <ParticipantForm values={props.data.data} onUpdate={handlerMap.update} modalRef={modalRef} />,
      });
    }
    function _handleOnDelete(confirmModalRef, props, handlerMap) {
      confirmModalRef.current.open({
        content: <UU5.Bricks.Lsi lsi={Lsi.deleteParticipantFormHeader} />,
        onRefuse: () => {},
        onConfirm: () => {
          handlerMap.delete({ id: props.data.data.id });
        },
        size: "s",
      });
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);

    return (
      !!props.data.data.id && (
        <div {...attrs}>
          <UU5.Bricks.Card
            elevationHover={"3"}
            colorSchema={"yellow"}
            style={{
              minHeight: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: "10px",
              border: "solid",
              textAlign: "left",
            }}
          >
            <h2>
              {firstName} {lastName}
            </h2>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.firstName} />: {firstName}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.lastName} />: {lastName}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.gender} />: {gender}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.nationality} />: {nationality}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.dateOfBirth} />: {dateOfBirth}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.passportNumber} />: {passportNumber}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.participantId} />: {id}
            </span>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <UU5.Bricks.Button size="m" onClick={() => _handleOnUpdate(modalRef, props, handlerMap)}>
                <UU5.Bricks.Icon icon="mdi-pencil" />
              </UU5.Bricks.Button>
              <UU5.Bricks.Button size="m" onClick={() => _handleOnDelete(confirmModalRef, props, handlerMap)}>
                <UU5.Bricks.Icon icon="mdi-trash-can-outline" />
              </UU5.Bricks.Button>
            </div>
          </UU5.Bricks.Card>
          <UU5.Bricks.Modal ref={modalRef} />
          <UU5.Bricks.ConfirmModal ref={confirmModalRef} />
        </div>
      )
    );
    //@@viewOff:render
  },
});

export default ParticipantCard;
