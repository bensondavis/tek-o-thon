import Footer from "components/Footer/Footer.js";
import AppNavbar from "components/Navbars/ExamplesNavbar.js";
import React from "react";
import "../../assets/css/Schedule.css";
import Schedulesingle from "../IndexSections/SheduleSingle";
import { data } from "../IndexSections/Scheduledata";
import { Container } from "reactstrap";

export default function SchedulePage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  return (
    <>
      <AppNavbar />
      <div className=" section section-tabs">
        <Container>
          <h1
            className="title"
            style={{ marginTop: "50px", marginBottom: "50px", textAlign:"center"}}
          >
            Schedule
          </h1>
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
      <Footer />
    </>
  );
}
