import axios from "axios";
import { TIME_OUT_API } from "../constants/index";
import { message } from "antd";

const httpClient = axios.create({
  baseURL: "https://thang.edtexco.com/",
  timeout: TIME_OUT_API,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const config = error.config;
    if (/[\w]*\/oauth\/token/g.test(config.url) || config.retry) {
      return Promise.reject(error.response.data);
    }
    if (error.response) {
      let errorMessage =
        error.response.data === null
          ? "Lỗi hệ thống, vui lòng liên hệ với quản trị viên!"
          : error.response.data.message;
      switch (error.response.status) {
        case 500:
          message.error("error500",3);
          break;
        case 499:
            break;
        case 404:
          message.error("error404",3);
          break;
        case 403:
          message.error("error403",3);
          break;
        case 401:
          message.error("error403",3);
          break;
        default:
          if (
            error.request.responseType === "blob" &&
            error.response.data instanceof Blob &&
            error.response.data.type &&
            error.response.data.type.toLowerCase().indexOf("json") !== -1
          ) {
            let errorString = await error.response.data.text();
            message.error(JSON.parse(errorString).message,3);
            break;
          }
          message.error(errorMessage,3);
          break;
      }
    }
    return Promise.reject(error.response ? error.response.data : error.response);
  },
);

class requestNoAuth {
  static callApi(api, data, params, headers) {
    return httpClient({
      method: api.method,
      url: api.url,
      data,
      params,
      headers,
    });
  }

  static upload(api, data, config) {
    return httpClient({
      method: api.method,
      url: api.url,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      ...config,
    });
  }

  static downloadItem(url, label) {
    httpClient
      .get(url, { responseType: "blob" })
      .then((response) => {
        const blob = new Blob([response.data], { type: "video/mp4" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = label;
        link.click();
        URL.revokeObjectURL(link.href);
      })
      .catch(console.error);
  }

  static postExport(path = "", data, params, headers, responseType) {
    return httpClient.post(path, data, { headers, params, responseType });
  }

  static getConfig(path = "", params, headers, responseType) {
    return httpClient.get(path, { headers, params, responseType });
  }

  static postConfig(path = "", params, headers, responseType) {
    return httpClient.post(path, null, { headers, params, responseType });
  }

  static get(path = "", params, headers) {
    return httpClient.get(path, { headers, params });
  }

  static post(path = "", data = {}, headers) {
    return httpClient.post(path, data, { headers });
  }

  static patch(path = "", data = {}, headers) {
    return httpClient.patch(path, data, { headers });
  }

  static delete(path = "", params, headers) {
    return httpClient.delete(path, { headers: headers, params });
  }

  static put(path = "", data = {}, headers) {
    return httpClient.put(path, data, { headers });
  }
}

export { requestNoAuth };
