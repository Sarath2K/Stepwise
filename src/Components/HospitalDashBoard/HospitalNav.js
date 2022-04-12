import React from "react";
import BirthReg from "./BirthReg";
import Drops_Vaccination from "./Drops_Vaccination";
import ControlPanel from "./ControlPanel";

function HospitalNav() {
  return (
    <div>
      <div id="accordion">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            Hospital Name
          </a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto collapse">
              <li class="nav-item active">
                <a
                  class="nav-link "
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseDashboard"
                  aria-expanded="false"
                  aria-controls="collapseDashboard"
                >
                  <i class="bi bi-house-fill"></i> Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseBirthReg"
                  aria-expanded="false"
                  aria-controls="collapseBirthReg"
                >
                  <i class="bi bi-activity"></i> Birth Registration
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseDropsVaccination"
                  aria-expanded="false"
                  aria-controls="collapseDropsVaccination"
                >
                  <i class="bi bi-droplet-fill"></i> Drops & Vaccination
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseCertificate"
                  aria-expanded="false"
                  aria-controls="collapseCertificate"
                >
                  <i class="bi bi-award-fill"></i>Certificate
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  <i class="bi bi-box-arrow-right"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content-container">
          <div
            id="collapseDashboard"
            className="collapse"
            aria-labelledby="collapseDashboard"
            data-parent="#accordion"
          >
            <div className=" m-5 p-4 h-100">
              <ControlPanel />
            </div>
          </div>
          <div
            id="collapseBirthReg"
            className="collapse"
            aria-labelledby="collapseBirthReg"
            data-parent="#accordion"
          >
            <div className="card pt-4 m-2">
              <div className="card-header text-center text-title-card">
                <i class="bi bi-activity"></i> Birth Registration
              </div>
              <div className="card-body">
                <BirthReg />
              </div>
            </div>
          </div>
          <div
            id="collapseDropsVaccination"
            className="collapse"
            aria-labelledby="collapseDropsVaccination"
            data-parent="#accordion"
          >
            <div className="card m-5 p-4">
              <div className="card-header text-center text-title-card">
                Drops & Vaccination
              </div>
              <div>
                <Drops_Vaccination />
              </div>
            </div>
          </div>
          <div
            id="collapseCertificate"
            className="collapse"
            aria-labelledby="collapseCertificate"
            data-parent="#accordion"
          >
            <div className="card m-5 p-4">Certificate</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalNav;
