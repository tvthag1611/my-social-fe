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
        "x-access-token": `${accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    } else {
      headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    }
    let head = {
      ...header,
      headers,
    };
    const response = await fetch(api, { ...head });
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Loi mang",
    };
  }
};

const FetchApi = {
  login: async (username, password) => {
    const body = JSON.stringify({
      username: username,
      password: password,
    });
    const header = {
      method: "POST",
      body: body,
    };
    const api = `${apis}/auth/login`;
    const result = await CommonCall(api, header);
    return result;
  },
  signup: async (data) => {
    const account = JSON.stringify({
      username: data.username,
      password: data.password,
    });

    const user = JSON.stringify({
      username: data.username,
      displayName: data.displayName,
    });

    const headerAcc = {
      method: "POST",
      body: account,
    };

    const headerUser = {
      method: "POST",
      body: user,
    };

    const apiAcc = `${apis}/auth/register`;
    await CommonCall(apiAcc, headerAcc);
    const apiUser = `${apis}/users`;
    const result = await CommonCall(apiUser, headerUser);

    return result;
  },
  uploadFile: async (file) => {
    const result = await upFile(file, `${apis}/uploads`);
    return result;
  },
  getListPost: async () => {
    const header = {
      method: "GET",
    };
    const api = `${apis}/socials`;
    const result = await CommonCall(api, header);
    return result;
  },
  getUser: async (username) => {
    const header = {
      method: "GET",
    };
    const api = `${apis}/users/${username}`;
    const result = await CommonCall(api, header);
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
    message.error("Loi mang");
  }
};

export { FetchApi, CommonCall };
