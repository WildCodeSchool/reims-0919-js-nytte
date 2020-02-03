import React from 'react';
import './EventCard.css';


function Map({map}){
  return(
    <div>
    {/* <div className="pictureCardBar">
      <h1>Plan</h1>
    </div>   */}
    <div className="Map">
      <img className="planCamping" src={map} alt="Plan du lieu"></img>
    </div>
    </div>
  )
}

export default Map;