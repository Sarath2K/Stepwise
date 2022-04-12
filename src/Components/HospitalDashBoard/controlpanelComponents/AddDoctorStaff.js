import React from "react";

function AddDoctorStaff() {
  return (
    <div>
      <div className="border p-4 ">
        <div className="add-staff-doctor ">
          <form>
            <div className="row">
              <div className="col-md-3 pt-2">
                <label>Add Staff/Doctor</label>
              </div>
              <div className="col-md-9 pt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className="col-md-3 pt-2">
                <label>Destination</label>
              </div>
              <div className="col-md-9 pt-2">
                <select className="form-control">
                  <option>1</option>
                </select>
              </div>
              <div className=" pt-2 text-center w-100">
                <input type="submit" value="Add" className="btn w-50" />
              </div>
            </div>
          </form>
          <hr className="ruler-smooth" />
          <form>
            <div className="row pt-5">
              <div className="col-md-3 pt-2">
                <label>Add Destination</label>
              </div>
              <div className="col-md-6 pt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Destination"
                />
              </div>
              <div className="col-md-3 pt-2 text-center">
                <input type="submit" value="Save" className="btn w-100" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDoctorStaff;
