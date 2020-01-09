import React from 'react';
import './EventCard.css';

function EventCardFull(props){
  return(
  <div className="CardFull">
    <div className="pictureCardLight">
      <h1>{props.event.happening_category}</h1>
      <img className="photoCardProfil" src={props.place.local_photo} alt="profil du lieu touristique"></img>
      <button type="button" onClick=""></button>  
    </div>
  </div>
  )
}

export default EventCardFull;