import { Typography } from "@mui/material";
// import Devfolio from "components/DevfolioButton";
// import Counter from "components/counter/Counter";
// import Timer from "components/counter/Timer";
// import Counter from "components/NewCounter/Counter";
import { useEffect } from "react";

export default function Developer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className="section">
        <Typography
          variant="h1"
          fontSize={"4rem"}
          sx={{ textAlign: "center", mt: 25 }}
        >
          This is testing page
        </Typography>
        {/* <Devfolio /> */}
        <div
          className="apply-button"
          data-hackathon-slug="tekothon"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
        {/* <Timer />
        <Counter /> */}
      </div>
    </>
  );
}
