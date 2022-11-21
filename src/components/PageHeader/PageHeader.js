import React from "react";
import logo from "../../assets/img/tot-logo.png";
import { Container } from "reactstrap";
import { Stack, Typography } from "@mui/material";
import "../../assets/fonts/SLANT.TTF"
import Timer from "components/counter/Timer";
// import Counter from "components/counter/Counter";

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
          <img src={logo} width={350} alt={"logo"} />
          <Typography
            fontSize={"3rem"}
            fontWeight={550}
            sx={{ color: "white", userSelect: "none", letterSpacing: 1, mt: -8}}
            fontFamily={"Slant"}
          >
            TEK-O-THON
          </Typography>
          
          <Typography variant="body1" className={"title"} sx={{userSelect: "none"}}>
            THINK • CODE • INNOVATE
          </Typography>
          <Timer/>
          {/* <Counter/> */}
        </Stack> 
      </Container>
    </div>
  );
}
