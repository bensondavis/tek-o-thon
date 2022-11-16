import React from "react";
import "../../assets/css/Schedule.css";
import Schedulesingle from "./SheduleSingle";
import { data } from "../data/Scheduledata";
import { Container } from "reactstrap";
import { Typography } from "@mui/material";
import Appbar from "components/Navbars/ContentNavbar";

export default function SchedulePage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  return (
    <>
      <Appbar />
      <div className=" section section-tabs">
        <Container>
          <Typography
            fontSize={"3rem"}
            fontWeight={550}
            sx={{
              color: "#d1d1d1",
              textAlign: "center",
              marginBottom: "40px",
              marginTop: "30px",
              userSelect: "none",
            }}
          >
            Schedule
          </Typography>
          <div className="dashboard_schedule_inner_wrapper" id="schedule">
            {data.map((dat, index) => (
              <Schedulesingle
                date={dat.date}
                title={dat.title}
                description={dat.description}
                flag={dat.flag}
                data={data}
                index={index}
                key={index}
              />
            ))}
          </div>

          <section className="section"></section>
        </Container>
      </div>
    </>
  );
}
