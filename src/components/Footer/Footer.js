import { Link } from "react-router-dom";
import logo from "../../assets/img/tot-logo.png";
import { useState, useEffect } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { IconButton, Typography } from "@mui/material";

export default function Footer() {
  const [scrollTopVal, setScrollTopVal] = useState(window.scrollY);
  const [hover, setHover] = useState(false);

  const title = "TEK-O-THON";

  const handleHover = () => {
    setHover(!hover);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDisplayScrollButton = () => {
    setScrollTopVal(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleDisplayScrollButton);
    return () => {
      window.removeEventListener("scroll", handleDisplayScrollButton);
    };
  }, []);

  const scrollToTopButtonStyle = {
    outline: "0 !important",
    backgroundColor: hover ? "#265D97A1 !important" : "#265D97 !important",
    color: "rgb(153, 204, 243)",
    position: "fixed",
    bottom: "75px",
    right: "10px",
    display: scrollTopVal > 20 ? "" : "none",
    zIndex: 3,
  };

  return (
    <>
      <IconButton
        sx={scrollToTopButtonStyle}
        size="large"
        onClick={scrollToTop}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <ExpandLessIcon />
      </IconButton>

      <footer className="footer">
        <Container>
          <Row>
            <Col
              md="3"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={logo} width={150} height={150} alt={"logo"} />
              <Typography fontSize={"2rem"} fontWeight={600}>
                {title}
              </Typography>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link} onClick={scrollToTop}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/schedule" tag={Link} onClick={scrollToTop}>
                    Schedule
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/winners" tag={Link} onClick={scrollToTop}>
                    Winners
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/documents" tag={Link} onClick={scrollToTop}>
                    Documents
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/sponsors" tag={Link} onClick={scrollToTop}>
                    Sponsorship
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/team" tag={Link} onClick={scrollToTop}>
                    Team
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact" tag={Link} onClick={scrollToTop}>
                    Contact Us
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
                  href="https://discord.gg/FsStcFtTU9"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-discord"
                    style={{ marginTop: "10px" }}
                  ></i>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Join us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.instagram.com/tekothon_22"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.facebook.com/profile.php?id=100087642903118"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-facebook" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Follow us
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
