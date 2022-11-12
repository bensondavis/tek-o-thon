import TeamCard from "./ProfileCard";
import { teamData, facultyData } from "../data/TeamData";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "reactstrap";
import { useEffect } from "react";

export default function Team() {
  
  useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <div className="section section-signup">
      <Container>
        <Typography
          fontSize={"3rem"}
          fontWeight={550}
          sx={{
            textAlign: "center",
            color: "#d1d1d1",
            m: 2,
            userSelect: "none",
          }}
        >
          TEAM
        </Typography>
        <Grid
          container
          justifyContent="center"
          spacing={{ xs: 2, sm: 3, md: 4 }}
        >
          {facultyData.map((dat, index) => (
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
        <br />
        <Grid
          container
          justifyContent="center"
          spacing={{ xs: 2, sm: 3, md: 4 }}
        >
          {teamData.map((data, index) => (
            <Grid item key={index}>
              <TeamCard
                img={data.img}
                name={data.name}
                role={data.role}
                key={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
