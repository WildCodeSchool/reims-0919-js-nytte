import React from 'react';
import './Display.css';
import axios from 'axios'
import {useHistory} from 'react-router-dom';

const deleteFormData = id => 
  axios.delete(`http://localhost:8000/api/happenings/${id}`)
    .then(response => {
      (response.status === 200) && (alert("l'évènement est supprimé !"))
    })

function DeletionOfEvents({id, title, date, time}){
  let history=useHistory()
  return(
  <div id="ListOfVacationers">
    <div id="ProfilVacationer">
      {title===title.slice(0,20)
      ?<p className="nameVac">{id}-{title}</p>
      :<p className="nameVac">{id}-{title.slice(0,20)}...</p>}
      
    </div>
    <div className="adresseVac">
      <p>{date.slice(8,10)}/{date.slice(5,7)}/{date.slice(2,4)} {time.slice(0,5)}</p>
    </div>
    <button id="buttonDelete" type="button" onClick={() => deleteFormData(id)} value='Supprimer'> </button>  
  </div>
  )
}

export default DeletionOfEvents;
