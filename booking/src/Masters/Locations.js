import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import * as Actions from "../Actions";
import { MDBDataTable } from "mdbreact";
import { Button } from "@material-ui/core";

class Locations extends Component {
  state = {
    Location: "",
    err: false,
    locations: [],
    Rows: [],
    edit:{},
    errEdit:false,
    delId:{
        _id:""
    }
  };
  delSubmit=async()=>{
    let res=await Axios.post('http://localhost:3001/master/del',this.state.delId)
    if(res.status===200){
        
        this.props.getLocations()
        alert("Location "+res.data.Name +" Deleted")
    }
  }
editSubmit=async()=>{
    let res=await Axios.post('http://localhost:3001/master/edit',this.state.edit)
    if(res.status===200){
        
        this.props.getLocations()
        alert("Location Updated")
    }


}
  Cols = [
    {
      label: "Location",
      field: "Name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Edit",
      field: "Edit",
      sort: "asc",
      width: 150,
    },
    {
      label: "Delete",
      field: "Delete",
      sort: "asc",
      width: 150,
    },
  ];

  populate = () => {
    // console.log("in")
    let Rows = [];
    // console.log(this.props.locations)
    this.props.locations.map((obj) => {
      let row = {
        Name: "",
        Edit: "",
        Delete: "",
      };

      row.Name = obj.Name;
      row.Edit = (
        <Button
          data-toggle="modal"
          data-target="#myModal"
          onClick={() => {
            this.editHandler(obj._id);
          }}
        >
          Edit
        </Button>
      );
      row.Delete = <Button data-toggle="modal"
      data-target="#myModal1"
      onClick={() => {
        this.delHandler(obj._id);
      }}>Delete</Button>;

      Rows.push(row);
    });

    this.setState({ locations: this.props.locations, Rows: Rows });
  };

  componentDidUpdate = async () => {
    if (this.state.locations !== this.props.locations) {
      this.populate();
    }
  };

  componentDidMount = () => {
    this.props.getLocations();
  };
  delHandler = (id) => {
    this.props.locations.map((obj1) => {
      if (obj1._id === id) {
        this.setState({delId:{_id:obj1._id}})
      }
    });
}
  editHandler = (id) => {
    // console.log("here");
    this.setState({edit:{}})
    // let obj = {};
    this.props.locations.map((obj1) => {
      if (obj1._id === id) {
        this.setState({edit:obj1})
      }
    });

    
  };
  editChangeHandler=(event)=>{
    let location = event.target.value;
    if (event.target.value.length < 3) {
      this.setState({ edit: {...this.state.edit,Name:location}, errEdit: true });
    } else {
      this.setState({ edit: {...this.state.edit,Name:location}, errEdit: false });
    }
}
  changeHandler = (event) => {
    let location = event.target.value;
    if (event.target.value.length < 3) {
      this.setState({ Location: event.target.value, err: true });
    } else {
      this.setState({ Location: event.target.value, err: false });
    }
  };
  submitHandler = async () => {
    try {
      let obj = {
        Name: this.state.Location,
      };
      // console.log(obj)
      let res = await Axios.post("http://localhost:3001/master/new", obj);
      alert("Location Posted Succesfully");
      await this.props.getLocations();
      this.setState({Location:''})
    } catch (err) {
      alert(err);
    }
  };
  render() {
    //    console.log(this.state.delId)  

    return (
      <div className="container">
        <h1>Location Master</h1>
        <hr></hr>
        <div class="form-group">
          <label>Location:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Location"
            onChange={this.changeHandler}
            value={this.state.Location}
          ></input>
          {this.state.err ? (
            <label style={{ color: "red" }}>
              Location name should have atleast 3 letters
            </label>
          ) : null}
        </div>

        {this.state.Location.length < 3 ? (
          <button type="submit" disabled class="btn btn-primary">
            Submit
          </button>
        ) : (
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.submitHandler}
          >
            Submit
          </button>
        )}

        <br></br>
        <hr></hr>
        <br></br>
        <MDBDataTable
          striped
          bordered
          hover
          data={{ columns: this.Cols, rows: this.state.Rows }}
        />

<div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title">Edit Location</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">
                <form className="form-inline">
                <div className="row">
                <div className="col-md-3">
                    <label className="align-middle">Location</label>
                </div>
                <div className="col-md-9">
                <input
            type="text"
            class=" form-control"
            placeholder="Enter Location"
            onChange={this.editChangeHandler}
            value={this.state.edit.Name}
          ></input>
          {this.state.errEdit?<label style={{color:"red"}}>Location must have atleast 3 letters</label>:null}
          
                </div>
                
                </div>
                </form>
            </div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-success"  data-dismiss="modal" onClick={this.editSubmit}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="myModal1">
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title">Delete Location</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">
                <form className="form-inline">
                <div className="row">
                
        <label className="align-middle">Are you sure you want to delete this location?</label>
                
                
              
                
                </div>
                </form>
            </div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                No
              </button>
              <button type="button" class="btn btn-success"  data-dismiss="modal" onClick={this.delSubmit}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    locations: state.locationList,
  };
};
const mapActionsToProps = (dispatch) => {
  return {
    getLocations: () => {
      dispatch(Actions.getLocations());
    },
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Locations);
