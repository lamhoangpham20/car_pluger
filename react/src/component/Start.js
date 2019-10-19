import React from "react"
import { Redirect, Route } from "react-router-dom";
export default function Start(props)
{
  if(props.isAuthenticated)
  {
  return(
    <div>
    <button onClick={() => props.history.goBack()}>Back</button>
    <button onClick={props.start}>Start</button>
    <button onClick={props.stop}>Stop</button>
    <div>{props.money}</div>
    </div>
  )
}
else{
  alert('You need to login');
  return(
    <React.Fragment><Redirect to='/' /></React.Fragment>
)
}
}
