import React from 'react';
import './EventCard.css';

function EventCard(props){
  return(
  <div className="CardLight">
    <div className="pictureCardLight">
      <img className="photoCardProfil" src={props.place.local_photo} alt="profil du lieu touristique"></img>
      <button type="button" onClick="">{props.place.local_name}</button>  
    </div>
  </div>
  )
}

export default EventCard;