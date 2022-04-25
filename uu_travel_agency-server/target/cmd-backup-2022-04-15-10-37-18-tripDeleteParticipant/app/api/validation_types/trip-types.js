/* eslint-disable */

const tripCreateDtoInType = shape({
  title: string(250).isRequired(),
  price: number(0, 1000000),
  locationId: id().isRequired(),
  state: oneOf(["active", "draft"]).isRequired(),
  maxCapacity: number(1, 100),
  dateFrom: date().isRequired(),
});

const tripGetDtoInType = shape({
  id: id().isRequired(),
});

const tripDeleteDtoInType = shape({
  id: id().isRequired(),
});

const tripListDtoInType = shape({
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer(),
  }),
});

const tripUpdateDtoInType = shape({
  id: id().isRequired(),
  title: string(250).isRequired(),
  price: number(0, 1000000),
  locationId: id(),
  state: oneOf(["active", "draft"]),
  maxCapacity: number(1, 100),
  dateFrom: date().isRequired(),
  participantIdList: array(id()),
  // тут має бути масив з participantId
});
