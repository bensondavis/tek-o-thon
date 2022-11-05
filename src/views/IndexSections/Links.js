import { Button, Container, Row, Col } from "reactstrap";
import guidelines from "./files/guidelines.pdf";
import schedules from "./files/schedule.pdf";
import poster from "./files/poster.jpg";


function Schedule() {
  return (
    <div className=" section section-tabs">
      <Container style={{textAlign: "center"}}>
        <Row className="row-grid justify-content-between align-items-center">
          <Col>
            <a href={poster} download>
              <Button color="primary">Poster</Button>
            </a>
          </Col>
          <Col>
            <a href={guidelines} download>
              <Button color="primary">Guidlines</Button>
            </a>
          </Col>
          <Col>
            <a href={schedules} download>
              <Button color="primary" to="schedule-page">
                Schedule
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Schedule;
