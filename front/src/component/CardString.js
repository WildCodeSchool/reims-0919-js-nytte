import React from 'react';
import './Display.css';
import EventCard from './EventCard.js'

function CardString(props){
  console.log(props)
  return(
  <div id="CardString">
    <h1>EVENEMENTS</h1>
    <EventCard/>
  </div>
  )
}

export default CardString;