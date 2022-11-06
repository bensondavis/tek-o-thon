import { Card } from "@mui/joy";
import { useEffect, useState } from "react";

export default function PrizesSingle({ trophy, cash, position }) {
  const [imgSize, setImgSize] = useState(0);
  useEffect(()=>{
    switch(position) {
      case 1:
        setImgSize(240);
        break;
      case 2:
        setImgSize(200);
        break;
      case 3:
        setImgSize(170);
        break;
      default: break;
    }
  },[position]);
  return (
    <div className="section">
      <Card
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "250px",
        }}
      >
        <img
          src={trophy}
          width={imgSize}
          alt={"..."}
          style={{ marginBottom: 15 }}
        />
        <img src={cash} width={125} alt={"..."} />
      </Card>
    </div>
  );
}
