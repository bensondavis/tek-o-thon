import React from "react";
import logo from "../../assets/img/tot-logo.png";
import { Container } from "reactstrap";
import { Stack, Typography } from "@mui/material";
import "@fontsource/russo-one";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100%" }}
        >
          <img src={logo} width={280} alt={"logo"} />
          <Typography
            fontSize={"3rem"}
            fontWeight={550}
            sx={{ color: "white" }}
            fontFamily={"Russo One"}
          >
            TEK-O-THON
          </Typography>
          
          <Typography variant="body1" className={"title"}>
            THINK • CODE • INNOVATE
          </Typography>
        </Stack> 
      </Container>
    </div>
  );
}
