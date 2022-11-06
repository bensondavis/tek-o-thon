import Typography from "@mui/joy/Typography";
import { Stack } from "@mui/joy";

export default function ContactSingle({ name, phone }) {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography fontSize="2rem" fontWeight={450}>
        {name}
      </Typography>
      <Typography fontSize="2rem">{phone}</Typography>
    </Stack>
  );
}
