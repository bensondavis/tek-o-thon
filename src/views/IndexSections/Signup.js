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
// import classnames from "classnames";
// import { Link } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import acesLogo from "./files/aces.png";
import scetLogo from "./files/scet.png";

export default function Signup() {
  return (
    <div className="section section-signup section-basic">
      <Container>
        {/* <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" /> */}
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            {/* <h3 className="display-3 text-white">
              A beautiful Black Design{" "}
              <span className="text-white">completed with examples</span>
            </h3>
            <p className="text-white mb-3">
              
            </p>
            <div className="btn-wrapper">
              <Button color="primary" to="register-page" tag={Link}>
                Register Page
              </Button>
            </div> */}
            <h1 className="title" style={{ textAlign: "center" }}>
              In Association with
            </h1>
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <div className="wrapper">
              <Col>
                <img src={scetLogo} width={350} alt={"scet logo"} />
              </Col>
              <Col>
                <img src={acesLogo} width={120} alt={"aces lgo"} />
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
