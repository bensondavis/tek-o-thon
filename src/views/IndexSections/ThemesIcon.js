import { Typography } from "@mui/material";
import { useState } from "react";

export default function ThemeIcons({ img, title }) {
  const [hover, setHover] = useState(false);
  const effect = {
    position: "relative",
    minHeight: "200px",
    minWidth: "200px",
    transform: hover ? "scale(1.2,1.2)" : "",
    transition: "transform 200ms ease-in-out"
  };
  const handleHover = ()=> {
    setHover(!hover);
  }
  return (
    <div
      style={effect}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={img} width={100} alt={title} />
      <Typography
        fontSize={"2rem"}
        fontFamily={"anton"}
        fontWeight={400}
        style={{
          position: "absolute",
          top: 58,
          left: 45,
          color: "#d1d1d1",
          userSelect: "none",
        }}
      >
        {title}
      </Typography>
    </div>
  );
}
