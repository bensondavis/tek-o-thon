import Appbar from "../../components/Navbars/IndexNavbar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Stack, Typography } from "@mui/joy";
import Links from "./Links";

export default function Documents() {
  const [showAppbar, setShowAppbar] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  const handleHideAppbar = () => {
    setShowAppbar(!showAppbar);
  };

  return (
    <>
      {showAppbar ? <Appbar /> : null}
      <div
        className="page-header header-filter"
        style={{ position: "relative" }}
      >
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
      </div>
      <Container>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            marginBottom: "350px",
          }}
        >
          <Typography
            fontSize={"3rem"}
            fontWeight={550}
            sx={{
              color: "#d1d1d1",
              textAlign: "center",
              marginTop: "100px",
              userSelect: "none",
            }}
          >
            Documents
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            justifyContent={"center"}
            sx={{ zIndex: 1 }}
          >
            <Links hideAppbar={handleHideAppbar} />
          </Stack>
        </div>
        <div
          className="section section-basic"
          id="basic-elements"
          style={{ height: "320px" }}
        ></div>
      </Container>

      <Footer />
    </>
  );
}
