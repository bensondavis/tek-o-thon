import { Typography } from "@mui/material";
// import Devfolio from "components/DevfolioButton";
// import Counter from "components/counter/Counter";
import Timer from "components/counter/Timer";
import Counter from "components/NewCounter/Counter";

export default function Developer() {
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
        <Timer />
        <Counter />
      </div>
    </>
  );
}
