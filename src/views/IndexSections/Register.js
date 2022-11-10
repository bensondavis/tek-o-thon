import { Stack, Typography } from "@mui/joy";
import React from "react";
import { Button, Container } from "reactstrap";
import cover from "../../assets/tot-img/cover.jpg";
import vote from "../../assets/icons/vote.png";
import members from "../../assets/icons/members.png";

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
              <span><img src={vote} width={20} alt={"eligibility"} /></span>Eligibility: Bachelors, Masters and related courses within computer science and allied branches
              <br /><br />
              <span><img src={members} width={20} alt={"members"}/></span> Should consist of 2-5 Members
              <br /><br />
              <span style={{color: "white"}}>
                <i className="fa-regular fa-calendar"></i>
              </span>{" "}
              25 & 26 November 2022
              <br /><br /><span style={{color: "white"}}>#</span> 24HourHackathon
              <br /><br />
              <span style={{color: "white"}}>
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
                style={{marginTop: "-1px"}}
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
