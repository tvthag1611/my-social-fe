import { Layout } from "antd";
import Post from "components/post/Post";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Redirect } from "react-router";
import { FetchApi } from "utils";
import { useAppAccount } from "utils/module/Account";
import Navbar from "./items/Navbar";
import "./Main.scss";
const { Content } = Layout;
export default function Main() {
  const [posts, setPosts] = useState([]);
  const { account } = useAppAccount();
  const { isLoading, error, data } = useQuery("posts", () => {
    return FetchApi.getListPost();
  });
  if (Object.keys(account).length === 0) {
    return <Redirect to="/login" />;
  }

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const getInfoUser = async (username) => {
    const result = await FetchApi.getUser(username);
    if (result.data) return result.data;
  };
  const post = data.data.map((item) => {
    const post = { ...item };
    getInfoUser(item.username).then((data) => {
      post.imageUser = data.imageUser;
      post.displayName = data.displayName;
    });
  });
  console.log(post);
  return (
    <div className="main">
      <Navbar />
      <Content>
        {posts.map((item) => (
          <Post key={item.socialId} {...item} />
        ))}
      </Content>
    </div>
  );
}
