import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">Registration</h2>
            <h4 className="description" style={{textAlign: "left"}}>
              <b>Who can register -</b> Individuals who are at least 18 years of
              age or older. <br />
              <b>Registration criteria - </b> Team registration only(2-5
              members)
              <br />
              <b>Registration period - </b> Till 21st November <br />
              <b>Date of hackathon - </b> 25th November <br />
              <b>Duration of hackathon - </b>24 hours Location:Sahrdaya College
              of Engineering and Technology,Kodakara,Thrissur <br />
              <b>Winners announced - </b>
              On or around December 3, 2022
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="https://forms.gle/Cv11dbYJrZXaPnTu6"
              role="button"
              size="lg"
            >
              Register Now
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="text-info font-weight-light mb-2">
              Thank you for supporting us!
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
