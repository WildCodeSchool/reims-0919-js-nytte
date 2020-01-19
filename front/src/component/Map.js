import React from 'react';
import './EventCard.css';


function Map({map}){
  return(
    <div className="Map">
      <img className="planCamping" src={map} alt="Plan du lieu"></img>
    </div>
  )
}

export default Map;