/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import {
  Container,
} from "reactstrap";

export default function Basics() {
  // const [inputFocus, setInputFocus] = React.useState(false);
  // const slider1 = React.useRef(null);
  // const slider2 = React.useRef(null);
  // React.useEffect(() => {
  //   Slider.create(slider1.current, {
  //     start: [40],
  //     connect: [true, false],
  //     step: 1,
  //     range: { min: 0, max: 100 }
  //   });
  //   Slider.create(slider2.current, {
  //     start: [20, 60],
  //     connect: [false, true, false],
  //     step: 1,
  //     range: { min: 0, max: 100 }
  //   });
  // }, []);
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
