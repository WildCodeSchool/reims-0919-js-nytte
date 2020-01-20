import React from 'react'
import axios from 'axios'
import './App.css'
import DisplayAdmin from './component/DisplayAdmin.js'
import DisplayPlace from './component/DisplayPlace.js'
import FormAdmin from './component/FormAdmin.js'
import FormPlace from './component/FormPlace'
import DisplayVacationer from './component/DisplayVacationer.js'
import EventCard from './component/EventCard.js'
import EventCardFull from './component/EventCardFull'
import Sidebar from './component/Sidebar'
import FormEvent from './component/FormEvent'
import PutEvent from './component/PutEvent'
import EventBar from './component/EventBar'
import FormVacationer from './component/FormVacationer.js'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import UploadImage from './component/UploadImage'
import LoginAdmin from './component/LoginAdmin'
import BookingList from './component/BookingList.js'
import ListOfBooks from './component/ListOfBooks.js'
import BookBar from './component/BookBar.js'
import TotalBooks from './component/TotalBooks.js'
import Map from './component/Map.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campings: null,
      currentCamping: 0,
      places : null,
      currentPlace: 0,
      vacationer :null,
      currentVacationer: 0,
      isConnected: false,
      events: [],
      currentEvent:0,
      token: null,
      books:null,
      listbooks:null
    }
    this.nextVacationer = this.nextVacationer.bind(this)
    this.nextPlace = this.nextPlace.bind(this)    
  }

   nextVacationer() {
    this.setState(prevState => {
      return {
        currentVacationer:
          (prevState.currentVacationer + 1) % prevState.vacationers.length
      }
    })
  }

  nextPlace() {
    this.setState(prevState => {
      return {
        currentPlace:
          (prevState.currentPlace + 1) % prevState.places.length
      }
    })
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/admins')
      .then(response => {
        this.setState({
          campings: response.data
        })
      })

    axios.get('http://localhost:8000/api/places')
      .then(response => {
        this.setState({
          places: response.data
        })
      })

    axios.get('http://localhost:8000/api/vacationers')
      .then(response => {
        this.setState({
          vacationers: response.data
        })
      })

    axios.get('http://localhost:8000/api/happenings')
      .then(response => {
        this.setState({
          events: response.data
        })
      })

    axios.get('http://localhost:8000/api/bookings')
      .then(response => response.data)
      .then(data => {
        this.setState({
          books: data})
      })    
    
    {/*axios.get('http://localhost:8000/api/bookings/10')
      .then(response => response.data)
      .then(data => {
        this.setState({
          listbooks: data})
      }) */}
   
  }

  render() {
    const loggedIn = (this.state.token !== null && this.state.token !== undefined);
    return (
        <BrowserRouter>
          <Route path="/">
            <Route exact path='/login'>
            {loggedIn ? <Redirect to="/displayadmin" /> :
              <LoginAdmin token={this.state.token} setToken={(token) => this.setState({token})} />}
            </Route>
            {loggedIn ? <>
          <Route exact path='/displayadmin'>
            <Sidebar />
            {this.state.campings && (
              <DisplayAdmin camping={this.state.campings[this.state.currentCamping]} token={this.state.token} />
            )}
            {React.Children.toArray(this.state.events.map((event, index) => (
              <EventCard 
                id={event.id}
                index={index}
                photo={event.local_photo}
                category={event.happening_category}
                date={event.happening_date}
                time={event.happening_time}
                endDate={event.happening_time_end}
                endTime={event.happening_date_end}
                isItBookable={event.isItBookable}
              />
          )))}
          </Route>
          <Route exact path='/formadmin'>
            <FormAdmin />
          </Route>
          <Route exact path='/formplace'>
            <FormPlace />
          </Route>
          <Route exact path='/events/put'>
            <PutEvent />
          </Route>
          <Route exact path='/place' >
            {this.state.places && (
              <DisplayPlace 
                place={this.state.places[this.state.currentPlace]}
                nextPlace={this.nextPlace}
              />
            )}          
          </Route>
          <Route exact path='/vacationer'>
            {this.state.vacationers && (
              <DisplayVacationer
                vacationer={this.state.vacationers[this.state.currentVacationer]}
                nextVacationer={this.nextVacationer}
              />
            )}
          </Route>        
          <Route exact path='/formvacationer'>
            <FormVacationer vacationer={this.state.vacationer}/>
          </Route>
          <Route exact path='/events'>
            <Sidebar/>
            <EventBar/>
            {React.Children.toArray(this.state.events.map((event) => (
                <EventCard 
                  id={event.id}
                  photo={event.local_photo}
                  title={event.happening_name}
                  category={event.happening_category}
                  date={event.happening_date}
                  time={event.happening_time}
                  endDate={event.happening_time_end}
                  endTime={event.happening_date_end}
                  isItBookable={event.isItBookable}
                  map={event.mapping}
                />
            )))}
          </Route>
          <Route exact path={`/events/:id`} render={(props) => {
              const {id} = props.match.params;
              const event = this.state.events.find(event => event.id === parseInt(id));
              if (event) {
                return (
                  <>
                    <Sidebar />
                    <EventCardFull
                      id={event.id}
                      photo={event.local_photo}
                      title={event.happening_name}
                      category={event.happening_category}
                      logo={event.happening_picture}
                      description={event.happening_description}
                      date={event.happening_date}
                      time={event.happening_time}
                      endDate={event.happening_date_end}
                      endTime={event.happening_time_end}
                      isItBookable={event.isItBookable}
                      map={event.mapping}
                    />
                  </>
                )
              } else {
                return <Redirect to="/events" />
              }
            }}>
          </Route>
          <Route exact path={`/events/map/:id`} render={(props) => {
              const {id} = props.match.params;
              const eventMap = this.state.events.find(eventMap => eventMap.id === parseInt(id));
              console.log(id)
              if (eventMap) {
                return (
                  <>
                    <Sidebar />
                    <Map
                      photo={eventMap.local_photo}
                      title={eventMap.happening_name}
                      category={eventMap.happening_category}
                      logo={eventMap.happening_picture}
                      description={eventMap.happening_description}
                      date={eventMap.happening_date}
                      time={eventMap.happening_time}
                      endDate={eventMap.happening_date_end}
                      endTime={eventMap.happening_time_end}
                      isItBookable={eventMap.isItBookable}
                      map={eventMap.mapping}
                    />
                  </>
                )
              } else {
                return <Redirect to="/events" />
              }
            }}>
          </Route>


          <Route exact path='/bookings'>
          <Sidebar/>
            <EventBar/>
          {this.state.books && React.Children.toArray(this.state.books.map((book) => (
              <BookingList 
                id={book.happening_id}
                date={book.happening_date}
                time={book.happening_time}
                name={book.happening_name}
                bookable={book.seats_bookable}
                booked={book.places_booked}
                free={book.free_places}
              />
          )))}
          </Route>
          <Route exact path='/bookings/:id'  render={(props) => {
              const {id} = props.match.params;
              const book = this.state.books.find(book => book.happening_id === parseInt(id));
              console.log({id})
              if (book) {
                return (
                  <>
            <Sidebar />
            <BookBar />
            <ListOfBooks
              bookid={book.num_book}
              eventid={book.happening_id}
              name={book.happening_name}
              date={book.happening_date}
              time={book.happening_time}
              lastname={book.tourist_lastname}
            />
            <TotalBooks 
              booked={book.places_booked}/>
            </>
                )
              } else {
                return <Redirect to="/events" />
              }
            }}>
            </Route>

          <Route exact path='/formevents'>
            <FormEvent />
          </Route>
          <Route exact path='/uploadimages'>
            <UploadImage />
          </Route>

            </>:<Redirect to="/login" />}
            
          </Route>
        </BrowserRouter>
    )
  }
}
export default App

