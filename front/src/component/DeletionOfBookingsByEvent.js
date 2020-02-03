import React from 'react';
import './Display.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const deleteFormData = id => 
  axios.delete(`http://localhost:8000/api/event/bookings/${id}`)
    .then(response => {
      (response.status === 200) && (alert("la réservation est supprimée !"))
    })

function DeleteOfBookingsByEvent({date, time, name, id}){
  let history=useHistory()
  return(
  <div id="ListOfVacationers">
    <div id="ProfilVacationer">
    {name===name.slice(0,20)
      ?<p className="nameVac">{id}-{name}</p>
      :<p className="nameVac">{id}-{name.slice(0,20)}...</p>}
    </div>
    <div className="adresseVac">
      <p>{date.slice(8,10)}/{date.slice(5,7)}/{date.slice(2,4)} {time.slice(0,5)}</p>
    </div>
    <button id="buttonEye" type="button" onClick={event=> { event.preventDefault(); history.push(`/bookings/${id}`) }} href={`/bookings/${id}`}></button>
    <button id="buttonDelete" type="button" onClick={() => deleteFormData(id)} value='Supprimer'> </button>  
  </div>
  )
}

export default DeleteOfBookingsByEvent;