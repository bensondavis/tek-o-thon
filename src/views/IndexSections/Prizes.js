import { Stack } from "@mui/system";
import PrizesSingle from "./PrizesSingle";
import { prizeData } from "./PrizeData";
import { Container } from "reactstrap";
import { Typography } from "@mui/joy";
// import Association from "./Association"

export default function Prizes() {
  return (
    <div className="section section-signup">
      {/* <img alt="..." className="path" src={require("assets/img/path3.png")}  /> */}
      {/* <div className="squares square-1" />
      <div className="squares square-2" />
      <div className="squares square-3" />
      <div className="squares square-4" />  */}
      <Container>
      <Typography fontSize={"3rem"} fontWeight={550} sx={{textAlign:"center", color: "white"}}>Prizes</Typography>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ xs: "center", sm: "column", md: "flex-end" }}
        sx={{maxWidth: "90vw"}}
        spacing={1}
      >
        {prizeData.map((data, index) => (
          <PrizesSingle
            trophy={data.trophy}
            cash={data.cash}
            position={data.position}
            key={index}
          />
        ))}
      </Stack>
      </Container>
      {/* <Association/> */}
    </div>
  );
}
