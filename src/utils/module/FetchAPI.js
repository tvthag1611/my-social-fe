import { AccountService } from "./Account";
import { host } from "../constants";
import { message } from "antd";

const apis = host;

const CommonCall = async (api, header) => {
  try {
    const accessToken = AccountService.get().accessToken;
    let headers;
    if (accessToken) {
      headers = {
        "x-access-token": `Bearer ${accessToken}`,
        "Content-Type": "application-json",
        Accept: "application-json",
      };
    } else {
      headers = {
        "Content-Type": "application-json",
        Accept: "application-json",
      };
    }
    let head = {
      ...header,
      headers,
    };
    const response = await fetch(api, { ...head });
    if (response.status === 500) {
      return {
        status: response.status,
        message: "Loi mang",
        success: false,
      };
    }

    if (response.status === 200) {
      let resultConverted = await response.json();

      if (resultConverted.status === 200) {
        return {
          success: true,
          data: resultConverted.data,
          status: 200,
        };
      }
      return resultConverted;
    }
  } catch (error) {
    return {
      success: false,
      message: "Loi mang",
    };
  }
};

const FetchApi = {
  login: async (username, password) => {
    const header = {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    const api = `${apis}/auth/login`;
    const result = await CommonCall(api, header);
    return result;
  },
  uploadFile: async (file) => {
    const result = await upFile(file, `${apis}/uploads`);
    return result;
  },
};

const upFile = async (file, api) => {
  const accessToken = AccountService.get().accessToken;
  var formData = new FormData();
  formData.append("file", file);
  const header = {
    method: "POST",
    body: formData,
    headers: {
      "x-access-token": `Bearer ${accessToken}`,
    },
  };
  try {
    const result = await fetch(api, header);
    const responseJSON = await result.json();
    return responseJSON;
  } catch (error) {
    message.info("Loi mang");
  }
};

export { FetchApi, CommonCall };
