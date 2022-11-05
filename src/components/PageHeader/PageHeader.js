import React from "react";
import logo from "../../assets/img/tot-logo.png";
import { Container } from "reactstrap";
import { Stack, Typography } from "@mui/joy";

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
        sx={{marginTop: "25vh"}}
        >
          {/* <div className="content-center brand"> */}
            <img src={logo} width={250} height={250}/>
            <div>
            <Typography variant="h1" fontSize={"3rem"} className={"title"}>TEK-O-THON</Typography>
            </div>
            
            {/* <h1 className="h1-seo">Tek-O-thon</h1> */}
            <Typography level="h3" className={"title"} >THINK • CODE • INNOVATE</Typography>
            {/* <h3 className="d-none d-sm-block">THINK • CODE • INNOVATE</h3> */}
          {/* </div> */}
        </Stack>
      </Container>
    </div>
  );
}
