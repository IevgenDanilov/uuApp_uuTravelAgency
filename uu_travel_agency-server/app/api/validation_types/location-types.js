/* eslint-disable */

const locationCreateDtoInType = shape({
  title: string(250).isRequired(),
  state: oneOf(["opened", "closed"]),
  address: string(250),
  pricePerNight: number(0, 1000000),
  rating: number(0, 10),
  code: uu5String(255),
  image: binary(),
});

const locationUpdateDtoInType = shape({
  id: id().isRequired(),
  title: string(250),
  state: oneOf(["opened", "closed"]),
  address: string(250),
  pricePerNight: number(0, 1000000),
  rating: number(0, 10),
  code: uu5String(255),
  image: binary(),
});

const locationListDtoInType = shape({
  pageInfo: shape({
    pageIndex: integer(500),
    pageSize: integer(50),
  }),
});

const locationGetDtoInType = shape({
  id: id().isRequired(),
});

const locationDeleteDtoInType = shape({
  id: id().isRequired(),
});
