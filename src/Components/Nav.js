import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
          <h1>Things I like</h1>
          <p>A photo gallery by Jason L Perry</p>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Components/Page1">Pandas</Link>
          </li>
          <li>
            <Link to="/Components/Page2">Miniatures</Link>
          </li>
        </ul> */}
      </nav>
    );
  }
}

export default Nav;
