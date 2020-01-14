import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css'

function Sidebar(props){
  return(
    <Menu>
      <p id="crea">Création</p>
      <a className="menu-item-bar" href="/">
        Accueil
      </a>

      <a className="menu-item-bar" href="/formplace">
        Lieux
      </a>

      <a className="menu-item-bar" href="/formevents">
        Événements
      </a>

      <a className="menu-item-bar" href="/formvacationer">
        Vacanciers
      </a>

      <a className="menu-item-bar-actu" href="/events">
        Fil d'actu
      </a>
    </Menu>
  );
};

export default Sidebar;
