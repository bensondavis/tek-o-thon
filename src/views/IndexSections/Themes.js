import { Stack, Typography } from "@mui/joy";
import React from "react";
import { Container } from "reactstrap";
import "@fontsource/anton";
import { themeData } from "./data/ThemesData";
import ThemeIcons from "./ThemesIcon";

export default function Navbars() {
  return (
    <div className="section section-navbars">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />

      <Container id="menu-dropdown">
        <Typography
          fontSize={"3rem"}
          fontWeight={550}
          sx={{ color: "#d1d1d1", textAlign: "center", marginBottom: "40px" }}
        >
          Focus
        </Typography>
        {/* <h2 className="title">Focus</h2> */}
        <h3>
          The goal of this hackathon is to create functioning software or
          hardware by the end of the event.The aim is to generate prototypes
          that simplify the solutions of real world problems like
          healthcare,smart education,waste management or based on sponsors
          theme. This code fest does not restrict the use of computer languages
          such as Python, Java, Javascript, or any other programming language,
          nor does it restrict the use of operating systems or other
          technologies to develop remedies drew on creative thinking.
        </h3>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container id="menu-dropdown">
        <Typography
          fontSize={"3rem"}
          fontWeight={550}
          sx={{ color: "#d1d1d1", textAlign: "center" }}
        >
          Themes
        </Typography>
        <br />
        <br />
        <br />
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={{ xs: 1, sm: 1, md: 15 }}
        >
          {themeData.map((data, index) => (
            <ThemeIcons img={data.img} title={data.title} key={index} />
          ))}
        </Stack>

        {/* <div style={{position: "relative", minHeight: "200px"}}>
          <img src={wasteImg} width={100} />
          <Typography
          fontSize={"1.9rem"}
          fontFamily={"anton"}
          fontWeight={400}
          style={{position: "absolute", top: 61, left: 45, color:"#d1d1d1"}}
        >
          Waste Management
        </Typography>
        </div> */}
      </Container>
    </div>
  );
}
