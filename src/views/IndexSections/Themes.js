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
          The goal of this hackathon is to create functioning software or
          hardware by the end of the event.The aim is to generate prototypes
          that simplify the solutions of real world problems like
          healthcare,smart education,waste management or based on sponsers
          theme. This code fest does not restrict the use of computer languages
          such as Python, Java, Javascript, or any other programming language,
          nor does it restrict the use of operating systems or other
          technologies to develop remedies drew on creative thinking.
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
