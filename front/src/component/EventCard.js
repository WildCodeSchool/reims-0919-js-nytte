import React from 'react';
import './EventCard.css';
import {useHistory} from 'react-router-dom';

function EventCard({id, photo, category, date, endDate, time, endTime}){
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
      <img className="photoCardProfil" src={imgValues.src} alt={imgValues.alt} />
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
          <div className="flèche">
            &rsaquo;
          </div>
      </div>
    </div>
  </div>
  )
}

export default EventCard;