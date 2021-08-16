import React, {useState} from "react";
import './App.css';
import Test from "./Test"
import * as redux from "redux";
import {Provider} from "react-redux";

function App() {
  const counterAdd= "add";
  const [ricePlant, setRicePlant] = useState(0);
  const count=0
  
  const reducer =(state=count,action)=>{
    switch(action.type){
      case counterAdd:{
        return state+1
      break;
      }
      default:{
        return state
      }
    }
  }
  const pushreducer =(state=[],action)=>{
    switch(action.type){
      case "counterAdd":{
        const data=[...state]
        data.push(action.value)
        return data
      break;
      }
      default:{
        return state
      }
    }
  }
  const pushreduser =(state={},action)=>{
    return{
      addcount:reducer(state.addcount,action),
      minuscount:pushreducer(state.minuscount,action)
    }
  }
  const store = redux.createStore(pushreduser)
  const add=()=>{
    store.dispatch({type:counterAdd})
    store.dispatch({type:"counterAdd",value:4})

    console.log(store.getState());
  }
  return (
    <Provider store={store}>
      <Test/>
      <br/>
      <br/>
      <br/>
        <button onClick={()=>{add()}}>add</button>
     </Provider>

  );
}

export default App;
