import Appbar from "../../components/Navbars/IndexNavbar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
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
      <div className=" section section-signup" >
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />

        <Typography
          fontSize={"3rem"}
          fontWeight={550}
          sx={{
            color: "#d1d1d1",
            textAlign: "center",
            marginBottom: "0px",
            userSelect: "none",
            position: "relative",
            zIndex: 2,
          }}
        >
          Documents
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent={"center"}
          sx={{ marginTop: "-50px" }}
        >
          <Links hideAppbar={handleHideAppbar} />
        </Stack>
      </div>

      <Footer />
    </>
  );
}
