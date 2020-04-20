import React, { Component } from "react";
import logo from "./logo.svg";
import Control from "./control";
import Navbar from "./navbar/Navbar";
import Search from "./search";
import Carousal from "./carousal";
import {Switch,Route} from 'react-router-dom'
import Mastertest from './Mastertest'
import Locations from "./Masters/Locations";
import Slots from "./Masters/Slots";
import Purpose from "./Masters/Purpose";
import Turfs from "./Masters/Turfs";
import * as Actions from './Actions'
import {connect} from 'react-redux'
import signup from "./Signup/signup";




class App extends Component {
  state = {
    click: false,
  };
  componentDidMount (){
    this.props.getLocations()
    this.props.getPurposes()
    this.props.getSlots()

  }
  onSetSidebarOpen = () => {
    this.setState({ click: !this.state.click });
  };
  render() {
    return (
      <div>
        <Navbar sideBar={this.onSetSidebarOpen}></Navbar>

        <Control
          clicked={this.onSetSidebarOpen}
          curr={this.state.click}
        >
          <Switch>
          <Route  path='/Locations' component={Locations}></Route>
          <Route path='/Slots' component={Slots}></Route>
          <Route path='/Purposes' component={Purpose}></Route>
          <Route path='/Turfs' component={Turfs}></Route>
          <Route path="/signup" component={signup}></Route>
          </Switch>
        </Control>
        
      </div>
    );
  }
}
const mapPropsToActions=(dispatch)=>{
  return({
    getLocations: () => {
      dispatch(Actions.getLocations());
    },
    getPurposes: () => {
      dispatch(Actions.getPurposes());
    },
    getSlots:()=>{dispatch(Actions.getSlots())}
  })
}
export default connect(null,mapPropsToActions)(App);
