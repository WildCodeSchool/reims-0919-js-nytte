import React from 'react';
import './EventCard.css';


function ListOfBooksByTourist({name,idbook,date,time}){
  return(
    <div id="ListOfVacationers">
      <div id="ProfilVacationer">
      {name===name.slice(0,20)
        ?<p className="nameVac">{idbook}-{name}</p>
        :<p className="nameVac">{idbook}-{name.slice(0,20)}...</p>}
      </div>
      <div className="adresseVac">
        <p>{date.slice(8,10)}/{date.slice(5,7)}/{date.slice(2,4)} {time.slice(0,5)}</p>
      </div>
    </div>
    )
  }

export default ListOfBooksByTourist;