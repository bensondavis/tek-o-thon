import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  DropdownToggle,
  NavLink,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Nav,
  Container,
} from "reactstrap";

export default function ExamplesNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [collapseOut, setCollapseOut] = useState("");
  const [color, setColor] = useState("navbar-transparent");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

 useEffect(() => {
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
            <img src={logo} width={23} alt={"logo"} />
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
                <DropdownItem
                  tag={Link}
                  to="/schedule"
                  onClick={() => {
                    scrollToTop();
                    if (collapseOpen) toggleCollapse();
                  }}
                >
                  <i className="fa-solid fa-calendar-days"></i>
                  Schedule
                </DropdownItem>
                <DropdownItem tag={Link} to="/winners" onClick={scrollToTop}>
                  <i className="fa-solid fa-medal"></i>
                  Winners
                </DropdownItem>
                <DropdownItem tag={Link} to="/documents" onClick={scrollToTop}>
                  <i className="fa-solid fa-file"></i>
                  Documents
                </DropdownItem>
                <DropdownItem tag={Link} to="/sponsors" onClick={scrollToTop}>
                  <i className="fa-solid fa-coins"></i>
                  Sponsors
                </DropdownItem>
                <DropdownItem tag={Link} to="/team" onClick={scrollToTop}>
                  <i className="fa-solid fa-people-group"></i>
                  Team
                </DropdownItem>
                <DropdownItem tag={Link} to="/contact" onClick={scrollToTop}>
                  <i className="fa-solid fa-phone"></i>
                  Contact Us
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
                href="https://discord.gg/FsStcFtTU9"
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
            {/* <NavItem>
              <NavLink tag={Link} to="/">
                Back to Home
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
