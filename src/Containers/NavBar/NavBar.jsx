import React from "react";
import { Layout, Menu } from "antd";

const NavBar = () => {
  return (
    <Layout.Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "40px" }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Courses</Menu.Item>
        <Menu.Item key="3">Tutorials</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default NavBar;
