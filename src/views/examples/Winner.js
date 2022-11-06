import AppBar from "../../components/Navbars/IndexNavbar";
import Footer from "../../components/Footer/Footer";
import { Container } from "reactstrap";
import { useEffect } from "react";
import { Typography, Stack } from "@mui/joy";

export default function Winner() {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <AppBar />
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
            sx={{ minHeight: "100%"}}
          >
            <Typography variant="h1" fontSize={"4rem"}>
              Stay tuned till Dec 3, 2022
            </Typography>
          </Stack>
        </Container>
      </div>

      <Footer />
    </>
  );
}
