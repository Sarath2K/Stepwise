import React from "react";

function BirthReg() {
  return (
    <div>
      <div className="container-fluid">
        <form action="">
          <div className="card m-3">
            <div className="card-header card-title text-title-card">
              <i class="bi bi-activity"></i> Child Details
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 p-2">
                  <label>
                    Date <sup>*</sup>
                  </label>
                </div>
                <div className="col-md-8 p-2">
                  <input type="date" className="form-control " required />
                </div>
                <div className="col-md-4 p-2">
                  <label>
                    Time <sup>*</sup>
                  </label>
                </div>
                <div className="col-md-8 p-2">
                  <input type="time" className="form-control" required />
                </div>
                <div className="col-md-4 p-2">
                  <label>
                    Delivery Mode <sup>*</sup>
                  </label>
                </div>
                <div className="col-md-8 p-2">
                  <select required className="form-control">
                    <option>Natural childbirth </option>
                    <option>Vaginal delivery </option>
                    <option>Caesarean Section </option>
                    <option>Forceps delivery </option>
                    <option>Vacuum extraction </option>
                    <option>Vaginal Birth After Cesarean (VBAC) </option>
                  </select>
                </div>
                <div className="col-md-4 p-2">
                  <label>
                    Gender <sup>*</sup>
                  </label>
                </div>
                <div className="col-md-8 p-2">
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="gender"
                      />
                      Male
                    </label>
                  </div>
                  <div class="form-check-inline p-2">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="gender"
                      />
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card m-3">
            <div className="card-header card-title text-title-card">
              <i class="bi bi-activity"></i> Mothers Details
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 p-2">
                  <label>
                    Mother Name <sup>*</sup>
                  </label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mother Name"
                    required
                  />
                </div>
                <div className="col-md-4 p-2">
                  <label>Mother DOB </label>
                </div>
                <div className="col-md-8 p-2">
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-4 p-2">
                  <label>Age</label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Age"
                  />
                </div>
                <div className="col-md-4 p-2">
                  <label>
                    Nationality <sup>*</sup>
                  </label>
                </div>
                <div className="col-md-8 p-2">
                  <select required className="form-control">
                    <option>Residential - Indian</option>
                    <option>Non -Residential Indian </option>
                    <option>Others</option>
                  </select>
                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Others"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4 p-2">
                  <label>Aadar Number</label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Aadar Number"
                  />
                </div>
                <div className="col-md-4 p-2">
                  <label>Mobile/Phone Number</label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile/Phone Number"
                  />
                </div>
                <div className="col-md-4 p-2">
                  <label>Email</label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card m-3">
            <div className="card-header card-title text-title-card">
              <i class="bi bi-activity"></i> Father Details
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 p-2">
                  <label>
                    Father Name <sup>*</sup>
                  </label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Father Name"
                    required
                  />
                </div>
                <div className="col-md-4 p-2">
                  <label>Father DOB </label>
                </div>
                <div className="col-md-8 p-2">
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-4 p-2">
                  <label>Age</label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Age"
                  />
                </div>
                <div className="col-md-4 p-2">
                  <label>
                    Nationality <sup>*</sup>
                  </label>
                </div>
                <div className="col-md-8 p-2">
                  <select required className="form-control">
                    <option>Residential - Indian</option>
                    <option>Non -Residential Indian </option>
                    <option>Others</option>
                  </select>
                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Others"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4 p-2">
                  <label>Aadar Number</label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Aadar Number"
                  />
                </div>
                <div className="col-md-4 p-2">
                  <label>Mobile/Phone Number</label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile/Phone Number"
                  />
                </div>
                <div className="col-md-4 p-2">
                  <label>Email</label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card m-3">
            <div className="card-header card-title text-title-card">
              <i class="bi bi-activity"></i> Office Details
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 p-2">
                  <label> Hospital Name and Address </label>
                </div>
                <div className="col-md-8 p-2">
                  <p>Hospital Name</p>
                  <p>Hospital Address</p>
                </div>
                <div className="col-md-4 p-2">
                  <label>Place of Birth (POB)</label>
                </div>
                <div className="col-md-8 p-2">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4 p-2">
                  <label>
                    Birth Handle By
                    <br />
                    <p>(If Doctor / Duty Nurse)</p>
                  </label>
                </div>
                <div className="col-md-8 p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <input type="submit" value="Submit" className="btn w-50" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BirthReg;
