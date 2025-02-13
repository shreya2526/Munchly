import React from "react";
import "./AppDownload.css";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        Munchly App
      </p>
      <div className="app-download-platform">
        <GrAppleAppStore size={50} />
        <IoLogoGooglePlaystore size={50} />
      </div>
    </div>
  );
};

export default AppDownload;
