import * as React from "react";
// import {AspectRatio} from "@mui/material";
import {Card} from "@mui/material";
// import {CardOverflow} from "@mui/material";
import {Typography} from "@mui/material";

export default function ProfileCard({ img, name, role }) {
  return (
    <Card variant="" sx={{ width: 180, textAlign: "center", backgroundColor: "transparent"}}>
      {/* <CardOverflow>
        <AspectRatio ratio="1:1"> */}
          <img
            src={img}
            loading="lazy"
            alt=""
            style={{ borderRadius: "50%" }}
          />
        {/* </AspectRatio>
      </CardOverflow> */}
      <Typography
        level="h2"
        sx={{ fontSize: "md", mt: 2, color: "#d1d1d1", userSelect: "none" }}
      >
        {name}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2, userSelect: "none" , color: "grey", opacity: 0.6}}>
        {role}
      </Typography>
    </Card>
  );
}
