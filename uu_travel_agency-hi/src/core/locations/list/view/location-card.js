//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import "uu5g04-forms";
import Config from "../../config/config.js";
import Lsi from "../../lsi.js";
import LocationForm from "./location-form.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "LocationCard",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const LocationCard = createVisualComponent({
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

    const { id, title, state, address, pricePerNight, rating } = props.data.data;
    const { handlerMap } = props.data;

    //@@viewOn:private
    function _handleOnUpdate(modalRef, props, handlerMap) {
      modalRef.current.open({
        header: <UU5.Bricks.Lsi lsi={Lsi.updateFormHeader} />,
        content: <LocationForm values={props.data.data} onUpdate={handlerMap.update} modalRef={modalRef} />,
      });
    }
    function _handleOnDelete(confirmModalRef, props, handlerMap) {
      confirmModalRef.current.open({
        content: <UU5.Bricks.Lsi lsi={Lsi.deleteLocationFormHeader} />,
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
            colorSchema={state === "opened" ? "red" : "grey"}
            // colorSchema={"red"}
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
            <h2>{title}</h2>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.title} />: {title}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.state} />: {state}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.address} />: {address}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.pricePerNight} />: {pricePerNight}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.rating} />: {rating}
            </span>
            <span>
              <UU5.Bricks.Lsi lsi={Lsi.locationId} />: {id}
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

export default LocationCard;
