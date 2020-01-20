import React from 'react';
import './Display.css';
import { Link } from 'react-router-dom'

function ListOfVacationers(id, lastname, firstname, zip, city){
  return(
  <div id="ListOfVacationers">
    <div id="ProfilVacationer">
      <h2 className="titreProfil">{firstname} {lastname}</h2>
    </div>
    <div className="adressePres">
      <p>{zip} {city}</p>
    </div>
    <button type="button">X</button>  
  </div>
  )
}

export default ListOfVacationers;