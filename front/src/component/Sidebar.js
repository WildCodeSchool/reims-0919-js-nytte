import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css'

function Sidebar(props){
  return(
    <Menu>
      <a className="menu-item" href="/">
        Accueil
      </a>

      <a className="menu-item" href="/formplace">
        Lieux
      </a>

      <a className="menu-item" href="/événements">
        Événements
      </a>

      <a className="menu-item" href="/vacanciers">
        Vacanciers
      </a>
    </Menu>
  );
};

export default Sidebar;
