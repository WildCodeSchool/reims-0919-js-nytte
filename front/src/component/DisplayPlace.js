import React from 'react';
import './Display.css';

function DisplayPlace(props){
  return(
  <div id="pagePlace">
    <div id="ProfilPlace">
      <img className="photoProfil" src={props.place.local_photo} alt="profil du lieu touristique"></img>
    </div>
    <h2 className="titreProfil">{props.place.local_name}</h2>
    <div className="desc">
      <p>{props.place.local_description}</p>
    </div>
    <div id="phonePres">
    {props.place.local_phone===null||<img className="logo" src='https://zupimages.net/up/19/49/m5nc.png' alt="logo tél"></img>}
    {props.place.local_phone===null||<p>{props.place.local_phone}</p>}
    </div>
  </div>
  )
}

export default DisplayPlace;


