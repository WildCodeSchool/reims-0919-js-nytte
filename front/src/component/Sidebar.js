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
        <Link className="menu-item-bar-actu" to="/vacationer">
          Vacanciers
        </Link>
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
          Événements
        </Link>
  
        <Link className="menu-item-bar" to="/formvacationer">
          Vacanciers
        </Link>
        <p id="sup">Suppression</p>
        <Link className="menu-item-bar" to="/vacationer/delete">
          Vacanciers
        </Link>      
  
        <Link className="menu-item-bar" to="/events">
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
      </Menu>
    );
  }
  
};

export default Sidebar;
