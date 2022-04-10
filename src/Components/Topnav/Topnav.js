import React from "react";
import Logo from "./Logo.png";

function Topnav() {
  return (
    <div>
      <div className="d-flex justify-content-start p-2">
        <div>
          <img src={Logo} alt="Logo" className="image-fluid w-50" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Topnav;
