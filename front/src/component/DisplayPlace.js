import React from 'react';
import './Display.css';
import './Nicebutton.css'

function DisplayPlace(props){

  let url = 'http://via.placeholder.com/100x80'
  if (props.place.local_photo) {
    url = props.place.local_photo;
  if (!url.startsWith('http')) {
    url = `http://localhost:8000/${props.place.local_photo}`;
  }}

  let imgValues = {
    src: url,
    alt: 'profil du vacancier'
  }

  return(
  <div id="pagePlace">
    <div id="ProfilPlace">
    <img className="photoProfil" src={imgValues.src} alt={imgValues.alt} ></img>
    </div>
    <h2 className="titreProfil">{props.place.local_name}</h2>
    <div className="desc">
      <p>{props.place.local_description}</p>
    </div>
    <div id="phonePres">
    {props.place.local_phone===null||<img className="logo" src='https://zupimages.net/up/19/49/m5nc.png' alt="logo tél"></img>}
    {props.place.local_phone===null||<p>{props.place.local_phone}</p>}
    </div>
    <button className='buttonNextVacationer'  type="button" onClick={props.nextPlace}>Suivant</button>
  </div>
  )
}

export default DisplayPlace;


