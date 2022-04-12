import React from "react";

function Drops_Vaccination() {
  return (
    <div>
      <form>
        <div className="row p-3">
          <div className="col-md-2">
            <label>Enter Id</label>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Id"
            />
          </div>
          <div className="col-md-4 text-center">
            <input type="submit" className="btn w-50" value="Search" />
          </div>
        </div>
      </form>

      <div>
        <div className="card">
          <div className="card-header text-center card-title">
            <i class="bi bi-droplet-fill"></i> Drops & Vaccination
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-3">
                  <p>Child Id</p>
                </div>
                <div className="col-md-9">
                  <p>
                    <span>Child Id</span>
                  </p>
                </div>
                <div className="col-md-3 p-3">
                  <p>Baby Name</p>
                </div>
                <div className="col-md-9 p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Baby Name"
                  />
                </div>
                <div className="col-md-3">
                  <p>Date of Birth</p>
                </div>
                <div className="col-md-9">
                  <p>
                    <span>Date</span>
                  </p>
                </div>
                <div className="col-md-3">
                  <p>Gender</p>
                </div>
                <div className="col-md-9">
                  <p>
                    <span>Male / Female</span>
                  </p>
                </div>
                <div className="col-md-3">
                  <p>Address</p>
                </div>
                <div className="col-md-9">
                  <p>
                    <span>Address</span>
                  </p>
                </div>

                <div className="col-md-3">
                  <p>Place of Birth</p>
                </div>
                <div className="col-md-9">
                  <p>
                    <span>Hospital Name</span>
                  </p>
                  <p>
                    <span>Hospital Address</span>
                  </p>
                </div>
                <div className="col-md-3">
                  <p>Father Name</p>
                </div>
                <div className="col-md-9">
                  <p>
                    <span>Father Name</span>
                  </p>
                </div>
                <div className="col-md-3">
                  <p>Mother Name</p>
                </div>
                <div className="col-md-9">
                  <p>
                    <span>Mother Name</span>
                  </p>
                </div>
                <div className="col-md-4">
                  <select className="form-control">
                    <option>1</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <input type="datetime-local" className="form-control" />
                </div>
                <div className="col-md-4">
                  <select className="form-control">
                    <option>Dr</option>
                  </select>
                </div>
              </div>
              <div className="pt-4  text-center">
                <input type="submit" value="Save" className="btn w-50" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drops_Vaccination;
<div>
  <div className="row w-100">
    <div className="col-md-4 w-100">
      <select className="form-control">
        <option>Dose 1</option>
        <option>Dose 2</option>
        <option>Dose 3</option>
        <option>Dose 4</option>
        <option>Dose 5</option>
        <option>Dose 6</option>
        <option>Dose 7</option>
        <option>Dose 8</option>
        <option>Dose 9</option>
        <option>Dose 10</option>
        <option>Dose 11</option>
      </select>
    </div>
    <div className="col-md-4 w-100">
      <input type="date" className="form-control" />
    </div>
    <div className="col-md-4 w-100">
      <input
        type="text"
        className="form-control"
        placeholder="Ender Duty Dr Name"
      />
    </div>
  </div>
</div>;
