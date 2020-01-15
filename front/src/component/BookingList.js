import React from 'react';
import './EventCard.css';
import {useHistory} from 'react-router-dom';

function BookingList({id,date,time,name,bookable,booked,free}){
  let history=useHistory()
  return(
    <div className="BookingList">
      <a className="nameButton" onClick={event=> { event.preventDefault(); history.push(`/events/${id}`) }} href={`/events/${id}`}>
          {name} &rsaquo;</a>
      <div className="horodateur">
        <p>Date : {date.slice(0,10)}</p>
        <p>Heure : {time.slice(0,5)}</p>
      </div>  
      <div className="bookTable">
        <p>Capacité : {bookable}</p>
        <p>Places réservées : {booked}</p>
        <p>Places disponibles : {free}</p>
      </div>
    </div>
  )
}

export default BookingList;