import React from "react";
import ListOfBooks from './ListOfBooks.js'
import BookBar from './BookBar.js'
import TotalBooks from './TotalBooks.js'
import axios from "axios";
import Sidebar from './Sidebar'
import { Redirect } from "react-router-dom"

export default class DisplayListOfBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            listbooks:[],
            isLoaded: false
        }
        this.getRegisteredPeople = this.getRegisteredPeople.bind(this);
    }

    componentDidMount() {
        this.getRegisteredPeople(this.props.id);
    }

    getRegisteredPeople(id) {
        axios.get(`http://localhost:8000/api/bookings/${id}`)
          .then(response => response.data)
          .then(data => {
            this.setState({
              listbooks: data,
              isLoaded: true
            })
        })
    }

    render() { 
        return (
            <>
                {!this.state.isLoaded
                    ? <p>Loading...</p>
                    : this.state.listbooks.length
                        ?   <>
                                <Sidebar />
                                <BookBar />
                                    {(this.state.listbooks.map(book =>
                                        <ListOfBooks
                                        key={`${book.happening_id}${book.tourist_id}`}
                                        bookid={book.num_book}
                                        eventid={book.happening_id}
                                        name={book.happening_name}
                                        date={book.happening_date}
                                        time={book.happening_time}
                                        lastname={book.tourist_lastname}
                                        />
                                    ))}
                                <TotalBooks 
                                    booked={this.state.listbooks.length}
                                />
                            </>
                        : <Redirect to="/events" />
                }
            </>
        )
    }
}
