import React from 'react';
import './EventCard.css';
import {useHistory} from 'react-router-dom';

function EventCardForAdmin({id, title, photo, category, date, endDate, time, endTime, isItBookable}){
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
  <div onClick={event=> { event.preventDefault(); history.push(`/happens/${id}`) }} className="CardLight">
    <div className="pictureCardLight">
            
      <img className="photoCardProfil" src={imgValues.src} alt={imgValues.alt}/>
      <p className="titleOfEvent">{title}</p>
      <div className="flexCardButton">
        <a className="CardButton" onClick={event=> { event.preventDefault(); history.push(`/happens/${id}`) }} href={`/happens/${id}`}>
          {category.toUpperCase()}</a>
        <div className="viewDate">
          {date===null?"":
            <p>{date.slice(8,10)}/{date.slice(5,7)}/{date.slice(2,4)} </p>}
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

export default EventCardForAdmin;