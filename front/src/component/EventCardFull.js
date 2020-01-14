import React from 'react';
import './EventCard.css';

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

function EventCardFull({photo, category,description,date,time}){
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
      <p>{description}</p>
      <p>Date : {date.slice(0,10)} </p>
      <p>Heure : {time.slice(0,5)}</p>
      <p>Pour réserver, merci de vous rendre à l'accueil ou cliquer sur le bouton :</p>
    </div>
    <div className="fullCardButton">
      <button className="BookButton" type="button">RESERVER</button>
      <button className="MapButton" type="button">+ D'INFOS</button>
    </div>
  </div>
  )
}

export default EventCardFull;