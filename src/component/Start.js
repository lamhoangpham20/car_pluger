import React from "react"
export default function Start(props)
{
  return(
    <div>
    <button onClick={() => props.history.goBack()}>Back</button>
    <button onClick={props.start}>Start</button>
    <button onClick={props.stop}>Stop</button>
    </div>
  )

}
