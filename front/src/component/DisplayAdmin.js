import React from 'react';
import './Display.css';

function DisplayAdmin(props){
  return(
  <div id="pagePrinc">
    <div id="photoDeProfil">
      <img className="photoProfil" src={props.camping.photo} alt="profil de l'établissement touristique"></img>
    </div>
    <h2 className="titreProfil">{props.camping.company.toUpperCase()}</h2>
    <div className="adressePres">
      <p>{props.camping.address1} {props.camping.zip} {props.camping.city}</p>
    </div>
    <div id="phonePres">
      <img className="logo" src='https://zupimages.net/up/19/49/m5nc.png' alt="logo tél"></img>
      <p>{props.camping.phone_company}</p>
    </div>
    <div id="responsablePres">
      <img className="logo" src='https://zupimages.net/up/19/49/xfg1.png' alt="logo resp"></img>
      <p>Responsable : {props.camping.firstname} {props.camping.lastname}</p>
    </div>
    <div id="mailPres">
      <img className="logo" src='https://zupimages.net/up/19/49/jijs.png' alt="logo email"></img>
      <p>{props.camping.email}</p>
    </div>
    <p>{props.camping.description_company}</p>
  </div>
  )
}

export default DisplayAdmin;


