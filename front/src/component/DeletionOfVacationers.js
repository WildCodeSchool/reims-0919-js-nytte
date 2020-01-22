import React from 'react';
import './Display.css';
import axios from 'axios'

const deleteFormData = id => 
  axios.delete(`http://localhost:8000/api/vacationers/${id}`)
    .then(response => {
      (response.status === 200) && (alert("le compte Vacancier est supprimé !"))
    })

function DeleteOfVacationers({id, lastname, firstname, zip, city}){
  return(
  <div id="ListOfVacationers">
    <div id="ProfilVacationer">
      <p className="nameVac">ID:{id} {firstname} {lastname}</p>
    </div>
    <div className="adresseVac">
      <p>{city}</p>
    </div>
    <button id="buttonEye" type="button"></button>
    <button id="buttonEdit" type="button"></button>
    <button id="buttonDelete" type="button" onClick={deleteFormData} type='submit' value='Supprimer'> </button>  
  </div>
  )
}

export default DeleteOfVacationers;
