import React from "react";
import {connect} from "react-redux";

const Test=({x})=>{
  return(<>hi{x}</>)
}
const dtataget=(state)=>{
    return {x: state.addcount}
}
const dispatchfun =(dispatch)=>{
    return {
        addd:()=>{
        dispatch({type:"add"})
    }}
}
export default connect(dtataget,dispatchfun)(Test);