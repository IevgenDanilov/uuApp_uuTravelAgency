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
    pageIndex: integer(20000),
    pageSize: integer(50),
  }),
});

const tripUpdateDtoInType = shape({
  id: id().isRequired(),
  title: string(250),
  price: number(0, 1000000),
  locationId: id(),
  state: oneOf(["active", "draft"]).isRequired(),
  maxCapacity: number(1, 100),
  dateFrom: date(),
  participantIdList: array(),
});

const tripAddParticipantDtoInType = shape({
  tripId: id().isRequired(),
  participantId: id().isRequired(),
});

const tripRemoveParticipantDtoInType = shape({
  tripId: id().isRequired(),
  participantId: id().isRequired(),
});
