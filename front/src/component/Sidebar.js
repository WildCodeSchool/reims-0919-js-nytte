import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom";
import './Sidebar.css'

function Sidebar(props){
  return(
    <Menu className="sideBar">
      <p id="crea">Création</p>
      <Link className="menu-item-bar" to="/displayadmin">
        Accueil
      </Link>

      <Link className="menu-item-bar" to="/formplace">
        Lieux
      </Link>

      <Link className="menu-item-bar" to="/formevents">
        Événements
      </Link>

      <Link className="menu-item-bar" to="/formvacationer">
        Vacanciers
      </Link>

      <Link className="menu-item-bar-actu" to="/events">
        Fil d'actu
      </Link>
    </Menu>
  );
};

export default Sidebar;
