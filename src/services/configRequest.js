import axios from "axios";
import {ConstantAPI} from "./ConstantAPI";
import { message } from "antd";
import { getToken, setToken } from "../utils/index";
import { TIME_OUT_API } from "../constants/index";

const httpClient = axios.create({
  baseURL: "https://thang.edtexco.com/",
  timeout: TIME_OUT_API,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  const { headers } = config;
  config.headers = {
    ...headers,
    token: `${getToken()?.data?.token}`,
  };
  return config;
});

let refreshing = false;

httpClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if(!error.response){
      message.error("Failed to load response data");
      return
    }
    const config = error.config;
    if (/[\w]*\/oauth\/token/g.test(config.url) || config.retry) {
      return Promise.reject(error.response.data);
    }
    if (error.response) {
      let errorMessage = error.response.data === null ? "Lỗi hệ thống, vui lòng liên hệ với quản trị viên!" : error.response.data.message;
      switch (error.response.status) {
        case 500:
          message.error("Loading finished", 3);
          break;
        case 499:
            break;
        case 404:
          message.error("Loading finished", 3);
          break;
        case 403:
          message.error("Loading finished", 3);
          break;
        case 401:
          try {
            if (refreshing && !config.retry) {
              for (let i = 0; i < 10; i++) {
                await new Promise((r) => setTimeout(r, 100));
                if (!refreshing) break;
              }
              return httpClient(config);
            }
            config.retry = true;
            refreshing = true;
            const response = await configService.callApi(
              ConstantAPI.auth.LOGIN,
              {
                grant_type: "refresh_token",
                refresh_token: getToken()?.refresh_token,
              },
              null,
              {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic Y2xpZW50MTpzZWNyZXQ=",
              }
            );
            setToken(JSON.stringify(response));
            refreshing = false;
            return httpClient(config);
          } catch (_error) {
            (Object.keys(window.localStorage) || []).forEach((key) => {
              window.localStorage.removeItem(key);
            });
            window.location.href = "/login";
            refreshing = false;
            return Promise.reject(_error);
          }
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

class configService {
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

export { configService };
