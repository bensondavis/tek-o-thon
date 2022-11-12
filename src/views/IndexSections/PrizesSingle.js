import { Stack } from "@mui/system";
import { useEffect, useState } from "react";

export default function PrizesSingle({ trophy, cash, position }) {
  const [imgSize, setImgSize] = useState(0);
  useEffect(() => {
    switch (position) {
      case 1:
        setImgSize(240);
        break;
      case 2:
        setImgSize(200);
        break;
      case 3:
        setImgSize(170);
        break;
      default:
        break;
    }
  }, [position]);
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      spacing={4}
      justifyContent={"center"}
      sx={{ minWidth: "250px" }}
    >
      <img src={trophy} width={imgSize} alt={trophy} />
      <img src={cash} width={125} alt={cash} />
    </Stack>
  );
}
