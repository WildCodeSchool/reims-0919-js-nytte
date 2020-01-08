import React from 'react';
import './Display.css';
import EventCard from './EventCard.js'

function CardString(props){
  console.log(props)
  return(
  <div id="CardString">
    <EventCard 
      place={props.place}
      event={props.event}
    />
  </div>
  )
}

export default CardString;