import { Typography, Stack } from "@mui/material";

export default function Counter({ time, title }) {
  return (
    <>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography fontFamily={"ArchivoBlack-Regular"} fontSize={"3rem"} sx={{color: "white"}}>
          {time}
        </Typography>
        <Typography  fontSize={"1.3rem"} sx={{color: "white"}}>
          {title}
        </Typography>
      </Stack>
    </>
  );
}
