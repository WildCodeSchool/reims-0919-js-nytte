import React from 'react';
import './EventCard.css';
import {useHistory} from 'react-router-dom';

function renderSwitch(category){
  switch({category}){
    case "Restauration":
      return <img className="logoCategory" src="https://zupimages.net/up/20/03/o5vx.png" alt="logo de la catégorie"></img>;
    case "Sport":
      return <img className="logoCategory" src="https://zupimages.net/up/20/03/j9tf.png" alt="logo de la catégorie"></img>;
    case "Enfant":
      return <img className="logoCategory" src="https://zupimages.net/up/20/03/re66.png" alt="logo de la catégorie"></img>;
    case "Fiesta":
      return <img className="logoCategory" src="https://zupimages.net/up/20/03/o5vx.png" alt="logo de la catégorie"></img>;
    case "Détente":
      return <img className="logoCategory" src="https://zupimages.net/up/20/03/jjc3.png" alt="logo de la catégorie"></img>;
    case "Nature":
      return <img className="logoCategory" src="https://zupimages.net/up/20/03/5693.png" alt="logo de la catégorie"></img>;
    case "Cours":
      return <img className="logoCategory" src="https://zupimages.net/up/20/03/ay5x.png" alt="logo de la catégorie"></img>;
    default:
      console.log("yes")
      return <img className="logoCategory" src="https://zupimages.net/up/20/03/zshx.png" alt="logo de la catégorie"></img>;  
  }
}

function EventCardFull({id,photo, title, category,description,date,time,endTime, isItBookable}){
  let history=useHistory()
  return(
  <div className="CardFull">
    <div className="pictureCardFull">
      <div className="logoTitle">
        {renderSwitch(category)}
          <h1>{category.toUpperCase()}</h1>
      </div>  
        <img className="photoCardFull" src={photo} alt="profil du lieu touristique"></img>
    </div>
    <div className="CardTextDescription">
      <h2>{title}</h2>
      <p>{description}</p>
      {date===null
        ?""
        :<p>Date : {date.slice(0,10)} </p>}
      {endTime===null
        ?<p>à {time.slice(0,5)}</p>
        :<p> Horaires : {time.slice(0,5)} - {endTime.slice(0,5)}</p>}
      {isItBookable
        ?<>
        <p>Pour réserver, merci de vous rendre à l'accueil ou cliquer sur le bouton :</p>
        <div className="fullCardButton">
          <button className="BookButton" type="button">RESERVER</button>
          <button className="MapButton" type="button" onClick={event=> { event.preventDefault(); history.push(`/events/map/${id}`) }} href={`/events/map/${id}`}>Y ALLER</button>
        </div>
        </>
        :<div className="fullCardButton">
          <button className="MapButton" type="button" onClick={event=> { event.preventDefault(); history.push(`/events/map/${id}`) }} href={`/events/map/${id}`}>Y ALLER</button>
        </div>
        }
    </div>
  </div>
  )
}

export default EventCardFull;