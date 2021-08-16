import React from "react";
import {connect} from "react-redux";
import axios from "axios";

const Test=({x,y,addd,update})=>{
    const clickadd =()=>{
        update(x)
        console.log(y);
    } 
    
    const clickadd2 =()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((result)=>{
            update(result.data)
        console.log(result.data)})
        
    } 


  return(<>
  <h2>hi{x} test</h2>

  <button onClick={()=>{clickadd2()}}>Api data</button>
  <button onClick={addd}>inc</button>
  <button onClick={()=>{clickadd()}}>push</button>
  {y.map((x,i)=>(<li key={i}>{x}</li>))}  </>)
}
const newfun=()=>{
    return(dispatch)=>{
        dispatch({type:"add"})
    }
}
const dtataget=(state)=>{
    return {
        x: state.addcount,
        y:state.minuscount
    }
}
const dispatchfun =(dispatch)=>{
    return {
        addd:()=>{
            dispatch(newfun()) 
        },
        update:(data)=>{
            dispatch({type:"counterAdd",value:data})
        }
    }
}
export default connect(dtataget,dispatchfun)(Test);