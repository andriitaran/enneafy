import React, { Component } from "react";
import { Link } from "react-router-dom";
import Type from "./Type";

export default class Types extends Component {
  state = { selected: false };
  componentDidUpdate(prevProps) {
    console.log("component updated!");
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        selected: true
      });
    }
  }
  render() {
    if (this.props.types === undefined) {
      return <h1>Loading...</h1>;
    } else {
      const enneagramTypes = this.props.types.map(type => {
        return (
          <Link to={`/types/${type.id}`} key={type.id}>
            <img className="types-container__type" src={type.img} alt="" />
          </Link>
        );
      });
      if (this.state.selected) {
        return (
          <Type types={this.props.types} />
        );
      } else {
        return (
          <section className="types">
            <div className="types-container">
              <span className="types-container__header">CHOOSE YOUR TYPE</span>
              {enneagramTypes}
            </div>
          </section>
        );
      }
    }
  }
}
