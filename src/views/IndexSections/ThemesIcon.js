import { Typography } from "@mui/joy";

export default function ThemeIcons({ img, title }) {
  return (
    <div style={{ position: "relative", minHeight: "200px", minWidth:"200px"}}>
      <img src={img} width={100} />
      <Typography
        fontSize={"2rem"}
        fontFamily={"anton"}
        fontWeight={400}
        style={{position: "absolute", top: 58, left: 45, color:"#d1d1d1"}}
      >
        {title}
      </Typography>
    </div>
  );
}
