import React from 'react';
import './EventCard.css';

function EventCard({photo, category}){
  console.log(photo)
  return(
  <div className="CardLight">
    <div className="pictureCardLight">
      {!photo
        ?<img className="photoCardProfil" src='https://cutt.ly/JrieTtL' alt="image lieu par défaut" />
        :<img className="photoCardProfil" src={photo} alt="profil du lieu touristique" />}
      <button type="button" onClick="">{category.toUpperCase()}&rsaquo;</button>  
    </div>
  </div>
  )
}

export default EventCard;