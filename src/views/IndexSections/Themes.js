import React from "react";
// reactstrap components
import { Container } from "reactstrap";

export default function Navbars() {
  return (
    <div className="section section-navbars">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />

      <Container id="menu-dropdown">
        <h2 className="title">Focus</h2>
        <h3>
          Tek-O-thon tend to have a specific focus with problem statements such
          as Healthcare, Waste Management, Smart Education, etc.
        </h3>
      </Container>
      <br />
      <br />
      <br />
      <Container id="menu-dropdown">
        <h2 className="title">Themes</h2>
        <ul>
          <li>
            <h3>EdTech</h3>
          </li>
          <li>
            <h3>Waste Management</h3>
          </li>
          <li>
            <h3>Healthcare</h3>
          </li>
        </ul>
      </Container>
    </div>
  );
}
