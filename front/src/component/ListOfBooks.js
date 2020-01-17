import React from 'react';
import './EventCard.css';
import {useHistory} from 'react-router-dom';

function ListOfBooks({eventid,date,time,name,lastname}){
  let history=useHistory()
  return(
    <div className="ListOfBooks">
      <table className="bookTable">
        <tr>
          <td>{name}</td>
          <td>{date.slice(0,10)}</td>
          <td>{lastname}</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  )
}

export default ListOfBooks;