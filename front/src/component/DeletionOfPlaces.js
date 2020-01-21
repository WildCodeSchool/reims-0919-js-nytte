import React from 'react';
import './Display.css';
import axios from 'axios'

const deleteFormData = id => 
  axios.delete(`http://localhost:8000/api/places/${id}`)
    .then(response => {
      (response.status === 200) && (alert("le lieu est supprimé !"))
    })

function DeletionOfplaces({id, name, }){
  return(
  <div id="ListOfVacationers">
    <div id="ProfilVacationer">
      <p className="nameVac">ID:{id} {name}</p>
    </div>
    <button id="buttonDelete" type="button" onClick={deleteFormData} type='submit' value='Supprimer'> </button>  
  </div>
  )
}

export default DeletionOfplaces;
