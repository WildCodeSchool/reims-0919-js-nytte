import React from 'react';
import './Display.css';
import { Link } from 'react-router-dom'

function DisplayPlace(props){
  let url = props.place.local_photo;
  if (!url.startsWith('http')) {
    url = `http://localhost:8000/${props.place.local_photo}`;
  }
  return(
  <div id="pagePlace">
    <button className='arrowBack'>
      <Link className='arrowBackLink' to='/displayadmin'>&lsaquo;</Link>
    </button>
    <div id="ProfilPlace">
    <img className="photoProfil" src={url} alt="profil du lieu touristique"></img>
    </div>
    <h2 className="titreProfil">{props.place.local_name}</h2>
    <div className="desc">
      <p>{props.place.local_description}</p>
    </div>
    <div id="phonePres">
    {props.place.local_phone===null||<img className="logo" src='https://zupimages.net/up/19/49/m5nc.png' alt="logo tél"></img>}
    {props.place.local_phone===null||<p>{props.place.local_phone}</p>}
    </div>
    <button  type="button" onClick={props.nextPlace}>Suivant</button>
  </div>
  )
}

export default DisplayPlace;


