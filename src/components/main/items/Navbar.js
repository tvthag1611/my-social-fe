import { Avatar, Image, Typography } from "antd";
import React from "react";
import { useAppAccount } from "utils/module/Account";
const { Title, Text } = Typography;

export default function Navbar() {
  const { account } = useAppAccount();
  return (
    <div className="navbar">
      <Title>My Social</Title>
      <div>
        <Text>{account.displayName}</Text>
        <Avatar src={account.imageUser} />
      </div>
    </div>
  );
}
