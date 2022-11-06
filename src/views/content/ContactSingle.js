import Typography from "@mui/joy/Typography";
import { Stack } from "@mui/joy";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";

export default function ContactSingle({ name, phone, role }) {
  return (
    <Box sx={{ maxWidth: "100vw", mt: 3 }}>
      <Stack
        direction={"row"}
        spacing={{ xs: 1, sm: 3, md: 4 }}
        justifyContent="space-between"
      >
        <Typography
          level="h1"
          textTransform="uppercase"
          fontWeight="xl"
          mb={1}
          sx={{ letterSpacing: "0.15rem" }}
        >
          {name}
        </Typography>

        <Typography
          textTransform="uppercase"
          fontWeight="xl"
          mb={1}
          sx={{ letterSpacing: "0.15rem" }}
        >
          <Link
            href={"tel:" + phone}
            underline="none"
            color="neutral"
            variant="plain"
            level="h3"
          >
            {phone}
          </Link>
        </Typography>
      </Stack>
      <Typography sx={{ mt: -1 }}>{role}</Typography>
    </Box>
  );
}
