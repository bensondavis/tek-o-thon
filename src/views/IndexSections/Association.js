import { Stack } from "@mui/system";
import React from "react";
import { Row } from "reactstrap";
import acesLogo from "./files/aces.png";
import tekwizaLogo from "../../assets/img/tekwizalogow.png";
import { Typography } from "@mui/joy";

export default function Signup() {
  return (
    <div className="section section-signup">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="squares square-1" />
      <div className="squares square-2" />
      {/* <div className="squares square-3" /> */}
      <div className="squares square-4" />
      <Row className="row-grid justify-content-between align-items-center">
        <Stack
          direction={"column"}
          alignItems="center"
          justifyContent={"center"}
          sx={{ width: "100%", zIndex: "1" }}
          // className={"row-grid justify-content-between align-items-center"}
        >
          <Typography
            fontSize={"3rem"}
            fontWeight={550}
            sx={{ textAlign: "center", color: "#d1d1d1" }}
          >
            In Association with
          </Typography>
          <br />
          <br />
          <br />
          {/* <h1 className="title" style={{ textAlign: "center" }}>
            In Association with
          </h1> */}
          <Stack direction={"row"} spacing={4}>
            <img src={acesLogo} width={150} alt={"aces lgo"} />
            <img src={tekwizaLogo} width={150} alt={"aces lgo"} />
          </Stack>
        </Stack>
      </Row>
    </div>
  );
}
