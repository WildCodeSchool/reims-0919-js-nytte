import React from 'react';
import './EventCard.css';

function EventCard({photo, category}){
  return(
  <div className="CardLight">
    <div className="pictureCardLight">
      <img className="photoCardProfil" src={photo} alt="profil du lieu touristique"></img>
      <button type="button" onClick="">{category}</button>  
    </div>
  </div>
  )
}

export default EventCard;