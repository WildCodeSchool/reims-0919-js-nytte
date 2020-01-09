import React from 'react';
import './EventCard.css';
import {Link}from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function EventCard({photo, category}){
  let history=useHistory()
  return(
  <div className="CardLight">
    <div className="pictureCardLight">
      {!photo
        ?<img className="photoCardProfil" src='https://cutt.ly/JrieTtL' alt="image lieu par défaut" />
        :<img className="photoCardProfil" src={photo} alt="profil du lieu touristique" />}
      <div className="flexCardButton">
        <button className="CardButton" type="button" onClick={event=>history.push("/eventfull")}>
          {category.toUpperCase()}</button>
          <div className="flèche">
          &rsaquo;
          </div>
          
      </div>
    </div>
  </div>
  )
}

export default EventCard;