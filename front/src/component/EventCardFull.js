import React from 'react';
import './EventCard.css';

function EventCardFull({photo, title, category,description,date,time,endTime, isItBookable}){
  console.log(isItBookable)
  return(
  <div className="CardFull">
    <div className="pictureCardFull">
      <h1>{category.toUpperCase()}</h1>
      <img className="photoCardFull" src={photo} alt="profil du lieu touristique"></img>
    </div>
    <div className="CardTextDescription">
      <h2>{title}</h2>
      <p>{description}</p>
      {date===null
        ?""
        :<p>Date : {date.slice(0,10)} </p>}
      {endTime===null
        ?<p>à {time.slice(0,5)}</p>
        :<p> Horaires : {time.slice(0,5)} - {endTime.slice(0,5)}</p>}
      {isItBookable
        ?<>
        <p>Pour réserver, merci de vous rendre à l'accueil ou cliquer sur le bouton :</p>
        <div className="fullCardButton">
          <button className="BookButton" type="button">RESERVER</button>
          <button className="MapButton" type="button">Y ALLER</button>
        </div>
        </>
        :<div className="fullCardButton">
          <button className="MapButton" type="button">Y ALLER</button>
        </div>
        }
        
        
    </div>
  </div>
  )
}

export default EventCardFull;