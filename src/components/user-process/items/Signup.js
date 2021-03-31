import React from "react";
import { Form, Input, Button, message } from "antd";
import { FetchApi } from "utils/module/FetchAPI";
import { Validate } from "utils";

const tailLayout = {
  wrapperCol: {
    offset: 7,
    span: 16,
  },
};

export default function Signup({ title }) {
  const onFinish = async (values) => {
    const result = await FetchApi.signup(values);
    if (result.status === 200) {
      message.success("sign up success, you can login");
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

      <Form.Item
        name="confirmPassword"
        rules={[Validate.validateconfirmPassword]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item
        name="displayName"
        rules={[
          {
            required: true,
            message: "Vui lòng điền họ và tên của bạn",
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {title}
        </Button>
      </Form.Item>
    </Form>
  );
}
