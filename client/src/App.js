import React, { Component } from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Types from "./components/Types";
import Type from "./components/Type";
import axios from "axios";
// import One from "./assets/icons/one.svg";
// import Two from "./assets/icons/two.svg";
// import Three from "./assets/icons/three.svg";
// import Four from "./assets/icons/four.svg";
// import Five from "./assets/icons/five.svg";
// import Six from "./assets/icons/six.svg";
// import Seven from "./assets/icons/seven.svg";
// import Eight from "./assets/icons/eight.svg";
// import Nine from "./assets/icons/nine.svg";

export default class App extends Component {
  state = {
    types: [
      // {
      //   id: 1,
      //   img: One,
      //   src: "https://open.spotify.com/embed/playlist/2Uxq7XTEcoU3p9MAXiS74c"
      // },
      // {
      //   id: 2,
      //   img: Two,
      //   src: "https://open.spotify.com/embed/playlist/2Uxq7XTEcoU3p9MAXiS74c"
      // },
      // {
      //   id: 3,
      //   img: Three,
      //   src: "https://open.spotify.com/embed/playlist/2Uxq7XTEcoU3p9MAXiS74c"
      // },
      // {
      //   id: 4,
      //   img: Four,
      //   src: "https://open.spotify.com/embed/playlist/2Uxq7XTEcoU3p9MAXiS74c"
      // },
      // {
      //   id: 5,
      //   img: Five,
      //   src: "https://open.spotify.com/embed/playlist/2Uxq7XTEcoU3p9MAXiS74c"
      // },
      // {
      //   id: 6,
      //   img: Six,
      //   src: "https://open.spotify.com/embed/playlist/2Uxq7XTEcoU3p9MAXiS74c"
      // },
      // {
      //   id: 7,
      //   img: Seven,
      //   src: "https://open.spotify.com/embed/playlist/2Uxq7XTEcoU3p9MAXiS74c"
      // },
      // {
      //   id: 8,
      //   img: Eight,
      //   src: "https://open.spotify.com/embed/playlist/2Uxq7XTEcoU3p9MAXiS74c"
      // },
      // {
      //   id: 9,
      //   img: Nine,
      //   src: "https://open.spotify.com/embed/playlist/2Uxq7XTEcoU3p9MAXiS74c"
      // }
    ]
  };

  componentDidMount() {
    axios("/api/playlists").then(res => {
      this.setState({ types: res.data });
      console.log(res.data);
    });
  }

  componentDidUpdate() {
    console.log("component updated!");
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
