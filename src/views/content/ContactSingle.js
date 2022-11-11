import { Stack, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function ContactSingle({ name, phone, role, email }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row", md: "row" }}
      justifyContent={"space-between"}
      sx={{
        maxHeight: "100px",
        maxWidth: "90vw",
        minWidth: "60vw",
        position: "relative",
        zIndex: "3",
      }}
    >
      <Stack direction={"column"}>
        <Typography
          textTransform="uppercase"
          fontWeight={550}
          fontSize={"1.4rem"}
          mb={1}
          sx={{ color: "#d1d1d1", letterSpacing: "0.1rem" }}
        >
          {name}
        </Typography>
        <Typography sx={{ mt: -1, color: "#fff8", opacity: 0.7 }}>{role}</Typography>
      </Stack>
      {phone ? (
        <Typography
          textTransform="uppercase"
          mb={1}
          fontSize={"1.4rem"}
          sx={{ letterSpacing: "0.1rem", marginLeft: "auto" }}
        >
          <Link href={"tel:" + phone} underline="none" color="#d1d1d1">
            {phone}
          </Link>
        </Typography>
      ) : null}
      {email ? (
        <Typography
          textTransform="lowercase"
          mb={1}
          fontSize={"1.3rem"}
          sx={{ letterSpacing: "0rem", marginLeft: "auto" }}
        >
          <Link href={"mailto:" + email} underline="none" color="#d1d1d1">
            {email}
          </Link>
        </Typography>
      ) : null}
    </Stack>
  );
}
