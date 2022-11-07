import { useEffect, useState } from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Links from "views/IndexSections/Links";
import Association from "views/IndexSections/Association";
import Basics from "views/IndexSections/Basics.js";
import Themes from "views/IndexSections/Themes";
import Prizes from "./IndexSections/Prizes";
import Download from "./IndexSections/Download";

export default function Index() {
  const [showAppbar, setShowAppbar] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  const handleHideAppbar = ()=> {
    setShowAppbar(!showAppbar)
  }

  return (
    <>
     {showAppbar ? <IndexNavbar /> : null}
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Basics />
          <Themes />
          <Links hideAppbar={handleHideAppbar} />
          {/* <Pagination /> */}
          {/* <Notifications /> */}
          {/* <Typography /> */}
          {/* <JavaScript /> */}
          {/* <NucleoIcons /> */}
          <Prizes />
          <Association />
          {/* <Examples /> */}
          <Download />
        </div>
        <Footer />
      </div>
    </>
  );
}
