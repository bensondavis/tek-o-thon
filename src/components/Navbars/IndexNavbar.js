import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Divider from '@mui/joy/Divider';
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };

  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };

  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };

  const onCollapseExited = () => {
    setCollapseOut("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            to="/"
            tag={Link}
            id="navbar-brand"
            onClick={scrollToTop}
          >
            <img src={logo} width={23} />
            <span> TEK-O-THON</span>
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <button
              aria-expanded={collapseOpen}
              className="navbar-toggler"
              onClick={toggleCollapse}
              style={{ position: "absolute", right: 10 }}
            >
              <i className="fa-solid fa-xmark close-icon-white"></i>
            </button>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink onClick={scrollToTop} tag={Link} to="/">
                <i className="fa-solid fa-house"></i>
                <p className="d-lg-none d-xl-none">Home</p>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Event details
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                {/* <DropdownItem tag={Link} to="/" onClick={scrollToTop}>
                  <i class="fa-solid fa-house"></i>
                  Home
                </DropdownItem> */}
                <DropdownItem tag={Link} to="/schedule" onClick={scrollToTop}>
                  <i className="fa-solid fa-calendar-days"></i>
                  Schedule
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  to="/leaderboard"
                  onClick={scrollToTop}
                >
                  <i className="fa-solid fa-medal"></i>
                  Winners
                </DropdownItem>
                <DropdownItem tag={Link} to="/" onClick={scrollToTop}>
                  <i className="fa-solid fa-coins"></i>
                  Sponsors
                </DropdownItem>
                <DropdownItem tag={Link} to="/team" onClick={scrollToTop}>
                  <i className="fa-solid fa-people-group"></i>
                  Team
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href="https://forms.gle/1Dh95bgdjz2vq5SK6"
              >
                <i className="tim-icons icon-spaceship" /> Register
              </Button>
            </NavItem>
            <Divider orientation="vertical" inset="none" sx={{mr: 1}}/>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/profile.php?id=100087642903118"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://discord.gg/BNQ8feJM"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Discord"
              >
                <i className="fa-brands fa-discord"></i>
                <p className="d-lg-none d-xl-none">Discord</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/tekothon_22"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
