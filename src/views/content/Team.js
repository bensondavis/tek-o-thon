import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import React from "react";
import TeamCard from "./ProfileCard";
import { data } from "../data/TeamData";
import { Grid } from "@mui/joy";
import { Typography } from "@mui/joy";
import { Container } from "reactstrap";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="section">
        <Container>
          <Typography fontSize={"2.5rem"} sx={{ textAlign: "center", color: "white", m:2 }}>
            TEAM
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              justifyContent="center"
              spacing={{xs:2, sm: 3, md: 4}}
            >
              {data.map((dat, index) => (
                <Grid item key={index}>
                  <TeamCard
                    img={dat.img}
                    name={dat.name}
                    role={dat.role}
                    key={index}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}
