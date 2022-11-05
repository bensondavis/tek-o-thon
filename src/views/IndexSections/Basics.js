import React from "react";

import {
  Container,
} from "reactstrap";

export default function Basics() {
  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <h2 className="title">About Us?</h2>
        <h3>TEK-O-THON is a Hackathon conducted in association with
        TEKWIZA Techfest event to provide students with a platform
        to learn, grow and develop the technology of the future. Our
        aim is to boost the hacker culture among the student
        community and provide incentives to attract the best. We
        understand that students need a platform to showcase their
        skills and talents and to learn something new and to be able
        to make a difference in the world, so we do provide a
        platform for them.
        </h3>
      </Container>
    </div>
  );
}
