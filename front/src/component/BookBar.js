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
        <th className="eventTd">Evenement</th>
        <th className="dateTd">Date</th>
        <th className="nameTd">Vacancier</th>
      </tr>
    </table>
    </>
    </>
  )
}

export default BookBar;