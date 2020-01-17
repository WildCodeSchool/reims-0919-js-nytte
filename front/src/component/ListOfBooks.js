import React from 'react';
import './EventCard.css';
import {useHistory} from 'react-router-dom';

function ListOfBooks({eventid,date,time,name,lastname}){
  let history=useHistory()
  return(
    <div className="BookingList">
      <p>{name}</p>
      <div className="horodateur">
        <p>Date : {date.slice(0,10)}</p>
        <p>Heure : {time.slice(0,5)}</p>
      </div>  
      <div className="bookTable">
        <p>Nom : {lastname}</p>
      </div>
    </div>
  )
}

export default ListOfBooks;