import { Box, Stack } from "@mui/material";
import { sponsorData } from "./data/SponsorPrizeData";
import SponsorPrizeSingle from "./SponsorPrizeSingle";

export default function SponsorPrize() {
  return (
    <Box
      sx={{
        width: "90vw",
        overflowX: "scroll",
        overflowY: "hidden",
        "&::-webkit-scrollbar": { height: 10, WebkitAppearance: "none" },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: 8,
          border: "2px solid",
          borderColor: "#fff",
          backgroundColor: "rgba(0 0 0 / 0.5)",
        },
        mt: 8,
      }}
    >
      <Stack
        direction={"row"}
        alignItems="flex-start"
        justifyContent="space-between"
        spacing={2}
        sx={{ width: "130%" }}
      >
        {sponsorData.map((data, index) => (
          <SponsorPrizeSingle
            img={data.img}
            body={data.body}
            link={data.link}
            style={data.style}
            key={index}
          />
        ))}
      </Stack>
    </Box>
  );
}
