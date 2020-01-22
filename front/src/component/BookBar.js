import React from 'react';
import './EventCard.css';

function BookBar(){
  return(
    <>
    <div className="pictureCardBar">
      <h1>BOOKINGS</h1>
    </div>
    <>
    <table className="bookTable">
      <tr>
        <th>Evenement</th>
        <th>Date</th>
        <th>Nom</th>
        <th>Prénom</th>
      </tr>
    </table>
    </>
    </>
  )
}

export default BookBar;