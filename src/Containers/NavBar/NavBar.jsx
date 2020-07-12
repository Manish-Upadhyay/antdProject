import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  handleClick = (e) => {
    switch (e.key) {
      case "1":
        this.props.history.push("/home");
        break;
      case "2":
        this.props.history.push("/course");
        break;
      case "3":
        this.props.history.push("/tutorial");
        break;
      default:
        break;
    }
  };
  render() {
    console.log(this.props);
    return (
      <Layout.Header className="header">
        <div className="logo" />
        <Menu
          onClick={this.handleClick}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "40px" }}
        >
          <Menu.Item key="1" component={NavLink} to={"/home"}>
            Home
          </Menu.Item>
          <Menu.Item key="2">Courses</Menu.Item>
          <Menu.Item key="3">Tutorials</Menu.Item>
        </Menu>
      </Layout.Header>
    );
  }
}

export default NavBar;
