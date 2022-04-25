/* eslint-disable */

const participantCreateDtoInType = shape({
  firstName: string(100).isRequired(),
  lastName: string(100).isRequired(),
  gender: oneOf(["man", "woman"]),
  nationality: string(100),
  dateOfBirth: date(),
  passportNumber: string(20).isRequired(),
});

const participantListDtoInType = shape({
  firstName: string(100),
  lastName: string(100),
  tripId: id(),
  gender: oneOf(["man", "woman"]),
  sortBy: oneOf(["firstName", "lastName"]),
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer(),
  }),
});

const participantUpdateDtoInType = shape({
  id: id().isRequired(),
  firstName: string(100),
  lastName: string(100),
  gender: oneOf(["man", "woman"]),
  nationality: string(100),
  dateOfBirth: date(),
  passportNumber: string(20),
});

const participantGetDtoInType = shape({
  id: id().isRequired(),
});

const participantDeleteDtoInType = shape({
  id: id().isRequired(),
});
