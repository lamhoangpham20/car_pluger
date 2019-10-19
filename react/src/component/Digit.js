import React from "react"
import { Redirect, Route } from "react-router-dom";
export default function Digit(props)
{
  if(props.isAuthenticated)
  {
  return(
    <div>
    <button onClick={() => props.history.goBack()}>Back</button>
    <form onSubmit={ props.choosePlug }>
    <input type="text" name="digit"/>
    <button type="submit">Enter</button>
    </form>
    </div>
  )
}
else{
  return(
    <React.Fragment><Redirect to='/' /></React.Fragment>
)}

}
