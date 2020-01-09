import React from 'react';
import './EventCard.css';

function EventCardFull({photo, category,description,date,time}){
  return(
  <div className="CardFull">
    <div className="pictureCardFull">
      <h1>{category.toUpperCase()}</h1>
      <img className="photoCardFull" src={photo} alt="profil du lieu touristique"></img>
    </div>
    <div className="CardTextDescription">
      <p>{description}</p>
      <p>Date : {date.slice(0,10)} </p>
      <p>Heure : {time.slice(0,5)}</p>
      <p>Pour réserver, merci de vous rendre à l'accueil ou cliquer sur le bouton :</p>
    </div>
    <div className="fullCardButton">
      <button className="BookButton" type="button" onClick="">RESERVER</button>
      <button className="MapButton" type="button" onClick="">S'Y RENDRE</button>
    </div>
  </div>
  )
}

export default EventCardFull;