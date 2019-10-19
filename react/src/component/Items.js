import React from "react"
import {Link} from "react-router-dom"
import styles from './Items.module.css'
const Items = props=>{



  return  <li>

          <div>
          <img src='#'/>
          </div>
          <div>{props.name}</div>
          <div> {props.address}</div>
          <div>Type: {props.type}</div>
          <div>Connectors{props.connectors}</div>
          </li>

}
export default Items;
