// actions.js
export const fetchData = () => ({
  type: "FETCH_DATA",
});

export const LoginUser = (data) => ({
  type: "LOGIN_USER",
  payload: { data },
});

export const LoginAdmin = (data) => ({
  type: "LOGIN_ADMIN",
  payload: { data },
});

export const RegisterAcount = (data) => ({
  type: "REGISTER_ACOUNT",
  payload: { data },
});

export const adminGetAllProduct = () => ({
  type: "GET_ALL_PRODUCT_ADMIN",
});

export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});

export const setDataProductAdmin = (data) => ({
  type: "SET_DATA_PRODUCT_ADMIN",
  payload: data,
});

export const setDataProductUser = (data) => ({
  type: "SET_DATA_PRODUCT_USER",
  payload: data,
});

export const CreateProduct = (data) => ({
  type: "CREATE_PRODUCT",
  payload: data,
});

export const setLoading = (data) => ({
  type: "SET_LOADING",
  payload: data,
});

export const setDataProductDetail = (data) => ({
  type: "SET_PRODUCT_DETAIL",
  payload: data,
});

export const CreateCard = (data) => ({
  type: "CREATE_CARD",
  payload: data,
});

export const setCard = (data) => ({
  type: "SET_CARD",
  payload: data,
});

export const DeleteCard = (data) => ({
  type: "DELETE_CARD",
  payload: data,
});

export const fetchCard = () => ({
  type: "FETCH_CARD",
});
