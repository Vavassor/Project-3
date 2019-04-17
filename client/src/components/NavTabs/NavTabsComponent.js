import React from "react";
import { Link } from "react-router-dom";

// import Button from "react-bootstrap/Button";


function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
          profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile/update"
          className={window.location.pathname === "/profile/update" ? "nav-link active" : "nav-link"}
        >
          update
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/chatIndex"
          className={window.location.pathname === "/chatIndex" ? "nav-link active" : "nav-link"}
        >
          Chat Index
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/event-list"
          className={window.location.pathname === "/event-list" ? "nav-link active" : "nav-link"}
        >
          Events
        </Link>
      </li>
      {/* <Button variant="primary" type="button" onClick ={props.handleLogOut}>Log Out</Button> */}
    </ul>
  );
}

export default NavTabs;
