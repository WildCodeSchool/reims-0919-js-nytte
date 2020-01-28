import React from 'react';
import './EventCard.css';

function ListOfBooks({date,name,lastname,firstname}){
  return(
    <div className="ListOfBooks">
      <table className="bookTable">
        <tr>
          <td>{name}</td>
          <td>{date.slice(0,10)}</td>
          <td>{lastname}</td>
          <td>{firstname}</td>
        </tr>
      </table>
    </div>
  )
}

export default ListOfBooks;