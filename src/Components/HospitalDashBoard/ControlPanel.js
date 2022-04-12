import React from "react";
import AddDoctorStaff from "./controlpanelComponents/AddDoctorStaff";
import Measures from "./controlpanelComponents/Measures";
import ViewAddStock from "./controlpanelComponents/ViewAddStock";
import ViewBirths from "./controlpanelComponents/ViewBirths";

function ControlPanel() {
  return (
    <div>
      <div class="row">
        <div class="col-3">
          <div
            class="nav flex-column nav-pills sidebar"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <i class="bi bi-view-stacked"></i> View Births
            </a>
            <a
              class="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <i class="bi bi-three-dots"></i> Measures
            </a>
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              <i class="bi bi-plus-square"></i> View / Add -Stock
            </a>
            <a
              class="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              <i class="bi bi-plus-square"></i> Add Doctor/Staff
            </a>
          </div>
        </div>
        <div class="col-9">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <ViewBirths />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <Measures />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <ViewAddStock />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <AddDoctorStaff />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
