import React from "react";
import { Form, Input, Button, message } from "antd";
import { FetchApi } from "utils/module/FetchAPI";
import { useAppAccount } from "utils/module/Account";
import { useHistory } from "react-router";

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function Login({ title }) {
  const { account, setAccount } = useAppAccount();
  console.log(account);
  const history = useHistory();
  const onFinish = async (values) => {
    const username = values.username;
    const password = values.password;
    const result = await FetchApi.login(username, password);
    if (result.status === 200) {
      message.success("login success");
      setAccount({ ...result.data, accessToken: result.accessToken });
      history.push("/");
    } else {
      message.error(result.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Vui lòng điền username",
          },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng điền mật khẩu",
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {title}
        </Button>
      </Form.Item>
    </Form>
  );
}
