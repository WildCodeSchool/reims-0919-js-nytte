import React from 'react';
import './DisplayAdmin.css';

function DisplayAdmin(props){
  return(
  <div id="pagePrinc">
     <h2 className="titreProfil">{props.camping.company}</h2>
    <p>{props.camping.firstname} {props.camping.lastname}</p>
    <p>{props.camping.address1}</p>
    <p>{props.camping.zip} {props.camping.city}</p>
    <p>{props.camping.phone_company}</p>
    <p>{props.camping.description_company}</p>
    <img className="photoProfil" src={props.camping.photo} alt="photo de profil de l'établissement touristique"></img>
  </div>
  )
}

export default DisplayAdmin;


