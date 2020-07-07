import React, { Component } from "react";
import { Layout } from "antd";
import NavBar from "../NavBar/NavBar";
const { Content, Footer } = Layout;

export class Home extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <Content>Hello</Content>
        <Footer>De</Footer>
      </Layout>
    );
  }
}

export default Home;
