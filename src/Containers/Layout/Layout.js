import React, { Component } from "react";
import { Layout as Contains } from "antd";
import NavBar from "../NavBar/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home"
import Course from "../Course";
import Tutorial from "../Tutorial";
const { Content, Footer } = Contains;

export class Layout extends Component {
    render() {
        console.log(this.props);
        return (
            <Contains>
                <NavBar history={this.props.history} />
                <Content style={{ height: "90vh" }} >
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/course" component={Course} />
                        <Route path="/tutorial" component={Tutorial} />
                    </Switch>
                </Content>
                <Footer>De</Footer>
            </Contains>
        );
    }
}

export default Layout;