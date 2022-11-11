import { Box } from "@mui/material";


export default function SponsorSingle({ img }) {
  return (
    <>
      <Box
        elevation={16}
        sx={{
          maxWidth: "250px",
          height: "90px",
          backgroundColor: "#1F2251",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        <img src={img} width={"80%"} alt={"logo"} />
      </Box>
    </>
  );
}
