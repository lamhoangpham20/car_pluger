import React from "react"
export default function Digit(props)
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
