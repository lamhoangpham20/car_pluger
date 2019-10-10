import React from 'react';
import Items from './Items'
import styles from './List.module.css'
const List = props => {
return(
  <div>

    <input type='text' onChange={props.newInput}/>
    <div><button>Start process</button></div>
    <ul>
    {props.plug.filter(i => i.address.toUpperCase().includes(props.textInput.toUpperCase())).map(i =>

      <div key={ i.id }><Items {...i} key={ i.id }/></div>)}

  </ul>
  </div>
)
}


export default List
