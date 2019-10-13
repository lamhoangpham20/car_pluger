import React from 'react';
import Items from './Items'
import styles from './List.module.css'
import {Link} from 'react-router-dom'
import { Map, GoogleApiWrapper } from 'google-maps-react';
export default function List(props)
{
  const mapStyles = {
  width: '100%',
  height: '100%',
  };
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
  <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
  </div>

)
GoogleApiWrapper({
  apiKey: 'AIzaSyDL4YopF5CO1tvYxPhImg3p2ktm5zqeq58'
})(MapContainer);
}
