import { Stack, Typography } from "@mui/material";
import React from "react";
import { Button } from "reactstrap";
import cover from "../../assets/tot-img/cover.jpg";
import vote from "../../assets/icons/vote.png";
import members from "../../assets/icons/members.png";
import DevfolioButton from "components/Devfolio";
import { useEffect } from "react";

export default function Download() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="section section-download">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      {/* <Container> */}
      <Typography
        fontSize={"3rem"}
        fontWeight={550}
        sx={{ textAlign: "center", color: "#d1d1d1", userSelect: "none" }}
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
      >
        <div>
          <img src={cover} alt={"cover"} width={500} />
        </div>
        <div>
          <div style={{ maxWidth: 500 }}>
            <Typography fontSize={"1rem"} sx={{ color: "#d1d1d1" }}>
              <span>
                <img src={vote} width={20} alt={"eligibility"} />
              </span>
              Eligibility: Bachelors, Masters and related courses within
              computer science and allied branches
              <br />
              <br />
              <span>
                <img src={members} width={20} alt={"members"} />
              </span>{" "}
              Should consist of 2-5 Members
              <br />
              <br />
              <span style={{ color: "white" }}>
                <i className="fa-regular fa-calendar"></i>
              </span>{" "}
              25 & 26 November 2022
              <br />
              <br />
              <span style={{ color: "white" }}>#</span> 24HourHackathon
              <br />
              <br />
              <span style={{ color: "white" }}>
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
              <div style={{ position: "relative" }}>
                <DevfolioButton />
              </div>
            </Stack>
          </div>
        </div>
      </Stack>

      {/* </Container> */}
      <br />
    </div>
  );
}
