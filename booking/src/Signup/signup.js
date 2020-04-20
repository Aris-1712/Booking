import React, { Component } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

class signup extends Component {
    state={
        Email:"",
        Password:"",
        ConfirmPassword:"",
        ContactName:"",
        ContactN:""
    }
    changeHandler=(event,obj)=>{
        let val=event.target.value
        if(obj==="Email"){
            
            this.setState({Email:val})
        }
        if(obj==="Password"){
            this.setState({Password:val})
        }
        if(obj==="ConfirmPassword"){
            this.setState({ConfirmPassword:val})
        }
        if(obj==="ContactName"){
            this.setState({ContactName:val})
        }if(obj==="Number")
        {
            this.setState({ContactN:event})

        }

    }
  render() {
    return (
      <div className="container">
        
          <div class="form-group">
            <label for="email">Email address:</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              id="email"
              onChange={(event)=>{this.changeHandler(event,"Email")}}
            ></input>
            {/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.Email)
            || this.state.Email===""?
            null:<label style={{color:"red"}}>Enter a proper Email address</label>}
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter email"
              id="email"
              onChange={(event)=>{this.changeHandler(event,"Password")}}
            ></input>
          </div>
          <div class="form-group">
            <label for="email">Confirm Password:</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter Password"
              id="email"
              onChange={(event)=>{this.changeHandler(event,"ConfirmPassword")}}
            ></input>
            {this.state.ConfirmPassword!==this.state.Password?<label style={{color:"red"}}>Passwords dont match</label>:null}
          </div>
          <div class="form-group">
            <label for="email">Contact Person:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
              id="email"
              onChange={(event)=>{this.changeHandler(event,"ContactName")}}
            ></input>
          </div>
          <div class="form-group">
            <label for="email">Contact Number:</label>
            <PhoneInput
              placeholder="Enter phone number"
              value={this.state.ContactN}
              onChange={(event)=>{this.changeHandler(event,"Number")}}
            />
          </div>
        
      </div>
    );
  }
}

export default signup;
