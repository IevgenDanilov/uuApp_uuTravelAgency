//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef, useLsi } from "uu5g04-hooks";
import Uu5Tiles from "uu5tilesg02";
import Config from "../../config/config.js";
import ParticipantForm from "./participant-form.js";
import ParticipantCard from "./participant-card.js";
import Lsi from "../../lsi.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ParticipantsView",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const ParticipantsView = createVisualComponent({
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

    const sortedList = props.participantsDataList.data;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);

    return (
      <div {...attrs}>
        <Uu5Tiles.ControllerProvider data={props.participantsDataList.data}>
          <Uu5Tiles.ActionBar
            title={
              <b>
                <UU5.Bricks.Lsi lsi={Lsi.travelAgencyName} />
              </b>
            }
            searchable={false}
            actions={getActions(modalRef, props.participantsDataList.handlerMap)}
          />
          <Uu5Tiles.Grid
            data={props.participantsDataList.data}
            tileMinWidth={200}
            tileMaxWidth={320}
            tileSpacing={4}
            rowSpacing={4}
          >
            <ParticipantCard />
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
      content: useLsi(Lsi.addNewParticipant),
      colorSchema: "orange",
      onClick: () => {
        modalRef.current.open({
          header: <UU5.Bricks.Lsi lsi={Lsi.createFormHeader} />,
          content: <ParticipantForm onSave={handlerMap.create} modalRef={modalRef} />,
        });
      },
    },
  ];
}

export default ParticipantsView;
