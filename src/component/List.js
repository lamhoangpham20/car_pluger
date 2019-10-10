import React from 'react';
import Items from './Items'
import styles from './List.module.css'
import {Link} from 'react-router-dom'
const List = props => {
return(
  <div>
<button onClick={() => props.history.goBack()}>Back</button>
    <input type='text' onChange={props.newInput}/>
    <div><Link to={'/start'}><button>Start process</button></Link></div>
    <div><Link to={'/digit'}><button>Start process</button></Link></div>
    <ul>
    {props.plug.filter(i => i.address.toUpperCase().includes(props.textInput.toUpperCase())).map(i =>

      <div key={ i.id }><Items {...i} key={ i.id }/></div>)}

  </ul>
  <div id="map" className="map"></div>
  </div>

)
}


export default List
