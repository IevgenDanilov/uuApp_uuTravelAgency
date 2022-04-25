//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef, useState } from "uu5g04-hooks";
import { useRoute } from "uu5g05";
import "uu5g04-forms";
import Config from "../../config/config.js";
import Lsi from "../../lsi.js";
import TripForm from "./trip-form.js";
import TripItem from "../../../../routes/trip-item.js";
import useLocations from "../../../locations/context/use-locations.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "TripCard",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const TripCard = createVisualComponent({
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
    const [route, setRoute] = useRoute();
    // const tripsDataList = useTrips();
    const locationsDataList = useLocations();
    // const participantsDataList = useParticipants();
    //@@viewOff:hooks

    const { id, title, dateFrom, locationId, state } = props.data.data;
    const { handlerMap } = props.data;

    const location = locationsDataList.data.find((item) => item.data.id === locationId);

    //@@viewOn:private
    function _handleOnUpdate(modalRef, props, handlerMap) {
      modalRef.current.open({
        header: <UU5.Bricks.Lsi lsi={Lsi.updateFormHeader} />,
        content: <TripForm values={props.data.data} onUpdate={handlerMap.update} modalRef={modalRef} />,
      });
    }
    function _handleOnDelete(confirmModalRef, props, handlerMap) {
      confirmModalRef.current.open({
        content: <UU5.Bricks.Lsi lsi={Lsi.deleteTrip} />,
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
            colorSchema={props.data.data.state === "active" ? "blue" : "grey"}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: "10px",
              border: "thick double",
              minHeight: "350px",
              textAlign: "center",
            }}
          >
            <UU5.Bricks.Header level={2} style={{ textAlign: "center" }}>
              <UU5.Bricks.Icon icon="mdi-airplane" style={{ color: "white" }} />
              <span> {title}</span>
            </UU5.Bricks.Header>
            <UU5.Bricks.Table striped bordered>
              <UU5.Bricks.Table.TBody>
                <UU5.Bricks.Table.Tr>
                  <UU5.Bricks.Table.Th
                    content="Date"
                    colorSchema={props.data.data.state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                  <UU5.Bricks.Table.Th
                    content={dateFrom}
                    colorSchema={props.data.data.state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                </UU5.Bricks.Table.Tr>
                <UU5.Bricks.Table.Tr>
                  <UU5.Bricks.Table.Th
                    content="Location"
                    colorSchema={props.data.data.state === "active" ? "blue" : "grey"}
                    // style={{ padding: "10px" }}
                  ></UU5.Bricks.Table.Th>
                  <UU5.Bricks.Table.Th
                    content={location.data.title}
                    colorSchema={props.data.data.state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                </UU5.Bricks.Table.Tr>
              </UU5.Bricks.Table.TBody>
            </UU5.Bricks.Table>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <UU5.Bricks.Button size="l" onClick={() => _handleOnUpdate(modalRef, props, handlerMap)}>
                <UU5.Bricks.Icon icon="mdi-pencil" />
              </UU5.Bricks.Button>
              <UU5.Bricks.Button
                size="l"
                onClick={() => {
                  setRoute("trip", { id: props.data.data.id }, { component: <TripItem data={props.data.data} /> });
                }}
                content="Details"
              />
              <UU5.Bricks.Button
                disabled={state === "active"}
                size="l"
                onClick={() => _handleOnDelete(confirmModalRef, props, handlerMap)}
              >
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

export default TripCard;
