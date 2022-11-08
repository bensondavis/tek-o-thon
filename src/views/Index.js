import { useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

import Association from "views/IndexSections/Association";
import Basics from "views/IndexSections/Basics.js";
import Themes from "views/IndexSections/Themes";
import Prizes from "./IndexSections/Prizes";
import Register from "./IndexSections/Register";

export default function Index() {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Basics />
          <Themes />
          <Prizes />
          <Association />
          <Register />
        </div>
        <Footer />
      </div>
    </>
  );
}
