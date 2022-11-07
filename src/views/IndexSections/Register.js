import { Stack, Typography } from "@mui/joy";
import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import cover from "../../assets/tot-img/cover.jpg";

export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Typography
          fontSize={"3rem"}
          fontWeight={550}
          sx={{ textAlign: "center", color: "white" }}
        >
          Registration
        </Typography>
        {/* <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <Typography fontSize={"3rem"} fontWeight={550}>Registration</Typography>
            <h4 className="description" style={{ textAlign: "left" }}>
              <b>Who can register -</b> Individuals who are at least 18 years of
              age or older. <br />
              <b>Registration criteria - </b> Team registration only(2-5
              members)
              <br />
              <b>Registration period - </b> Till 21st November <br />
              <b>Date of hackathon - </b> 25th November <br />
              <b>Duration of hackathon - </b>24 hours <br />
              <b>Location - </b>Sahrdaya College of Engineering and
              Technology,Kodakara,Thrissur <br />
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

        <Row className="row-grid align-items-center ">
          <Col lg="6">
            <h3 className="text-info font-weight-light mb-2">
              Thank you for supporting us!
            </h3>
          </Col>
        </Row> */}
        {/* 👾 Get on to your hacking chairs 
Unleash your inner geek 🤖 for a extravagant techie experience 👾

ACES SAHRDAYA presents TEK-O-THON 
A pre-event in  TEKWIZA 2k22 

🗓️ 25 & 26 November 2022 

❇️ # 24hourhackathon ❇️

💸Exciting prizes worth 80K and more surprises awaits 🤑

Showcase your techxellent ideas and innovations 

Registration is Free */}
        <br />
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={11}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src={cover} alt={"cover"} width={500} />
          <div style={{ maxWidth: 500 }}>
            <Typography fontSize={"1rem"}>
              {" "}
              👾 Get on to your hacking chairs 🤖 Unleash your inner geek for a
              extravagant techie experience 👾 <br /> <br />
              ACES SAHRDAYA presents TEK-O-THON A pre-event in TEKWIZA 2k22
              <br />
              <br />
              <span>
                <i className="fa-regular fa-calendar"></i>
              </span>{" "}
              25 & 26 November 2022
              <br /># 24HourHackathon
              <br /><span><i className="fa-solid fa-location-dot"></i></span> Sahrdaya College of Engineering and Technology, Kodakara
            </Typography>
            <br />
            <Stack direction={"row"} alignItems={"center"} justifyContent={{xs:"center", sm: "center", md: "flex-start"}}>
              <Button
                className="btn-round"
                color="info"
                href="https://forms.gle/Cv11dbYJrZXaPnTu6"
                // role="button"
                size="lg"
              >
                Register Now
              </Button>
            </Stack>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
