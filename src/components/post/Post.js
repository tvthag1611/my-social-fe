import { Avatar, Card, Image, Typography } from "antd";
import React from "react";
import "./Post.scss";
const { Text } = Typography;
const TitlePost = ({ imageUser, displayName }) => {
  return (
    <div>
      <Avatar src={imageUser} />
      <Text>{displayName}</Text>
    </div>
  );
};
export default function Post({
  imageUser,
  displayName,
  content,
  imageContent,
  reaction,
}) {
  return (
    <Card
      title={<TitlePost imageUser={imageUser} displayName={displayName} />}
      extra={<span>MORE</span>}
    >
      <p>{content}</p>
      <Image src={imageContent} />
    </Card>
  );
}
