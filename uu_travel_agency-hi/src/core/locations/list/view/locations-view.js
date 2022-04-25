//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef, useLsi } from "uu5g04-hooks";
import Uu5Tiles from "uu5tilesg02";
import Config from "../../config/config.js";
import LocationForm from "./location-form.js";
import LocationCard from "./location-card.js";
import Lsi from "../../lsi.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "LocationsView",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const LocationsView = createVisualComponent({
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

    //@@viewOn:private

    const sortedList = props.locationsDataList.data;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);

    return (
      <div {...attrs}>
        <Uu5Tiles.ControllerProvider data={props.locationsDataList.data}>
          <Uu5Tiles.ActionBar
            title={
              <b>
                <UU5.Bricks.Lsi lsi={Lsi.travelAgencyName} />
              </b>
            }
            searchable={false}
            actions={getActions(modalRef, props.locationsDataList.handlerMap)}
          />
          <Uu5Tiles.Grid
            data={props.locationsDataList.data}
            tileMinWidth={200}
            tileMaxWidth={320}
            tileSpacing={4}
            rowSpacing={4}
          >
            <LocationCard />
          </Uu5Tiles.Grid>
        </Uu5Tiles.ControllerProvider>
        <UU5.Bricks.Modal ref={modalRef} />
        <UU5.Bricks.ConfirmModal ref={confirmModalRef} />
      </div>
    );
    //@@viewOff:render
  },
});

function getActions(modalRef, handlerMap) {
  return [
    {
      active: true,
      icon: "mdi-plus",
      content: useLsi(Lsi.addNewLocation),
      colorSchema: "red",
      onClick: () => {
        modalRef.current.open({
          header: <UU5.Bricks.Lsi lsi={Lsi.createFormHeader} />,
          content: <LocationForm onSave={handlerMap.create} modalRef={modalRef} />,
        });
      },
    },
  ];
}

export default LocationsView;
