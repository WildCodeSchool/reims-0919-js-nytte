import React from 'react';
import './Display.css';

function DisplayVacationer(props){
  return(
  <div id="pageVacationer">
    <div id="ProfilVacationer">
      <img className="photoProfilVac" src={props.vacationer.tourist_photo} alt="profil du vacancier"></img>
      <h2 className="titreProfil">{props.vacationer.tourist_firstname} {props.vacationer.tourist_lastname}</h2>
    </div>
    <div className="adressePres">
      <p>{props.vacationer.tourist_address1} {props.vacationer.tourist_zip} {props.vacationer.tourist_city}</p>
    </div>
    <div className="desc">
      <p>{props.vacationer.birthday}</p>
    </div>
    <div id="phonePres">
      <img className="logo" src='https://zupimages.net/up/19/49/m5nc.png' alt="logo tél"></img>
      <p>{props.vacationer.tourist_phone}</p>
    </div>
    <div id="mailPres">
      <img className="logo" src='https://zupimages.net/up/19/49/jijs.png' alt="logo email"></img>
      <p>{props.vacationer.tourist_email}</p>
    </div>
  </div>
  )
}

export default DisplayVacationer;


