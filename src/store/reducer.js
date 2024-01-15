const initialState = {
  data: [],
  listProductAdmin: [],
  listProductUser: [],
  listCard: [],
  ProductDetail: {},
  listOrder:[],
  orderDetail:{},
  Loading: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_DATA_PRODUCT_ADMIN":
      return { ...state, listProductAdmin: action.payload };
    case "SET_DATA_PRODUCT_USER":
      return { ...state, listProductUser: action.payload };
    case "SET_PRODUCT_DETAIL":
      return { ...state, ProductDetail: action.payload };
    case "SET_CARD":
      return { ...state, listCard: action.payload };
    case "SET_ORDER_ADMIN":
      return { ...state, listOrder: action.payload };
    case "SET_ORDER_DETAIL":
      return { ...state, orderDetail: action.payload };
    case "SET_LOADING":
      return { ...state, Loading: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
