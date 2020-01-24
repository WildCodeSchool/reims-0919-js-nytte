import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom";
import './Sidebar.css'

function Sidebar(props){
  if (props.isAdmin === false) {
    return(
      <Menu className="sideBar">
        <Link className="menu-item-bar-actu" to="/displayadmin">
          Accueil
        </Link>
        <Link className="menu-item-bar-actu" to="/place">
          Lieux
        </Link>
        <Link className="menu-item-bar-actu" to="/profilevacationer">
          Mon profil
        </Link>
          <Link className="menu-item-bar-actu" to="/events">
          Fil d'actu
        </Link>
        <Link className="menu-item-bar-actu" to="/bookings/tourist/delete">
          Vos Réservations
        </Link>
        <Link className='logout' onClick={props.deleteToken} to='/login'>Se déconnecter</Link>
      </Menu>)
  } else {
    return(
      <Menu className="sideBar">
        <Link className="menu-item-bar-actu" to="/displayadmin">
          Accueil
        </Link>
        <p id="crea">Création</p>
        <Link className="menu-item-bar" to="/formplace">
          Lieux
        </Link>
        <Link className="menu-item-bar" to="/formevents">
          Évènements
        </Link>
        <Link className="menu-item-bar" to="/formvacationer">
          Vacanciers
        </Link>
        <p id="sup">Modification/Suppression</p>
        <Link className="menu-item-bar" to="/places/delete">
          Lieux
        </Link>     
        <Link className="menu-item-bar" to="/happens/delete">
          Evènements
        </Link>   
        <Link className="menu-item-bar" to="/vacationer/delete">
          Vacanciers
        </Link>  
        <Link className="menu-item-bar" to="/bookings/event/delete">
          Réservations
        </Link>  
        <Link className="menu-item-bar-actu" to="/events">
          Fil d'actu
        </Link>
        <Link className="menu-item-bar" to="/place">
          Lieux
        </Link>
        <Link className="menu-item-bar" to="/vacationer">
          Vacanciers
        </Link>
        <Link className="menu-item-bar" to="/bookings">
          Réservations
        </Link>
        <Link className='logout' onClick={props.deleteToken} to='/login'>Se déconnecter</Link>
      </Menu>
    );
  }
  
};

export default Sidebar;
