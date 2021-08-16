import React, {useState} from "react";
import './App.css';
import Test from "./Test"
import * as redux from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {reducer as formReucer} from "redux-form";
import Form from "./form"
import {Switch, BrowserRouter as Router,Route} from "react-router-dom"

function App() {
  const counterAdd= "add";
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
  const pushreduser = redux.combineReducers(
    {
      addcount:reducer,
      minuscount:pushreducer,
      form:formReucer
    }
)
  const store = redux.createStore(pushreduser, redux.applyMiddleware(thunk))
  const add=()=>{
    store.dispatch({type:counterAdd})
    store.dispatch({type:"counterAdd",value:4})

    console.log(store.getState());
  }
  return (
    <Provider store={store}>
      <br/>
      <br/>
      <br/>
        <button onClick={()=>{add()}}>add</button>
        <Router>

                <Switch>
                  <Route exact path="/form">
                  <Form/>
                  </Route>
                  <Route exact path="/test">
                  <Test/>
                  </Route>
                </Switch>

            </Router>
     </Provider>

  );
}

export default App;
