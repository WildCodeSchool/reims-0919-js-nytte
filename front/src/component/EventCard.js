import React from 'react';
import './EventCard.css';
import {useHistory} from 'react-router-dom';

function EventCard({id, title, photo, category, date, endDate, time, endTime, isItBookable}){
  let history=useHistory()

  let url = 'https://cutt.ly/JrieTtL'
  if (photo) {
    url = photo;
  if (!url.startsWith('http')) {
    url = `http://localhost:8000/${photo}`;
  }}

  let imgValues = {
    src: url,
    alt: "profil de l'évenement"
  }

  return(
  <div onClick={event=> { event.preventDefault(); history.push(`/events/${id}`) }} className="CardLight">
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
          </div>
      </div>
    </div>
  </div>
  )
}

export default EventCard;