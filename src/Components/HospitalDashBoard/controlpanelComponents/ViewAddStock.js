import React from "react";

function ViewAddStock() {
  return (
    <div>
      <div className="p-4">
        <form>
          <div className="row">
            <div className="col-3 pt-2">
              <label>Drug Name</label>
            </div>
            <div className="col-9 pt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Drug Name"
              />
            </div>
            <div className="col-3 pt-2">
              <label>Date of manufacture</label>
            </div>
            <div className="col-9 pt-2">
              <input type="date" className="form-control" />
            </div>
            <div className="col-3 pt-2">
              <label>Date of Expire</label>
            </div>
            <div className="col-9 pt-2">
              <input type="date" className="form-control" />
            </div>
            <div className="col-3 pt-2">
              <label>Count</label>
            </div>
            <div className="col-9 pt-2">
              <input type="Number" className="form-control" />
            </div>
          </div>
          <div className="text-center m-4">
            <input type="submit" value="Add" className="btn w-50" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ViewAddStock;
