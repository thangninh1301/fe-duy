export const ConstantAPI = {
  auth: {
    LOGIN_USER: {
      url: "/api/v1/users/login",
      method: "POST",
    },
    LOGIN_ADMIN: {
      url: "/api/v1/admin/login",
      method: "POST",
    },
    REGISTER_ACOUNT: {
      url: "/api/v1/users/register",
      method: "POST",
    },
  },
  product: {
    GET_ALL: {
      url: "/api/v1/product",
      method: "GET",
    },
    GET_PRODUCT_BY_ID: {
      url: "/api/v1/product",
      method: "GET",
    },
    CREATE: {
      url: "/api/v1/product",
      method: "POST",
    },
    DELETE: {
      url: "/api/v1/product",
      method: "DELETE",
    },
    UPDATE: {
      url: "/api/v1/product",
      method: "PUT",
    },
  },
  card: {
    GET_ALL: {
      url: "/api/v1/cart",
      method: "GET",
    },
    GET_PRODUCT_BY_ID: {
      url: "/api/v1/cart",
      method: "GET",
    },
    CREATE: {
      url: "/api/v1/cart",
      method: "POST",
    },
    DELETE: {
      url: "/api/v1/cart",
      method: "DELETE",
    },
  },
  order: {
    GET_ALL: {
      url: "/api/v1/order",
      method: "GET",
    },
    GET_ALL_ADMIN: {
      url: "/api/v1/admin/order",
      method: "GET",
    },
    GET_PRODUCT_BY_ID: {
      url: "/api/v1/order",
      method: "GET",
    },
    CREATE: {
      url: "/api/v1/order",
      method: "POST",
    },
    DELETE: {
      url: "/api/v1/order",
      method: "POST",
    },
  },
  upload: {
    UPLOAD_IMAGES: {
      url: "/api/v1/picture",
      method: "POST",
    },
  },
  customer: {
    GET_ALL: {
      url: "/api/v1/admin/users",
      method: "GET",
    },
    GET_BY_ID: {
      url: "/api/v1/admin/users",
      method: "GET",
    },
    UPDATE: {
      url: "/api/v1/admin/users",
      method: "PUT",
    },
    DELETE: {
      url: "/api/v1/admin/users",
      method: "DELETE",
    },
  },
};
