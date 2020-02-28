import React, { Component } from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Welcome from "./components/Welcome";
import Types from "./components/Types";
import Type from "./components/Type";

export default class App extends Component {
  state = {
    types: []
  };

  componentDidMount() {
    axios({
      method: "get",
      url: `http://localhost:5000/api/playlists`,
      headers: { "Access-Control-Allow-Origin": "*" }
    }).then(res => {
      this.setState({
        types: res.data
      });
    });
  }

  componentDidUpdate() {
    console.log("component updated!");
    console.log(this.state);
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route
              path="/types"
              exact
              render={routerProps => (
                <Types types={this.state.types} {...routerProps} />
              )}
            />
            <Route
              path="/types/:id"
              render={routerProps => (
                <Type types={this.state.types} {...routerProps} />
              )}
            />
          </Switch>
        </Router>
      </>
    );
  }
}
