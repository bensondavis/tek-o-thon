import AppBar from "../../components/Navbars/IndexNavbar";
import Footer from "../../components/Footer/Footer";
import { Stack, Typography } from "@mui/material";
import { contactData } from "views/data/ContactData";
import { useEffect } from "react";
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
      <div className="section section-signup">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Typography
          fontWeight={550}
          fontSize={"3rem"}
          sx={{
            color: "#d1d1d1",
            textAlign: "center",
            position: "relative",
            zIndex: 3,
          }}
        >
          Contacts
        </Typography>
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ mt: 2 }}
        >
          <Stack direction={"column"} spacing={4}>
            {contactData.map((data, index) => (
              <ContactSingle
                name={data.name}
                phone={data.phone}
                role={data.role}
                email={data.email}
                key={index}
              />
            ))}
          </Stack>
        </Stack>
      </div>
      <Footer />
    </>
  );
}
