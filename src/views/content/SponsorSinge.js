import { Box, Collapse, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LaunchIcon from "@mui/icons-material/Launch";

export default function SponsorSingle({
  img,
  link,
  twitter,
  linkedin,
  fb,
  insta,
}) {
  const [hover, setHover] = useState(false);

  const style = {
    maxWidth: "250px",
    backgroundColor: "#1F2251",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    minHeight: "80px",
  };

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Box sx={style}>
          <img src={img} width={"80%"} alt={"logo"} />
        </Box>
        <Collapse in={hover}>
          <Stack direction={"row"} alignItems="center" justifyContent="center">
            {link ? (
                <IconButton href={link} sx={{ color: "white" }}>
                  <LaunchIcon />
                </IconButton>
            ) : null}
            {twitter ? (
              <IconButton href={twitter} sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
            ) : null}
            {fb ? (
              <IconButton href={fb} sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
            ) : null}
            {insta ? (
              <IconButton href={insta} sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
            ) : null}
            {linkedin ? (
              <IconButton href={linkedin} sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
            ) : null}
          </Stack>
        </Collapse>
      </div>
    </>
  );
}
