import React from 'react';
import './Display.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const deleteFormData = id => 
  axios.delete(`http://localhost:8000/api/places/${id}`)
    .then(response => {
      (response.status === 200) && (alert("le lieu est supprimé !"))
    })

function DeletionOfplaces({id, name}){
  let history=useHistory()
  return(
  <div id="ListOfVacationers">
    <div id="ProfilVacationer">
      <p className="nameVac">ID:{id} {name}</p>
    </div>
    <button id="buttonEdit" type="button" onClick={event=> { event.preventDefault(); history.push(`/modifplace/${id}`) }} href={`/modifplace/${id}`}></button>
    <button id="buttonDelete" type="button" onClick={() => deleteFormData(id)} value='Supprimer'/>   
  </div>
  )
}

export default DeletionOfplaces;


