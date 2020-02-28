import React from "react";
import { Link } from "react-router-dom";
import Back from "../assets/icons/back.svg";

export default function Type(props) {
  if (props.types === undefined) {
    return <h1>Loading...</h1>;
  }
  console.log("props", props.match.params.id);
  const foundType = props.types.some(type => {
    return type.id === Number(props.match.params.id);
  });
  let foundObj;
  if (foundType) {
    foundObj = props.types
      .filter(type => {
        return type.id === Number(props.match.params.id);
      })
      .shift();
  }
  return (
    <section className="type">
      <div className="type-container">
        <span className="type-container__header">
          Hey Type {props.match.params.id}! <br />
          We've got something special just for you!
        </span>
        <iframe
          className="type-container__player"
          src={foundObj.src}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <Link to="/types">
          <img
            className="type-container__back"
            src="https://toomeyco.com/wp-content/themes/toomey/img/icons/angle-left-white.svg"
            alt=""
          />
        </Link>
      </div>
    </section>
  );
}
