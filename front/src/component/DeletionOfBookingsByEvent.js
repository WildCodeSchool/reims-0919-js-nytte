import React from 'react';
import './Display.css';
import axios from 'axios'

const deleteFormData = id => 
  axios.delete(`http://localhost:8000/api/event/bookings/${id}`)
    .then(response => {
      (response.status === 200) && (alert("la réservation est supprimée !"))
    })

function DeleteOfBookingsByEvent({date, time, name, id}){
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
    <button id="buttonEye" type="button"></button>
    <button id="buttonEdit" type="button"></button>
    <button id="buttonDelete" type="button" onClick={() => deleteFormData(id)} value='Supprimer'> </button>  
  </div>
  )
}

export default DeleteOfBookingsByEvent;