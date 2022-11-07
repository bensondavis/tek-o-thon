import AppBar from "../../components/Navbars/IndexNavbar";
import Footer from "../../components/Footer/Footer";
import { Stack, Typography } from "@mui/joy";
import { contactData } from "views/data/ContactData";
import { useEffect } from "react";
import { Container } from "reactstrap";
import ContactSingle from "./ContactSingle";

export default function Contact() {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <AppBar />
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <Stack
            direction={"column"}
            justifyContent="center"
            alignItems="center"
            sx={{minHeight: "100%"}}
          >
            <Typography
              variant="h1"
              fontWeight={600}
              fontSize={"4rem"}
              sx={{ textAlign: "center" }}
            >
              Contacts
            </Typography>
            <Stack direction={"column"}>
              {contactData.map((data, index) => (
                <ContactSingle
                  name={data.name}
                  phone={data.phone}
                  role={data.role}
                  key={index}
                />
              ))}
            </Stack>
          </Stack>
        </Container>
      </div>    
      <Footer />
    </>
  );
}
