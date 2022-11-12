import AppBar from "../../components/Navbars/IndexNavbar";
import Footer from "../../components/Footer/Footer";
import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import SponsorSingle from "./SponsorSinge";
import { gold } from "views/data/GoldSponsor";
import { silver } from "views/data/SilverSponsor";
import { bronze } from "views/data/BronzeSponsor";

export default function Sponsor() {
  const [squares1to6, setSquares1to6] = useState("");
  const [squares7and8, setSquares7and8] = useState("");

  useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
  };
  return (
    <>
      <AppBar />
      <div className="section section-signup">
        <div
          className="square square-7"
          id="square7"
          style={{ transform: squares7and8, opacity: 0.8 }}
        />
        <div
          className="square square-8"
          id="square8"
          style={{ transform: squares7and8, opacity: 0.8 }}
        />
        <div
          className="square square-1"
          id="square1"
          style={{ transform: squares1to6 }}
        />
        <div
          className="square square-2"
          id="square2"
          style={{
            transform: squares1to6,
            top: "60%",
            left: "70%",
            opacity: 0.5,
          }}
        />
        <div
          className="square square-3"
          id="square3"
          style={{ transform: squares1to6 }}
        />
        <div
          className="square square-4"
          id="square4"
          style={{ transform: squares1to6 }}
        />
        <div
          className="square square-5"
          id="square5"
          style={{ transform: squares1to6 }}
        />
        <div
          className="square square-6"
          id="square6"
          style={{ transform: squares1to6 }}
        />
        <Container>
          <Typography
            fontSize={"3rem"}
            fontWeight={550}
            sx={{
              color: "#d1d1d1",
              textAlign: "center",
              userSelect: "none",
              position: "relative",
              zIndex: 3,
            }}
          >
            Sponsors
          </Typography>
          <Grid
            container
            spacing={3}
            direction={{ sm: "column", md: "row" }}
            alignItems={"flex-start"}
            justifyContent={"center"}
            sx={{ position: "relative", zIndex: 3, mt: 0 }}
          >
            {gold.map((data, index) => (
              <Grid item key={index}>
                <SponsorSingle
                  img={data.img}
                  link={data.link}
                  fb={data.fb}
                  insta={data.insta}
                  twitter={data.twitter}
                  linkedin={data.linkedin}
                />
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            spacing={3}
            direction={{ sm: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ mt: 3, position: "relative", zIndex: 3 }}
          >
            {silver.map((data, index) => (
              <Grid item key={index}>
                <SponsorSingle
                  img={data.img}
                  link={data.link}
                  fb={data.fb}
                  insta={data.insta}
                  twitter={data.twitter}
                  linkedin={data.linkedin}
                />
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            spacing={3}
            direction={{ sm: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ mt: 3, position: "relative", zIndex: 3 }}
          >
            {bronze.map((data, index) => (
              <Grid item key={index}>
                <SponsorSingle img={data.img} link={data.link} fb={data.fb} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
}
