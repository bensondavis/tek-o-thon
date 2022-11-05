import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Links from "views/IndexSections/Links";
import Association from "views/IndexSections/Association";
import Basics from "views/IndexSections/Basics.js";
import Themes from "views/IndexSections/Themes";



export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
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
          <Links />
          {/* <Pagination /> */}
          {/* <Notifications /> */}
          {/* <Typography /> */}
          {/* <JavaScript /> */}
          {/* <NucleoIcons /> */}
          <Association />
          {/* <Examples /> */}
          {/* <Download /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
