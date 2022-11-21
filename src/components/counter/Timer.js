import Counter from "./Counter";
import { useCountdown } from "./CountDownHook";
import { Stack } from "@mui/material";

const hackDate = new Date("2022-11-25T10:00+05:30").getTime();

export default function Timer() {
  const [days, hours, minutes, seconds] = useCountdown(hackDate);

  return (
    <Stack
      direction={"row"}
      justifyContent="center"
      alignItems={"center"}
      spacing={3}
      sx={{minWidth: "100%"}}
    >
      <Counter time={days} title={"Days"} fullTime={15} />
      <Counter time={hours} title={"Hours"} fullTime={24} />
      <Counter time={minutes} title={"Minutes"} fullTime={60} />
      <Counter time={seconds} title={"Seconds"} fullTime={60} />
    </Stack>
  );
}
