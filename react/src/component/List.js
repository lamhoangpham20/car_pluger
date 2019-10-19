import React from 'react';
import Items from './Items'
import styles from './List.module.css';
import {Link} from 'react-router-dom'
import MapContainer from './MapContainer'
import { Map, GoogleApiWrapper } from 'google-maps-react';

export default function List(props)
{
const plug=props.plug;
const show_plug = props.show_plug;
const marker=props.marker;
if(marker === null)
{
return(
  <div>
  <div id={styles.box}>
  <div><input type='text' name="search" onChange={props.newInput}/>
  <button onClick={props.search}>Search</button></div>
  <div><Link to={'/login'}><button>Login</button></Link></div>
  <div><Link to={'/register'}><button>Register</button></Link></div>
    <div><Link to={'/start'}><button>Start process</button></Link></div>
    <div><Link to={'/digit'}><button>Verify</button></Link></div>
    {props.searchPlug.map(i=><div><button onClick={()=>show_plug(i.id)}>{i.name}</button></div>)}
  </div>
  <div className={styles.map}>
  <MapContainer plug={plug} show_plug={props.show_plug} centerLat={props.centerLat} centerLng={props.centerLng}/>
  </div>
  </div>

)
}
else {
  return(
    <div>
    <div id={styles.box}>
    <div><input type='text' onChange={props.newInput}/>
    <button onClick={props.search}>Search</button></div>
    <div><Link to={'/login'}><button>Login</button></Link></div>
    <div><Link to={'/start'}><button>Start process</button></Link></div>
    <div><Link to={'/register'}><button>Register</button></Link></div>
    <div><Link to={'/digit'}><button>Verify</button></Link></div>
    <ul>
    <Items {...marker}/>
    </ul>
    </div>
    <div className={styles.map}>
    <MapContainer plug={plug} show_plug={props.show_plug} centerLat={props.centerLat} centerLng={props.centerLng}/>
    </div>
    </div>
  );

}
}
