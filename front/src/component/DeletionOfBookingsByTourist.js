import React from 'react';
import './Display.css';
import axios from 'axios'
import ListOfBooksByTourist from './ListOfBooksByTourist.js'
import BookBarLight from './BookBarLight.js'
import Sidebar from './Sidebar'
import { Redirect } from "react-router-dom"
import TotalBooks from './TotalBooks.js'


const deleteFormData = id => 
  axios.delete(`http://localhost:8000/api/bookings/tourist/${id}`)
    .then(response => {
      (response.status === 200) && (alert("la réservation est supprimée !"))
    })

function DeleteOfBookingsByEvent({date, time, name, id}){
  return(
  <div id="ListOfVacationers">
    <div id="ProfilVacationer">
    {name===name.slice(0,20)
      ?<p className="nameVac">{id}-{name}</p>
      :<p className="nameVac">{id}-{name.slice(0,20)}...</p>}
    </div>
    <div className="adresseVac">
      <p>{date.slice(8,10)}/{date.slice(5,7)}/{date.slice(2,4)} {time.slice(0,5)}</p>
    </div>
    <button id="buttonEye" type="button"></button>
    <button id="buttonEdit" type="button"></button>
    <button id="buttonDelete" type="button" onClick={() => deleteFormData(id)} type='submit' value='Supprimer'> </button>  
  </div>
  )
}

export default DeleteOfBookingsByEvent;

{/*export default class DeletionOfBookingsByTourist extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            touristbooks:[],
            isLoaded: false
        }
        this.getRegisteredPeople = this.getRegisteredPeople.bind(this);
        this.deleteFormData=this.deleteFormData.bind(this)
    }

    componentDidMount() {
        this.getRegisteredPeople(this.props.id);
    }

    getRegisteredPeople(id) {
        axios.get(`http://localhost:8000/api/bookings/tourist/${id}`)
          .then(response => response.data)
          .then(data => {
            this.setState({
              touristbooks: data,
              isLoaded: true
            })
        })
    }

    deleteFormData(id) {
      axios.delete(`http://localhost:8000/api/bookings/tourist/${id}`)
        .then(response => {
        (response.status === 200) && (alert("la réservation est supprimée !"))
        })
    }


    render() { 
        return (
            <>
                {!this.state.isLoaded
                    ? <p>Loading...</p>
                    : this.state.touristbooks.length
                        ?   <>
                                <Sidebar />
                                <BookBarLight />
                                    {(this.state.touristbooks.map(book =>
                                        <ListOfBooksByTourist
                                        id={book.tourist_id}
                                        idevent={book.happening_id}
                                        idbook={book.num_book}
                                        date={book.tourist_date}
                                        time={book.happening_time}
                                        name={book.happening_name}
                                        />
                                    ))}
                                <TotalBooks 
                                    booked={this.state.touristbooks.length}
                                />
                                <>
                                <button id="buttonDelete" type="button" onClick={() => this.deleteFormData(this.id)} type='submit' value='Supprimer'> </button>
                                </>  
                            </>
                        : <Redirect to="/events" />
                }
            </>
        )
    }
}


*/}
