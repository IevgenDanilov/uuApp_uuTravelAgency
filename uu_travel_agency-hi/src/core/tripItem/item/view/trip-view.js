//@@viewOn:imports
import UU5 from "uu5g04";
import Uu5Tiles from "uu5tilesg02";
import { createVisualComponent, useRef, useLsi, useState } from "uu5g04-hooks";
import Config from "../../config/config.js";
import Lsi from "../../lsi.js";
import ParticipantForm from "./participant-form.js";
import TripForm from "./trip-form.js";
import AddParticipantForm from "./add-participant-form.js";
import useLocations from "../../../locations/context/use-locations.js";
import useParticipants from "../../../participants/context/use-participants.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "TripView",
  nestingLevel: "bigBox",
  //@@viewOff:statics
};

export const TripsListView = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const { id, title, price, participantIdList, state, maxCapacity, dateFrom, locationId } = props.dataObject.data;
    const { handlerMap } = props.dataObject;

    //@@viewOn:hooks
    const modalRef = useRef();
    const addModalRef = useRef();
    const confirmModalRef = useRef();
    const locationsDataList = useLocations();
    const participantsDataList = useParticipants();
    const [isHidden, setisHidden] = useState(true);
    //@@viewOff:hooks

    //@@viewOn:private
    const location = locationsDataList.data.find((location) => location.data.id === locationId);

    function _getTripParlicipants() {
      return participantIdList && participantIdList.length
        ? participantsDataList.data.filter((item) => participantIdList.includes(item.data.id))
        : [];
    }

    function _handleOnUpdate(modalRef, props, handlerMap) {
      modalRef.current.open({
        header: <UU5.Bricks.Lsi lsi={Lsi.updateFormHeader} />,
        content: <TripForm values={props.dataObject.data} onUpdate={handlerMap.update} modalRef={modalRef} />,
      });
    }
    function _handleOnDelete(confirmModalRef, id, handlerMap) {
      confirmModalRef.current.open({
        content: <UU5.Bricks.Lsi lsi={Lsi.deleteTrip} />,
        onRefuse: () => {},
        onConfirm: () => {
          handlerMap.delete({ id: id });
        },
        size: "s",
      });
    }

    function _OnParticipantUpdate(modalRef, values, handlerMap) {
      modalRef.current.open({
        header: <UU5.Bricks.Lsi lsi={Lsi.updateFormHeader} />,
        content: <ParticipantForm values={values} onUpdate={handlerMap.update} modalRef={modalRef} />,
      });
    }
    function _OnParticipantDelete(tripId, confirmModalRef, props, handlerMap) {
      let { id } = props;
      confirmModalRef.current.open({
        content: <UU5.Bricks.Lsi lsi={Lsi.deleteParticipant} />,
        onConfirm: () => handlerMap.removeParticipant({ tripId: tripId, participantId: id }),
        size: "m",
      });
    }

    const genderCategoryList = [
      { id: "1", gender: "man" },
      { id: "2", gender: "woman" },
    ];

    const FILTERS = [
      {
        key: "gender",
        label: { uk: "Стать", en: "Gender" },
        component: (
          <UU5.Forms.Select>
            {genderCategoryList.map((genderCategory) => (
              <UU5.Forms.Select.Option key={genderCategory.id} value={genderCategory.gender} />
            ))}
          </UU5.Forms.Select>
        ),
        filterFn: (item, value) => {
          let fragments = value.split(/[\s,.-;:_]/);
          return fragments.some((frag) => {
            let itemValue =
              typeof item.data.gender === "object"
                ? UU5.Common.Tools.getLsiItemByLanguage(item.data.gender)
                : item.data.gender;
            return itemValue.toLowerCase().indexOf(frag.toLowerCase()) !== -1;
          });
        },
      },
    ];

    const SORTERS = [
      {
        key: "firstName",
        label: { uk: "Ім'я", en: "First name" },
        sorterFn: (a, b) => {
          return UU5.Common.Tools.getLsiItemByLanguage(a.data.firstName).localeCompare(
            UU5.Common.Tools.getLsiItemByLanguage(b.data.firstName)
          );
        },
      },
      {
        key: "lastName",
        label: { uk: "Прізвище", en: "Last name" },
        sorterFn: (a, b) => {
          return UU5.Common.Tools.getLsiItemByLanguage(a.data.lastName).localeCompare(
            UU5.Common.Tools.getLsiItemByLanguage(b.data.lastName)
          );
        },
      },
    ];
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className, confirmModalRef, modalRef);
    return (
      <div {...attrs}>
        <Uu5Tiles.ControllerProvider data={_getTripParlicipants()} filters={FILTERS} sorters={SORTERS}>
          <UU5.Bricks.Card
            colorSchema={state === "active" ? "blue" : "grey"}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: "30px 100px",
              border: "thick double",
              textAlign: "center",
            }}
          >
            <Uu5Tiles.ActionBar
              title={"Travel agency 'SLAVA UKRAINI'"}
              searchable={false}
              actions={getActions(addModalRef, handlerMap)}
            />
            <UU5.Bricks.Header level={4} style={{ textAlign: "center" }}>
              <UU5.Bricks.Icon icon="mdi-airplane" style={{ color: "white" }} />
              <span> {title}</span>
            </UU5.Bricks.Header>
            <UU5.Bricks.Table striped bordered>
              <UU5.Bricks.Table.TBody>
                <UU5.Bricks.Table.Tr>
                  <UU5.Bricks.Table.Th
                    content="Date"
                    colorSchema={state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                  <UU5.Bricks.Table.Th
                    content={dateFrom}
                    colorSchema={state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                  <UU5.Bricks.Table.Th
                    content="Max capacity"
                    colorSchema={state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                  <UU5.Bricks.Table.Th
                    content={maxCapacity}
                    colorSchema={state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                </UU5.Bricks.Table.Tr>
                <UU5.Bricks.Table.Tr>
                  <UU5.Bricks.Table.Th
                    content="Location"
                    colorSchema={state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                  <UU5.Bricks.Table.Th
                    content={location.data.title}
                    colorSchema={state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                  <UU5.Bricks.Table.Th
                    content="Price"
                    colorSchema={state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                  <UU5.Bricks.Table.Th
                    content={price}
                    colorSchema={state === "active" ? "blue" : "grey"}
                  ></UU5.Bricks.Table.Th>
                </UU5.Bricks.Table.Tr>
              </UU5.Bricks.Table.TBody>
            </UU5.Bricks.Table>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <UU5.Bricks.Button size="xl" onClick={() => _handleOnUpdate(modalRef, props, handlerMap)}>
                <UU5.Bricks.Icon icon="mdi-pencil" />
              </UU5.Bricks.Button>
              <UU5.Bricks.Button size="xl" onClick={() => setisHidden(!isHidden)} content="Participants" />
              <UU5.Bricks.Button
                disabled={state === "active"}
                size="xl"
                onClick={() => _handleOnDelete(confirmModalRef, props.dataObject.data.id, handlerMap)}
              >
                <UU5.Bricks.Icon icon="mdi-trash-can-outline" />
              </UU5.Bricks.Button>
            </div>
          </UU5.Bricks.Card>
          <UU5.Bricks.Card
            hidden={isHidden}
            colorSchema={state === "active" ? "orange" : "grey"}
            style={{
              padding: "30px 100px",
              border: "thick double",
              textAlign: "center",
            }}
          >
            <Uu5Tiles.ActionBar
              title={"Travel agency 'SLAVA UKRAINI'"}
              searchable={false}
              actions={getParticipantActions(id, addModalRef, handlerMap)}
            />
            <UU5.Bricks.Header level={4} style={{ textAlign: "center" }}>
              <UU5.Bricks.Icon icon="mdi-format-list-bulleted" />
              <span>
                {" "}
                <UU5.Bricks.Lsi lsi={Lsi.listOfParticipants} />
              </span>
            </UU5.Bricks.Header>
            <div>
              <Uu5Tiles.FilterBar colorSchema={state === "active" ? "orange" : "grey"} />
              <Uu5Tiles.SorterBar initialDisplayed />
              <Uu5Tiles.List
                columns={getColumns(
                  _OnParticipantDelete,
                  _OnParticipantUpdate,
                  id,
                  modalRef,
                  confirmModalRef,
                  participantsDataList.data,
                  handlerMap
                )}
              />
            </div>
          </UU5.Bricks.Card>
          <UU5.Bricks.Modal ref={modalRef} />
          <UU5.Bricks.Modal ref={addModalRef} />
          <UU5.Bricks.ConfirmModal ref={confirmModalRef} />
        </Uu5Tiles.ControllerProvider>
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
      content: useLsi(Lsi.addNewTrip),
      colorSchema: "blue",
      onClick: () => {
        modalRef.current.open({
          header: <UU5.Bricks.Lsi lsi={Lsi.createFormHeader} />,
          content: <TripForm onSave={handlerMap.create} modalRef={modalRef} />,
        });
      },
    },
  ];
}

function getParticipantActions(id, modalRef, handlerMap) {
  return [
    {
      active: true,
      icon: "mdi-plus",
      content: useLsi(Lsi.addParticipant),
      colorSchema: "orange",
      onClick: () => {
        modalRef.current.open({
          header: <UU5.Bricks.Lsi lsi={Lsi.addParticipantFormHeader} />,
          content: <AddParticipantForm tripId={id} onSave={handlerMap.addParticipant} modalRef={modalRef} />,
        });
      },
    },
  ];
}

function getColumns(_OnParticipantDelete, _OnParticipantUpdate, id, modalRef, confirmModalRef, props, handlerMap) {
  return [
    {
      key: "firstName",
      cell: (cell) => <UU5.Bricks.Text>{cell.data.data.firstName}</UU5.Bricks.Text>,
      header: "First Name",
    },
    {
      key: "lastName",
      cell: (cell) => <UU5.Bricks.Text>{cell.data.data.lastName}</UU5.Bricks.Text>,
      header: "Last Name",
    },
    {
      key: "gender",
      cell: (cell) => <UU5.Bricks.Text>{cell.data.data.gender}</UU5.Bricks.Text>,
      header: "Gender",
    },
    {
      key: "nationality",
      cell: (cell) => <UU5.Bricks.Text>{cell.data.data.nationality}</UU5.Bricks.Text>,
      header: "Nationality",
    },
    ,
    {
      key: "dateOfBirth",
      cell: (cell) => <UU5.Bricks.Text>{cell.data.data.dateOfBirth}</UU5.Bricks.Text>,
      header: "Date of birth",
    },
    {
      key: "passportNumber",
      cell: (cell) => <UU5.Bricks.Text>{cell.data.data.passportNumber}</UU5.Bricks.Text>,
      header: "Passport number",
    },
    {
      width: "50px",
      key: "update",
      cell: (cell) => (
        <UU5.Bricks.Button onClick={() => _OnParticipantUpdate(modalRef, cell.data.data, cell.data.handlerMap)}>
          <UU5.Bricks.Icon icon="mdi-pencil" />
        </UU5.Bricks.Button>
      ),
    },
    {
      width: "50px",
      key: "delete",
      cell: (cell) => (
        <UU5.Bricks.Button onClick={() => _OnParticipantDelete(id, confirmModalRef, cell.data.data, handlerMap)}>
          <UU5.Bricks.Icon icon="mdi-trash-can-outline" />
        </UU5.Bricks.Button>
      ),
    },
  ];
}

export default TripsListView;
