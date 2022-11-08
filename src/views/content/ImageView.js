import { Typography } from "@mui/joy";
import { ImageViewer } from "react-image-viewer-dv";

export default function ImageView({ img, title, hideAppbar }) {
  return (
    <div
      onClick={hideAppbar}
      style={{
        overflow: "hidden",
        borderRadius: "25px",
        position: "relative",
        background:
          "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
      }}
    >
      <ImageViewer>
        <img src={img} alt={"..."} width={200} />
      </ImageViewer>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // zIndex: 10,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          pointerEvents: "none",
        }}
      >
        <Typography
          fontSize={"1.2rem"}
          sx={{ color: "white", marginTop: "120%" }}
        >
          {title}
        </Typography>
      </div>
    </div>
  );
}
