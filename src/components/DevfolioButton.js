import { useEffect, useState } from "react";

export default function Devfolio() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const browserStyle = {
    position: "fixed",
    right: "5px",
    top: "100px",
    zIndex: 3,
  };

  const mobileStyle = {
    position: "fixed",
    bottom: "5px",
    left: `${(width - 312) / 2}px`,
    zIndex: 3,
  };

  return (
    <div style={!(width <= 768) ? browserStyle : mobileStyle}>
      <div
        className="apply-button"
        data-hackathon-slug="tekothon"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }}
      ></div>
    </div>
  );
}
