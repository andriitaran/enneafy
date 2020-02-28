import React from "react";
import { Link, Route } from "react-router-dom";
import Logo from "../assets/icons/enneagram.svg";

export default function Welcome() {
  return (
    <div>
      <div>
        <section className="welcome">
          <div className="welcome-container">
            <span className="welcome-container__header">Enneafy</span>
            <img className="welcome-container__logo" src={Logo} alt="logo" />
            <span className="welcome-container__text">
              Enneagram is one of the most powerful and insightful tools for
              understanding ourselves and others. At its core, the Enneagram
              helps us to see ourselves at a deeper, more objective level and
              can be of invaluable assistance on our path to self-knowledge.
            </span>
            <Link to="https://www.truity.com/test/enneagram-personality-test">
              <button className="welcome-container__test">TAKE THE TEST</button>
            </Link>
            <Link to="/types">
              <button className="welcome-container__type">
                I KNOW MY TYPE!
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
