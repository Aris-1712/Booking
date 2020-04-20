import React, { Component } from "react";
import { connect } from "react-redux";
import blank from "../empty.jpg";
import firebase from 'firebase'
import Axios from 'axios'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdbreact";
import { Button,CircularProgress } from "@material-ui/core";
import Storage from '../Firebase/index'

class Turfs extends Component {
  state = {
    Name: "",
    Location: "",
    Purpose: "",
    daySlot: {},
    imgList: {
      img1: blank,
      img2: blank,
      img3: blank,
      img4: blank,
      img5: blank,
    },
    progress:{
        img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
    }
  };
  initialState={
    Name: "",
    Location: "",
    Purpose: "",
    daySlot: {},
    imgList: {
      img1: blank,
      img2: blank,
      img3: blank,
      img4: blank,
      img5: blank,
    },
    progress:{
        img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
    }  
  }
submitHandler=async()=>{
    // this.state.Name!=="" && this.state.Location!=="" && this.state.Purpose!=="" && this.state.daySlot!=="" &&this.state.imgList!=="" 
    if( this.state.Name!=="" && this.state.Location!=="" && this.state.Purpose!=="" && this.state.daySlot!=="" &&this.state.imgList!==this.initialState.imgList ){
    let obj={ Name: this.state.Name,
    Location: this.state.Location,
    Purpose: this.state.Purpose,
    daySlot: this.state.daySlot,
    imgList:this.state.imgList
    }
    let res=await Axios.post("http://localhost:3001/master/turf/new",obj)
    if(res.status===200){
        alert("Turf uploded successfully")
        this.setState(this.initialState)
        window.location.reload()
    }
}
else{
    alert("Form has errors")
}

}   
  firebaseuploader=async(obj)=>{
    
    if(obj==='img1'){
        const uploadTask = 
        Storage.ref().child("images/" + this.state.imgList[obj].name+Math.random()).put(this.state.imgList[obj]);
           uploadTask.on(
            //  Storage.TaskEvent.STATE_CHANGED,
             firebase.storage.TaskEvent.STATE_CHANGED,
             snapshot => {
               const progress = (
                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                 console.log(`Progress: ${progress}%`);
                 this.setState({progress:{...this.state.progress, img1:progress}})
               if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                  console.log('file uploading...')
               }
                // ...etc
             },
             error => console.log(error.code),
             async () => {
               const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
               this.setState({imgList:{...this.state.imgList,img1:downloadURL}})
             // the web storage url for our file
             });

    }
    if(obj==='img2'){
        const uploadTask = 
        Storage.ref().child("images/" + this.state.imgList[obj].name+Math.random()).put(this.state.imgList[obj]);
           uploadTask.on(
            //  Storage.TaskEvent.STATE_CHANGED,
             firebase.storage.TaskEvent.STATE_CHANGED,
             snapshot => {
               const progress = (
                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                 console.log(`Progress: ${progress}%`);
                 this.setState({progress:{...this.state.progress, img2:progress}})
               if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                  console.log('file uploading...')
               }
                // ...etc
             },
             error => console.log(error.code),
             async () => {
               const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
               console.log(downloadURL);
               this.setState({imgList:{...this.state.imgList,img2:downloadURL}})
             // the web storage url for our file
             });

    }
    if(obj==='img3'){
        const uploadTask = 
        Storage.ref().child("images/" + this.state.imgList[obj].name+Math.random()).put(this.state.imgList[obj]);
           uploadTask.on(
            //  Storage.TaskEvent.STATE_CHANGED,
             firebase.storage.TaskEvent.STATE_CHANGED,
             snapshot => {
               const progress = (
                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                 console.log(`Progress: ${progress}%`);
                 this.setState({progress:{...this.state.progress, img3:progress}})
               if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                  console.log('file uploading...')
               }
                // ...etc
             },
             error => console.log(error.code),
             async () => {
               const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
               console.log(downloadURL);
               this.setState({imgList:{...this.state.imgList,img3:downloadURL}})
             // the web storage url for our file
             });

    }
    if(obj==='img4'){
        const uploadTask = 
        Storage.ref().child("images/" + this.state.imgList[obj].name+Math.random()).put(this.state.imgList[obj]);
           uploadTask.on(
            //  Storage.TaskEvent.STATE_CHANGED,
             firebase.storage.TaskEvent.STATE_CHANGED,
             snapshot => {
               const progress = (
                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                 console.log(`Progress: ${progress}%`);
                 this.setState({progress:{...this.state.progress, img4:progress}})
               if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                  console.log('file uploading...')
               }
                // ...etc
             },
             error => console.log(error.code),
             async () => {
               const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
               console.log(downloadURL);
               this.setState({imgList:{...this.state.imgList,img4:downloadURL}})
             // the web storage url for our file
             });

    }
    if(obj==='img5'){
        const uploadTask = 
        Storage.ref().child("images/" + this.state.imgList[obj].name+Math.random()).put(this.state.imgList[obj]);
           uploadTask.on(
            //  Storage.TaskEvent.STATE_CHANGED,
             firebase.storage.TaskEvent.STATE_CHANGED,
             snapshot => {
               const progress = (
                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                 console.log(`Progress: ${progress}%`);
                 this.setState({progress:{...this.state.progress, img5:progress}})
               if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                  console.log('file uploading...')
               }
                // ...etc
             },
             error => console.log(error.code),
             async () => {
               const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
               console.log(downloadURL);
               this.setState({imgList:{...this.state.imgList,img5:downloadURL}})
             // the web storage url for our file
             });

    }
 
  }
  changeHandler = (event, obj) => {
      console.log(obj)
    let val = event.target.value;
    if (obj === "NAME") {
      this.setState({ Name: val });
    }
    if (obj === "LOCATION") {
      this.setState({ Location: val });
    }
    if (obj === "PURPOSE") {
      this.setState({ Purpose: val });
    }
    if (obj === "img1") {
      this.setState({
        imgList: { ...this.state.imgList, img1: event.target.files[0] },
      });
    }
    if (obj === "img2") {
      this.setState({
        imgList: { ...this.state.imgList, img2: event.target.files[0] },
      });
    }
    if (obj === "img3") {
      this.setState({
        imgList: { ...this.state.imgList, img3: event.target.files[0] },
      });
    }
    if (obj === "img4") {
      this.setState({
        imgList: { ...this.state.imgList, img4: event.target.files[0] },
      });
    }
    if (obj === "img5") {
      this.setState({
        imgList: { ...this.state.imgList, img5: event.target.files[0] },
      });
    }
  };
  daySlot = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };

  slotChangeHandler = (event, day, slot) => {
    if (day === "Monday") {
      this.daySlot.Monday.push(slot._id);
      this.setState({ daySlot: this.daySlot });
    }
    if (day === "Tuesday") {
      this.daySlot.Tuesday.push(slot._id);
      this.setState({ daySlot: this.daySlot });
    }
    if (day === "Wednesday") {
      this.daySlot.Wednesday.push(slot._id);
      this.setState({ daySlot: this.daySlot });
    }
    if (day === "Thursday") {
      this.daySlot.Thursday.push(slot._id);
      this.setState({ daySlot: this.daySlot });
    }
    if (day === "Friday") {
      this.daySlot.Friday.push(slot._id);
      this.setState({ daySlot: this.daySlot });
    }
    if (day === "Saturday") {
      this.daySlot.Saturday.push(slot._id);
      this.setState({ daySlot: this.daySlot });
    }
    if (day === "Sunday") {
      this.daySlot.Sunday.push(slot._id);
      this.setState({ daySlot: this.daySlot });
    }
  };
  Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  render() {
      let keys=Object.keys(this.state.imgList)
    console.log(this.state);
    return (
      <div className="container">
        <h1>Turf Master</h1>
        <hr></hr>
        <form>
          <div class="form-group">
            <label>Turf Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
              onChange={(event) => {
                this.changeHandler(event, "NAME");
              }}
            ></input>
          </div>
          <div class="form-group">
            <label>Turf Location:</label>
            <select
              class="form-control"
              onChange={(event) => {
                this.changeHandler(event, "LOCATION");
              }}
            >
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              {this.props.locations.map((obj) => {
                return <option value={obj._id}>{obj.Name}</option>;
              })}
            </select>
          </div>
          <div class="form-group">
            <label>Turf Purpose:</label>
            <select
              class="form-control"
              onChange={(event) => {
                this.changeHandler(event, "PURPOSE");
              }}
            >
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              {this.props.purposes.map((obj) => {
                return <option value={obj._id}>{obj.Name}</option>;
              })}
            </select>
          </div>
          <div>
            <h4>Slot Selection</h4>

            {this.Days.map((day) => {
              return (
                <div>
                  <p style={{ fontWeight: "bold", marginBlockEnd: "0px" }}>
                    {day}
                  </p>
                  {this.props.slots.map((obj) => {
                    return (
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            onChange={(event) => {
                              this.slotChangeHandler(event, day, obj);
                            }}
                          ></input>
                          {obj.Slot.join(" - ")}
                        </label>
                      </div>
                    );
                  })}

                  <br></br>
                  <br></br>
                </div>
              );
            })}
          </div>
          <div>
            <h4>Upload Images</h4>
            <MDBRow>
              {
              keys.map((obj) => {
                // console.log(Object.keys(this.state.imgList));
                return (
                  <MDBCol>
                    <MDBCard style={{ width: "12rem" }}>
                      <MDBCardImage
                        className="img-fluid"
                        src={this.state.imgList[obj]}
                        waves
                      />
                      <MDBCardBody style={{ textAlign: "center" }}>
                        <MDBCardTitle></MDBCardTitle>
                        <MDBCardText>
                          {/* <label>CLICK TO SELECT</label> */}
                          <label
                            htmlFor={obj}
                            style={{ textAlign: "center" }}
                            
                          >
                            CLICK TO SELECT
                            <span>
                              <i class="fas fa-image fa-2x"></i>
                            </span>
                          </label>
                          <input
                            type="file"
                            id={obj}
                            name="myfile"
                            style={{ display: "none" }}
                            onChange={(event) => {console.log(obj)
                                this.changeHandler(event, obj);
                              }}
                          ></input>
                        </MDBCardText>
                        <Button onClick={()=>{this.firebaseuploader(obj)}}>UPLOAD IMAGE</Button>
                        <br></br>
                        <br></br>
                        {this.state.progress[obj]!==100?<CircularProgress variant="static" value={this.state.progress[obj]} />:<p>Uploaded Completed</p>}
                        
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                );
              })}
            </MDBRow>
          </div>
        </form>
        <br></br>
        <br></br>
        <div style={{textAlign:"center"}}>
        <Button variant="contained" color="secondary" style={{width:"25%"}} onClick={this.submitHandler}>SUBMIT</Button>
      </div>
      <br></br>
        <br></br><br></br>
        <br></br>
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    locations: state.locationList,
    slots: state.slotList,
    purposes: state.purposeList,
  };
};

export default connect(mapPropsToState)(Turfs);
