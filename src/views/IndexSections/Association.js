import { Stack } from "@mui/system";
import React from "react";
import acesLogo from "assets/img/aces.PNG";
import tekwizaLogo from "../../assets/img/tekwizalogow.png";
import Typography from "@mui/material/Typography";

export default function Signup() {
  return (
    <div className=" section section-signup">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="squares square-1" />
      <div className="squares square-2" />
      {/* <div className="squares square-3" /> */}
      <div className="squares square-4" />
      <Typography
        fontSize={"3rem"}
        fontWeight={550}
        sx={{
          color: "#d1d1d1",
          userSelect: "none",
          textAlign: "center",
          position: "relative",
          zIndex: "1",
        }}
      >
        In Association with
      </Typography>
      <br />

      <Stack
        direction={"row"}
        spacing={4}
        alignItems="center"
        justifyContent={"center"}
        sx={{ position: "relative", zIndex: "1" }}
      >
        <img src={acesLogo} width={230} alt={"aces logo"} />
        <img src={tekwizaLogo} width={140} alt={"tekwiza logo"} />
      </Stack>
    </div>
  );
}
