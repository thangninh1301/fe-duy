// sagas.js
import { takeEvery, put, call } from "redux-saga/effects";
import {
  setData,
  setDataProductAdmin,
  adminGetAllProduct,
  setDataProductUser,
  setLoading,
  setDataProductDetail,
  setCard,
  fetchCard,
  setDataOrder,
  setDataOrderDetail,
  setQRCode,
  setCustomer,
  setProfile,
} from "./action";
import { setToken, setTokenAdmin } from "../utils/index";
import { configService } from "../services/configRequest";
import { ConstantAPI } from "../services/ConstantAPI";
import { requestNoAuth } from "../services/requestNoAuth";
import { adminRequest } from "../services/adminRequest";
import { message } from "antd";

function* fetchDataSaga() {
  try {
    const data = yield call(() =>
      configService.callApi(ConstantAPI.auth.LOGIN, null, null)
    );

    yield put(setData(data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* LoginUser(data) {
  try {
    const response = yield call(() =>
      requestNoAuth.callApi(
        ConstantAPI.auth.LOGIN_USER,
        { ...data?.payload },
        null
      )
    );
    if (response?.success === true) {
      setToken(JSON.stringify(response));
      window.location.href = "/";
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* LoginAdmin(data) {
  try {
    const response = yield call(() =>
      requestNoAuth.callApi(
        ConstantAPI.auth.LOGIN_ADMIN,
        { ...data?.payload },
        null
      )
    );

    if (response?.success === true) {
      setTokenAdmin(JSON.stringify(response));
      window.location.href = "/admin";
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* RegisterAcount(data) {
  try {
    const response = yield call(() =>
      requestNoAuth.callApi(
        ConstantAPI.auth.REGISTER_ACOUNT,
        { ...data?.payload },
        null
      )
    );

    if (response?.success === true) {
      message.success("thành công");
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* FetchProductAdmin() {
  try {
    const response = yield call(() =>
      requestNoAuth.callApi(ConstantAPI.product.GET_ALL, null, null)
    );

    if (response?.success === true) {
      yield put(setDataProductAdmin(response?.data?.row));
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* FetchProductUser(data) {
  try {
    const response = yield call(() =>
      configService.callApi(ConstantAPI.product.GET_ALL, null, {
        ...data?.payload,
      })
    );

    if (response?.success === true) {
      yield put(setDataProductUser(response?.data?.row));
    } else {
      message.error(response.reason);
    }
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* CreateProduct(data) {
  try {
    const response = yield call(() =>
      adminRequest.callApi(ConstantAPI.product.CREATE, data?.payload, null)
    );

    if (response?.success === true) {
      message.success("thành công");
      yield put(adminGetAllProduct());
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* FetchProductDeatil(data) {
  try {
    const response = yield call(() =>
      configService.get(
        `${ConstantAPI.product.GET_PRODUCT_BY_ID.url}/${data?.payload?.id}`,
        null,
        null
      )
    );

    if (response?.success === true) {
      yield put(setDataProductDetail(response?.data?.row[0]));
    } else {
      message.error(response.reason);
    }
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* CreateCard(data) {
  try {
    const response = yield call(() =>
      configService.callApi(ConstantAPI.card.CREATE, data?.payload, null)
    );

    if (response?.success === true) {
      message.success("thành công");
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* FetchCard() {
  try {
    const response = yield call(() =>
      configService.callApi(ConstantAPI.card.GET_ALL, null, null)
    );

    if (response?.success === true) {
      yield put(setCard(response?.data?.row));
    } else {
      message.error(response.reason);
    }
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* DeleteCard(data) {
  try {
    const response = yield call(() =>
      configService.delete(
        ConstantAPI.card.CREATE.url + "/" + data?.payload?.id,
        data?.payload,
        null
      )
    );

    if (response?.success === true) {
      message.success("thành công");
      yield put(fetchCard());
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* OrderProduct(data) {
  try {
    const response = yield call(() =>
      configService.callApi(ConstantAPI.order.CREATE, data?.payload, null)
    );

    if (response?.success === true) {
      yield put(fetchCard());
      message.success("Đặt hàng thành công");
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* FetchOderAdmin() {
  try {
    const response = yield call(() =>
      adminRequest.callApi(ConstantAPI.order.GET_ALL_ADMIN, null, null)
    );

    if (response?.success === true) {
      yield put(setDataOrder(response?.data?.row));
    } else {
      message.error(response.reason);
    }
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* FetchOderUser() {
  try {
    const response = yield call(() =>
      configService.callApi(ConstantAPI.order.GET_ALL, null, null)
    );

    if (response?.success === true) {
      yield put(setDataOrder(response?.data?.row));
    } else {
      message.error(response.reason);
    }
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* FetchOderDetail(data) {
  try {
    const response = yield call(() =>
      configService.get(
        ConstantAPI.order.GET_PRODUCT_BY_ID.url + "/" + data.payload.id,
        null,
        null
      )
    );

    if (response?.success === true) {
      yield put(setDataOrderDetail(response?.data));
    } else {
      message.error(response.reason);
    }
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* GenQRCode(data) {
  try {
    const response = yield call(() =>
      configService.post(
        "https://api.vietqr.io/v2/generate",
        { ...data?.payload },
        null
      )
    );

    yield put(setQRCode(response?.data));

    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* DeleteProduct(data) {
  try {
    const response = yield call(() =>
      adminRequest.delete(
        ConstantAPI.product.DELETE.url + "/" + data?.payload?.id,
        data?.payload,
        null
      )
    );

    if (response?.success === true) {
      message.success("thành công");
      yield put(FetchProductAdmin());
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}




function* updateProduct(data) {
  try {
    const response = yield call(() =>
      adminRequest.put(
        ConstantAPI.product.UPDATE.url +'/'+data?.payload?.id,
        data?.payload,
        null
      )
    );

    if (response?.success === true) {
      message.success("thành công");
      yield put(FetchProductAdmin());
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* FetchCustomerAdmin() {
  try {
    const response = yield call(() =>
      adminRequest.callApi(ConstantAPI.customer.GET_ALL, null, null)
    );

    if (response?.success === true) {
      yield put(setCustomer(response?.data?.users));
    } else {
      message.error(response.reason);
    }
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* FetchProfile(data) {
  try {
    const response = yield call(() =>
      adminRequest.get(ConstantAPI.customer.GET_BY_ID.url+'/'+data?.payload?.id, null, null)
    );

    if (response?.success === true) {
      if(response?.data?.users?.length>0){
       yield put(setProfile(response?.data?.users[0]));
      }
    } else {
      message.error(response.reason);
    }
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
function* DeleteCustomer(data) {
  try {
    const response = yield call(() =>
      adminRequest.delete(
        ConstantAPI.customer.DELETE.url + "/" + data?.payload?.id,
        data?.payload,
        null
      )
    );

    if (response?.success === true) {
      message.success("thành công");
      yield put(FetchCustomerAdmin());
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* updateCustomer(data) {
  try {
    const response = yield call(() =>
      adminRequest.put(
        ConstantAPI.customer.UPDATE.url + "/" + data?.payload?.id,
        data?.payload,
        null
      )
    );

    if (response?.success === true) {
      message.success("thành công");
      yield put(FetchCustomerAdmin());
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_DATA", fetchDataSaga);
  yield takeEvery("LOGIN_USER", LoginUser);
  yield takeEvery("LOGIN_ADMIN", LoginAdmin);
  yield takeEvery("REGISTER_ACOUNT", RegisterAcount);
  yield takeEvery("GET_ALL_PRODUCT_ADMIN", FetchProductAdmin);
  yield takeEvery("GET_ALL_PRODUCT_USER", FetchProductUser);
  yield takeEvery("CREATE_PRODUCT", CreateProduct);
  yield takeEvery("GET_PRODUCT_DETAIL", FetchProductDeatil);
  yield takeEvery("CREATE_CARD", CreateCard);
  yield takeEvery("FETCH_CARD", FetchCard);
  yield takeEvery("DELETE_CARD", DeleteCard);
  yield takeEvery("ORDER_PRODUCT", OrderProduct);
  yield takeEvery("FETCH_ORDER_ADMIN", FetchOderAdmin);
  yield takeEvery("FETCH_ORDER_USER", FetchOderAdmin);
  yield takeEvery("FETCH_ORDER_DETAIL", FetchOderDetail);
  yield takeEvery("GEN_QRCODE", GenQRCode);
  yield takeEvery("DELETE_PRODUCT", DeleteProduct);
  yield takeEvery("UPDATE_PRODUCT", updateProduct);
  yield takeEvery("FETCH_CUSTOMER", FetchCustomerAdmin);
  yield takeEvery("FETCH_CUSTOMER_DETAIL", FetchProfile);
  yield takeEvery("UPDATE_CUSTOMER", updateCustomer);
   yield takeEvery("DELETE_CUSTOMER", DeleteCustomer);
   yield takeEvery("FETCH_ORDER_USER", FetchOderUser);
}

export default rootSaga;
