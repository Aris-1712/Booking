import React,{Component,useState} from 'react'
import Sidebar from "react-sidebar";
import { MDBDropdownMenu } from 'mdbreact';
// import {} from 'md'
const Control=(props)=>{ 
    // console.log(props.clicked)
    let sidebar=(
        <div>
        <p>Hello</p>
        <label>Hi</label>
        </div>)
    
    
   
        return (  <Sidebar
            sidebar={sidebar}
            open={props.curr}
            onSetOpen={props.clicked}
            docked={false}
            styles={{root:{top:"56px"}, sidebar: { background: "black",top:"0px",width:'200px'} ,content:{top:"28px"} ,overlay:{top:"56px",display:false} }}
          > {props.children}
          </Sidebar>
        );
      }


export default Control