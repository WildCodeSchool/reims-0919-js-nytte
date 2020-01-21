import React from 'react';
import './EventCard.css';
import {useHistory} from 'react-router-dom';

function EventCard({id, title, photo, category, date, endDate, time, endTime, isItBookable}){
  let history=useHistory()

  let imgValues = {
    src: 'https://cutt.ly/JrieTtL',
    alt: 'image lieu par défaut',
  }
  if (photo) {
    imgValues = {
      src: photo,
      alt: 'profil du lieu touristique',
    }
  }
  return(
  <div className="CardLight">
    <div className="pictureCardLight">
            
      <img className="photoCardProfil" src={imgValues.src} alt={imgValues.alt}/>
      <p className="titleOfEvent">{title}</p>
      <div className="flexCardButton">
        <a className="CardButton" onClick={event=> { event.preventDefault(); history.push(`/events/${id}`) }} href={`/events/${id}`}>
          {category.toUpperCase()}</a>
        <div className="viewDate">
          {date===null?"":
            <p>{date.slice(0,10)} </p>}
          {time===null?"":
            <p> à {time.slice(0,5)}</p>}
          {endTime===null?"":
            <p>{endTime.slice(0,5)}</p>}
        </div>
         {isItBookable ? <p className="viewBook">À réserver</p> : ""} 
          <div className="flèche">
          <a className="CardButtonF" onClick={event=> { event.preventDefault(); history.push(`/events/${id}`) }} href={`/events/${id}`}>&rsaquo;</a>
          </div>
      </div>
    </div>
  </div>
  )
}

export default EventCard;