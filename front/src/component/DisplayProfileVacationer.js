import React from 'react';
import './Display.css';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function DisplayProfileVacationer({id,firstname,lastname,city,zip,address,birthday,photo,phone,email}){
  let history=useHistory()
  return(
  <div id="pageVacationer">
    <button className='arrowBack'>
      <Link className='arrowBackLink' to='/displayadmin'>&lsaquo;</Link>
    </button>
    <div id="ProfilVacationer">
      <img className="photoProfilVac" src={photo} alt="photo de profil" />
      <h2 className="titreProfil">{firstname} {lastname}</h2>
    </div>
    <div className="adressePres">
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
    <p>Mes réservations</p>
    <a className="logoBook" onClick={event=> { event.preventDefault(); history.push(`/tourist/delete/${id}`) }} href={`/tourist/delete/${id}`}/>
    </div>
  )
}

export default DisplayProfileVacationer;




