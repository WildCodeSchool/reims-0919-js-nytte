import React from 'react';
import './Display.css';
import { Link } from 'react-router-dom'

function DisplayVacationer(props){
  let imgValues = {
    src: 'https://cutt.ly/JrieTtL',
    alt: 'image avatar par défaut',
  }
  if (props.vacationer.tourist_photo) {
    imgValues = {
      src: props.vacationer.tourist_photo,
      alt: 'profil du vacancier',
    }
  }
  return(
  <div id="pageVacationer">
    <button className='arrowBack'>
      <Link className='arrowBackLink' to='/displayadmin'>&lsaquo;</Link>
    </button>
    <div id="ProfilVacationer">
      <img className="photoProfilVac" src={imgValues.src} alt={imgValues.alt} />
      <h2 className="titreProfil">{props.vacationer.tourist_firstname} {props.vacationer.tourist_lastname}</h2>
    </div>
    <div className="adressePres">
      <p>{props.vacationer.tourist_address1} {props.vacationer.tourist_zip} {props.vacationer.tourist_city}</p>
    </div>
    <div className="desc">
      <p>{props.vacationer.birthday}</p>
    </div>
    <div id="phonePres">
      {props.vacationer.tourist_phone===null? "": 
        <img className="logo" src='https://zupimages.net/up/19/49/m5nc.png' alt="logo tél"></img>}
      {props.vacationer.tourist_phone==null? "": 
        <p>{props.vacationer.tourist_phone}</p>}
      

    </div>
    <div id="mailPres">
      {props.vacationer.tourist_email===null||<img className="logo" src='https://zupimages.net/up/19/49/jijs.png' alt="logo email"></img>}
      {props.vacationer.tourist_email===null||<p>{props.vacationer.tourist_email}</p>}
    </div>
  </div>
  )
}

export default DisplayVacationer;


