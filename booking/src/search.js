import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

const search = (props) => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "rgba(115, 173, 102, 0.5  )" }}
    >
      
        <MDBRow >
          <MDBCol  size="1">
            <label
              style={{ color: "White", fontWeight: "bold", paddingTop: "5px" }}
            >
              LOCATION:
            </label>
          </MDBCol>
          <MDBCol size="3" >
            <select
              className="form-control"
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontWeight: "bold",width:"auto"
              }}
            >
              <option
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                abcaaaaaa
              </option>
            </select>
          </MDBCol>
          <MDBCol size="0.5"><label
              style={{ color: "White", fontWeight: "bold", paddingTop: "5px" }}
            >
              DATE:
            </label></MDBCol>
          <MDBCol size="3">
              <input type="date" className="form-control"  style={{
                  backgroundColor: "transparent",
                  color: "white",
                  fontWeight: "bold",
                }}></input>
          </MDBCol>
        </MDBRow>

    </div>
  );
};

export default search;
