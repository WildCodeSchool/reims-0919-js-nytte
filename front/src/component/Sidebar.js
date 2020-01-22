import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom";
import './Sidebar.css'

function Sidebar(props){
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

      <p id="sup">Modification/Suppression</p>
      <Link className="menu-item-bar" to="/places/delete">
        Lieux
      </Link>
      <Link className="menu-item-bar" to="/happens/delete">
        Evènements
      </Link>       
      <Link className="menu-item-bar" to="/vacationers/delete">
        Vacanciers
      </Link>
      <Link className="menu-item-bar" to="/bookings/event/delete">
        Réservations par évènement
      </Link> 
      <Link className="menu-item-bar-actu" to="/bookings/tourist/delete">
        Réservations par vacancier
      </Link>    

      <Link className="menu-item-bar-actu" to="/events">
        Fil d'actu
      </Link>
      <Link className="menu-item-bar-actu" to="/place">
        Lieux
      </Link>
      <Link className="menu-item-bar-actu" to="/vacationer">
        Vacanciers
      </Link>
      <Link className="menu-item-bar-actu" to="/bookings">
        Réservations
      </Link>
      <Link className="menu-item-bar-actu" to="/bookings/tourist/delete">
        Vos Réservations
      </Link>
    </Menu>
  );
};

export default Sidebar;
