import React,{Component} from 'react'
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import Axios from 'axios'
import * as Actions from '../Actions'
import {connect} from 'react-redux'
import { MDBDataTable } from "mdbreact";
import { Button } from "@material-ui/core";

class Slots extends  Component {
state={
    slot:[],
    slotList:[],
    row:[],
    delSlot:{},
    delSlotStart:"",
    delSlotEnd:""

}
Cols = [
    {
      label: "Slots (24Hr) ",
      field: "Slot",
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

componentDidMount=()=>{
    this.props.getSlots()
    
    
    // console.log(this.props.slots)
}
componentDidUpdate=()=>{
    
    if(this.props.slots!==this.state.slotList){
        this.setState({slotList:this.props.slots})
        this.populate()
    }
}
populate=()=>{
    console.log(this.props.slots)
    let Row=[]
    
    this.props.slots.map((obj)=>{
        let row={
            Slot:'',
           
            Delete:''
        }
        row.Slot=obj.Slot[0]+" - "+obj.Slot[1]
        // row.Edit=<button>EDIT</button>
        row.Delete=<Button data-toggle="modal"
        data-target="#myModal" onClick={()=>{this.delHandler(obj)}}>DELETE</Button>
        Row.push(row)
    })

    this.setState({row:Row})

}
delHandler=(obj)=>{
    this.setState({delSlot:obj,delSlotStart:obj.Slot[0],delSlotEnd:obj.Slot[1]})

}
delSlot=async()=>{
    let res=await Axios.post("http://localhost:3001/master/slot/del",this.state.delSlot)
    this.props.getSlots()
    this.setState({delSlot:{},delSlotStart:"",delSlotEnd:""})
}
changeHandler=(time)=>{
    this.setState({slot:time})

}
submitHandler=async(event)=>{
    try{
    event.preventDefault()
    let obj={Slot:this.state.slot}
let res=await Axios.post("http://localhost:3001/master/slot/new",obj)
if(res.status===200){
    
    this.props.getSlots()
    this.setState({slot:[]})
    alert("New Slot added.")

}
else{
    alert(res)
}
}
catch(err){
    alert(err) 
}
}
render(){
    console.log(this.state.slot)
    return(
        <div className="container">
            <h1>Slots Master</h1>
            <hr></hr>
            <form className="form-inline">
            <label>Slot Time &nbsp;</label>
            <TimeRangePicker disableClock={true} onChange={this.changeHandler} value={this.state.slot}></TimeRangePicker>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {this.state.slot[0]===undefined || this.state.slot[1]===undefined ?<button disabled className="btn btn-success">ADD SLOT</button>:<button onClick={this.submitHandler} className="btn btn-success">ADD SLOT</button>}
            </form>
            <hr></hr>
            <MDBDataTable
          striped
          bordered
          hover
          data={{ columns: this.Cols, rows: this.state.row }}
        />
        <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title">Delete Slot</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">
                <form className="form-inline">
                <div className="row">
                
            <label className="align-middle">{"Are you sure you want to delete the slot "+  this.state.delSlotStart + " - "+this.state.delSlotEnd    }</label>
                </div>
                
                </form>
            </div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-success"  data-dismiss="modal" onClick={this.delSlot}>
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>


            


        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
      slots: state.slotList,
    };
  };
const mapPropsToActions=(dispatch)=>{
    return({
        getSlots:()=>{dispatch(Actions.getSlots())}
    })
}

export default connect(mapStateToProps,mapPropsToActions)(Slots)