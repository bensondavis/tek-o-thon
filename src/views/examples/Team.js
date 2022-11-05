import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import React from "react";
import TeamCard from "./ProfileCard";
import { data } from "./TeamData";
import { Grid } from "@mui/joy";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="section">
        <h1 className="title" style={{ textAlign: "center" }}>
          TEAM
        </h1>
        <Grid
          container
          justifyContent="center"
          spacing={4}
          sx={{maxWidth: "100%"}}
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
      <Footer />
    </>
  );
}
