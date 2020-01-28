import React from 'react';
import './EventCard.css';

function ListOfBooks({date,name,lastname,firstname}){
  return(
    <div className="ListOfBooks">
      <table className="bookTable">
        <tr>
          <td className="eventTd">{name.slice(0,15)}...</td>
          <td className="dateTd">{date.slice(8,10)}/{date.slice(5,7)}/{date.slice(2,4)}</td>
          <td className="nameTd">{firstname} {lastname}</td>
        </tr>
      </table>
    </div>
  )
}

export default ListOfBooks;