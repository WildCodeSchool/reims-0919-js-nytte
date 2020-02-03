import React from 'react';
import './Display.css';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function DisplayProfileVacationer({id,firstname,lastname,city,zip,address,birthday,photo,phone,email}){
  let history=useHistory()

  let url = 'https://cutt.ly/JrieTtL'
  if (photo) {
    url = photo;
  if (!url.startsWith('http')) {
    url = `http://localhost:8000/${photo}`;
  }}

  let imgValues = {
    src: url,
    alt: "photo de profil"
  }
  
  return(
  <div id="pageVacationer">
    <button className='arrowBack'>
      <Link className='arrowBackLink' to='/displayadmin'>&lsaquo;</Link>
    </button>
    <div id="ProfilVacationer">
      <img className="photoProfilVac" src={imgValues.src} alt={imgValues.alt} />
      <h2 className="titreProfil">{firstname} {lastname}</h2>
    </div>
    <div className='infoVacationer'>
    <div className="adressePres">
      <img src='https://zupimages.net/up/20/05/5keb.png'></img>
      <p>{address} {zip} {city}</p>
    </div>
    <div className="desc">
      <p>{birthday}</p>
    </div>
    <div id="phonePres">
      {phone===null? "": 
        <img className="logo" src='https://zupimages.net/up/19/49/m5nc.png' alt="logo tél"></img>}
      {phone==null? "": 
        <p>{phone}</p>}
    </div>
    <div id="mailPres">
      {email===null||<img className="logo" src='https://zupimages.net/up/19/49/jijs.png' alt="logo email"></img>}
      {email===null||<p>{email}</p>}
    </div>

    <div className='resaVacationer'>
    <a onClick={event=> { event.preventDefault(); history.push(`/bookings/tourist`) }} href={`/bookings/tourist`}>
      <img className='logoResa' src='https://zupimages.net/up/20/04/suev.png'/></a>
    <p id="myBook">Mes réservations</p>
    </div>
    </div>
    </div>
  )
}

export default DisplayProfileVacationer;




