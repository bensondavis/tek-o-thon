import { Stack } from "@mui/system";
import React from "react";
import { Row } from "reactstrap";
import acesLogo from "./files/aces.png";
import tekwizaLogo from "../../assets/img/tekwizalogow.png";

export default function Signup() {
  return (
    <div
      className="section section-signup section-basic"
      style={{ marginBottom: "10px", marginTop: "-10px"}}
    >
      <div className="squares square-1" />
      <div className="squares square-2" />
      <div className="squares square-3" />
      <div className="squares square-4" />
      <Row className="row-grid justify-content-between align-items-center">
        <Stack
          direction={"column"}
          alignItems="center"
          justifyContent={"center"}
          sx={{ width: "100%", zIndex: "1"}}
          className={"row-grid justify-content-between align-items-center"}
        >
          <h1 className="title" style={{ textAlign: "center" }}>
            In Association with
          </h1>
          <Stack direction={"row"} spacing={4}>
            <img src={acesLogo} width={120} alt={"aces lgo"} />
            <img src={tekwizaLogo} width={120} alt={"aces lgo"} />
          </Stack>
        </Stack>
      </Row>
    </div>
  );
}
