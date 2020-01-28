import React from 'react';
import './Display.css';
import axios from 'axios'
import {useHistory} from 'react-router-dom';

const deleteFormData = (idtourist,idevent) => 
  axios.delete(`http://localhost:8000/api/bookings/tourist/${idtourist}/${idevent}`)
    .then(response => {
      (response.status === 200) && (alert("la réservation est supprimée !"))
    })

function DeletionOfBookingsByTourist({date, time, name, idtourist,idevent}){
  let history=useHistory()
  return(
  <div id="ListOfVacationers">
    <div id="ProfilVacationer">
    {name===name.slice(0,25)
      ?<p className="nameVac">{name}</p>
      :<p className="nameVac">{name.slice(0,25)}...</p>}
    </div>
    <div className="adresseVac">
      <p>{date.slice(8,10)}/{date.slice(5,7)}/{date.slice(2,4)} {time.slice(0,5)}</p>
    </div>
    <button id="buttonEye" type="button" onClick={event=> { event.preventDefault(); history.push(`/events/${idevent}`) }} href={`/events/${idevent}`}></button>
    <button id="buttonDelete" type="button" onClick={() => deleteFormData(idtourist,idevent)}></button>  
  </div>
  )
}

export default DeletionOfBookingsByTourist;
