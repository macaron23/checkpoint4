/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <li>
        <Link to="/royal-family">Royal Family</Link>
      </li>
      <li>
        <Link to="/assets">Royal Assets</Link>
      </li>
      <li>
        <Link to="/contact">Connect Admin</Link>
      </li>
    </ul>
  );
}
