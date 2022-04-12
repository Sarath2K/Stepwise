import React from "react";

function Measures() {
  return (
    <div>
      <div className="border p-3">
        <div className="row">
          <div className="col-6  d-flex justify-content-center">
            <div className="gender-symbol m-2">
              <i class="bi bi-gender-male"></i>
            </div>
            <div className="count-panel flex-grow-1">
              <div>Male</div>
              <div className="count-birth">00</div>
            </div>
          </div>
          <div className="col-6  d-flex justify-content-center  ">
            <div className="gender-symbol m-2">
              <i class="bi bi-gender-female"></i>
            </div>
            <div className="count-panel flex-grow-1">
              <div>Female</div>
              <div className="count-birth">00</div>
            </div>
          </div>
        </div>
        <hr className="ruler-smooth" />
      </div>
    </div>
  );
}

export default Measures;
