import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import * as Actions from "../Actions";
import { MDBDataTable } from "mdbreact";
import { Button } from "@material-ui/core";

class Purpose extends Component {
  state = {
    Purpose: "",
    err: false,
    Purposes: [],
    Rows: [],
    edit:{},
    errEdit:false,
    delId:{
        _id:""
    }
  };
  delSubmit=async()=>{
    let res=await Axios.post('http://localhost:3001/master/purpose/del',this.state.delId)
    if(res.status===200){
        
        this.props.getPurposes()
        alert("Purpose "+res.data.Name +" Deleted")
    }
  }
editSubmit=async()=>{
    let res=await Axios.post('http://localhost:3001/master/purpose/edit',this.state.edit)
    if(res.status===200){
        
        this.props.getPurposes()
        alert("Purpose Updated")
    }


}
  Cols = [
    {
      label: "Purpose",
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
   
    let Rows = [];
  
    this.props.purposes.map((obj) => {
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
// console.log(row)
      Rows.push(row);
    });

    this.setState({ Purposes: this.props.purposes, Rows: Rows });
  };

  componentDidUpdate = async () => {
    if (this.state.Purposes !== this.props.purposes) {
      this.populate();
    }
  };

  componentDidMount = () => {
    this.props.getPurposes();
  };
  delHandler = (id) => {
    this.props.purposes.map((obj1) => {
      if (obj1._id === id) {
        this.setState({delId:{_id:obj1._id}})
      }
    });
}
  editHandler = (id) => {
    // console.log("here");
    this.setState({edit:{}})
    // let obj = {};
    this.props.purposes.map((obj1) => {
      if (obj1._id === id) {
        this.setState({edit:obj1})
      }
    });

    
  };
  editChangeHandler=(event)=>{
    let purpose = event.target.value;
    if (event.target.value.length < 3) {
      this.setState({ edit: {...this.state.edit,Name:purpose}, errEdit: true });
    } else {
      this.setState({ edit: {...this.state.edit,Name:purpose}, errEdit: false });
    }
}
  changeHandler = (event) => {
    
    if (event.target.value.length < 3) {
      this.setState({ Purpose: event.target.value, err: true });
    } else {
      this.setState({ Purpose: event.target.value, err: false });
    }
  };
  submitHandler = async () => {
    try {
      let obj = {
        Name: this.state.Purpose,
      };
      // console.log(obj)
      let res = await Axios.post("http://localhost:3001/master/purpose/new", obj);
      alert("Purpose Posted Succesfully");
      await this.props.getPurposes();
      this.setState({Purpose:''})
    } catch (err) {
      alert(err);
    }
  };
  render() {
    //    console.log(this.state.delId)  

    return (
      <div className="container">
        <h1>Purpose Master</h1>
        <hr></hr>
        <div class="form-group">
          <label>Purpose:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Purpose"
            onChange={this.changeHandler}
            value={this.state.Purpose}
          ></input>
          {this.state.err ? (
            <label style={{ color: "red" }}>
              Purpose name should have atleast 3 letters
            </label>
          ) : null}
        </div>

        {this.state.Purpose.length < 3 ? (
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
              <h4 class="modal-title">Edit Purpose</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">
                <form className="form-inline">
                <div className="row">
                <div className="col-md-3">
                    <label className="align-middle">Purpose</label>
                </div>
                <div className="col-md-9">
                <input
            type="text"
            class=" form-control"
            placeholder="Enter Purpose"
            onChange={this.editChangeHandler}
            value={this.state.edit.Name}
          ></input>
          {this.state.errEdit?<label style={{color:"red"}}>Purpose must have atleast 3 letters</label>:null}
          
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
              <h4 class="modal-title">Delete Purpose</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">
                <form className="form-inline">
                <div className="row">
                
        <label className="align-middle">Are you sure you want to delete this Purpose?</label>
                
                
              
                
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
    purposes: state.purposeList,
  };
};
const mapActionsToProps = (dispatch) => {
  return {
    getPurposes: () => {
      dispatch(Actions.getPurposes());
    },
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Purpose);
