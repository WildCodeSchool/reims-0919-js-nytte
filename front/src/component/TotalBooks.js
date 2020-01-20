import React from 'react';
import './EventCard.css';


function TotalBooks({booked}){
  return(
    <div className="TotalBooks">
      <p>Total : {booked}</p>
    </div>
  )
}

export default TotalBooks;