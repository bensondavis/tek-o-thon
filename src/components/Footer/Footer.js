import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/tot-logo.png"
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
  const title = "TEK-O-THON";
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <img src={logo} width={150} height={150}/>
            <h1 style={{fontWeight: "bold"}}>{title}</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link} onClick={scrollToTop}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Schedule" tag={Link} onClick={scrollToTop}>
                  Schedule
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/team" tag={Link} onClick={scrollToTop}>
                  Team
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="#" onClick={scrollToTop}>
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/team" tag={Link} onClick={scrollToTop}>
                  About Us
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://discord.gg/BNQ8feJM"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-discord" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Join us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://instagram.com/tekothon22?igshid=YmMyMTA2M2Y="
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
