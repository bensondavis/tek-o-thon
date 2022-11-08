import { Stack, Typography } from "@mui/joy";
import React from "react";
import { Button, Container } from "reactstrap";
import cover from "../../assets/tot-img/cover.jpg";

export default function Download() {
  return (
    <div className="section section-download">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Typography
          fontSize={"3rem"}
          fontWeight={550}
          sx={{ textAlign: "center", color: "#d1d1d1" }}
        >
          Registration
        </Typography>
        <br />
        <br />
        <br />
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={11}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ zIndex: "1" }}
        >
          <img src={cover} alt={"cover"} width={500} />
          <div style={{ maxWidth: 500 }}>
            <Typography fontSize={"1rem"} sx={{color:"#d1d1d1"}}>
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
              <br />
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>{" "}
              Sahrdaya College of Engineering and Technology, Kodakara
            </Typography>
            <br />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={{
                xs: "center",
                sm: "center",
                md: "flex-start",
              }}
            >
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
      <br />
    </div>
  );
}
