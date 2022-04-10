import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";

function Registration() {
  function submit(e) {
    e.preventDefault();
    //let displayArea = document.getElementById("alert-success");
    alert("Success");

    //console.log("You clicked submit.");
    //<Alert variant="outlined" severity="success">
    //This is a success alert — check it out!
    //</Alert>;
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>;
  }
  return (
    <div>
      <div className="container ">
        <div className="card p-3 m-5">
          <form onSubmit={submit} action="">
            <div className="input-container p-2">
              <div className="row">
                <div className="col-md-4">
                  <label>Hospital Name</label>
                </div>
                <div className="col-md-8">
                  <input
                    type=" text"
                    className="form-control"
                    placeholder="Enter Hospital Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-container p-2">
              <div className="row">
                <div className="col-md-4">
                  <label>Hospital Registration Number</label>
                </div>
                <div className="col-md-8">
                  <input
                    type=" text"
                    className="form-control"
                    placeholder="Enter Hospital Reg No"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-container p-2">
              <div className="row">
                <div className="col-md-4">
                  <label>Phone Number</label>
                </div>
                <div className="col-md-8">
                  <input
                    type=" number"
                    className="form-control"
                    placeholder="Enter Hospital Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-container p-2">
              <div className="row">
                <div className="col-md-4">
                  <label>Email</label>
                </div>
                <div className="col-md-8">
                  <input
                    type=" text"
                    className="form-control"
                    placeholder="Enter Mail"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-container p-2">
              <div className="row">
                <div className="col-md-4">
                  <label>Hospital Address</label>
                </div>
                <div className="col-md-8">
                  <textarea
                    className="form-control w-100"
                    rows="5"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="input-container p-2">
              <div className="row">
                <div className="col-md-4">
                  <label>Create Password</label>
                </div>
                <div className="col-md-8">
                  <input
                    type=" text"
                    className="form-control"
                    placeholder="Enter Password"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-container p-2">
              <div className="row">
                <div className="col-md-4">
                  <label>Confirm Password</label>
                </div>
                <div className="col-md-8">
                  <input
                    type=" password"
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="m-3">
              <input type="submit" className="btn w-100" value="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
