import React from 'react'
import axios from 'axios'
import './App.css'
import DisplayAdmin from './component/DisplayAdmin.js'
import DisplayPlace from './component/DisplayPlace.js'
import FormAdmin from './component/FormAdmin.js'
import FormPlace from './component/FormPlace'
import DisplayVacationer from './component/DisplayVacationer.js'
import DisplayProfileVacationer from './component/DisplayProfileVacationer.js'
import EventCard from './component/EventCard.js'
import EventCardFull from './component/EventCardFull'
import Sidebar from './component/Sidebar'
import FormEvent from './component/FormEvent'
import EventBar from './component/EventBar'
import FormVacationer from './component/FormVacationer.js'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import UploadImage from './component/UploadImage'
import LoginAdmin from './component/LoginAdmin'
import BookingList from './component/BookingList.js'
import ListOfBooks from './component/ListOfBooks.js'
import BookBarLight from './component/BookBarLight.js'
import CancelBar from './component/CancelBar.js'
import TotalBooks from './component/TotalBooks.js'
import Map from './component/Map.js'
import DeletionOfPlaces from './component/DeletionOfPlaces.js'
import DeletionOfEvents from './component/DeletionOfEvents'
import DeletionOfVacationers from './component/DeletionOfVacationers.js'
import DeletionOfBookingsByEvent from './component/DeletionOfBookingsByEvent.js'
import DeletionOfBookingsByTourist from './component/DeletionOfBookingsByTourist.js'
import DisplayListOfBooks from './component/DisplayListOfBooks.js'
import LoginVacationer from './component/LoginVacationer'
import ModifPlace from './component/ModifPlace.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campings: null,
      currentCamping: 0,
      places : [],
      currentPlace: 0,
      vacationers :[],
      currentVacationer: 0,
      isConnected: false,
      events: [],
      currentEvent:0,
      token: null,
      books:[],
      listbooks:null,
      isAdmin:false,
    }
    this.nextVacationer = this.nextVacationer.bind(this)
    this.nextPlace = this.nextPlace.bind(this)
    this.postFormDataPlace = this.postFormDataPlace.bind(this)
    this.postFormDataVacat = this.postFormDataVacat.bind(this)
    this.postFormDataEvent = this.postFormDataEvent.bind(this)
    this.deleteToken = this.deleteToken.bind(this)
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

  deleteToken(){
    this.setState(() =>{
      return {
        token:null
      }
    })
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/admins')
      .then(response => response.data)
      .then(data => {
        this.setState({
          campings: data
        })
      })
    
    axios.get('http://localhost:8000/api/bookings')
      .then(data => {
        this.setState({
          listbooks: data})
      }) 
      

    axios.get('http://localhost:8000/api/bookings/tourist')
      .then(response => response.data)
      .then(data => {
        this.setState({
          touristbooks: data})
      }) 
      
   
  }

  componentDidUpdate() {
    this.state.token && !this.state.places.length && axios.get(
      'http://localhost:8000/api/places',
      {
        headers: {
          "Authorization": `Bearer ${this.state.token}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(response => {
      this.setState({
        places: response.data
      })
    })

    this.state.token && !this.state.events.length && axios.get(
      'http://localhost:8000/api/happenings',
      {
        headers: {
          "Authorization": `Bearer ${this.state.token}`,
          "Content-Type": "application/json"
        }
      }
    )    
    .then(response => {
      this.setState({
        events: response.data
      })
    })
    
    this.state.token && !this.state.vacationers.length && axios.get(
      'http://localhost:8000/api/vacationers',
      {
        headers: {
          "Authorization": `Bearer ${this.state.token}`,
          "Content-Type": "application/json"
        }
      }
    )    
    .then(response => {
      this.setState({
        vacationers: response.data
      })
    })

    this.state.token && !this.state.books.length && axios.get(
      'http://localhost:8000/api/bookings/status',
      {
        headers: {
          "Authorization": `Bearer ${this.state.token}`,
          "Content-Type": "application/json"
        }
      }
    )    
    .then(response => {
      this.setState({
        books: response.data
      })
    })
  }

  postFormDataPlace(formData) {
    axios.post('http://localhost:8000/api/places', {
      local_name: formData.name,
      local_photo: formData.photo,
      local_description: formData.description,
      local_phone: formData.phone,
      local_pj: formData.attachment,
      local_logo: formData.logo,
      admin_id: formData.adminId,
    })
    .then(response => {
      if (response.status === 201) {
        this.setState(prevState => {
          return {places: [...prevState.places, response.data]}
        }, () => {
          alert("Votre lieu a été créé !")
        })
      } else {
        console.log(response)
      }
    })
  }

  setToken = token => this.setState({token})

  postFormDataVacat(formData) {
    axios.post('http://localhost:8000/api/vacationers', {
      tourist_firstname: formData.firstname,
      tourist_lastname: formData.lastname,
      tourist_login: formData.username,
      tourist_password: formData.password,
      tourist_city: formData.city,
      tourist_zip: formData.zip,
      tourist_address1: formData.adress,
      tourist_phone: formData.phone,
      tourist_email: formData.email,
      tourist_photo: formData.photo,
      birthday: formData.birthday,
      admin_id: formData.adminId
    })
    .then(response => {
      if (response.status === 201) { 
        this.setState(prevState => {
          return {vacationers: [...prevState.vacationers, response.data]}
        }, () => {        
          alert("Votre compte a été créé!")
        })
        } else {
          console.log(response)
        }
    })
  }

  postFormDataEvent(formData) {
    axios.post('http://localhost:8000/api/happenings', {
      happening_name: formData.event,
      happening_picture: formData.picture,
      happening_category: formData.category,
      happening_description: formData.description,
      happening_date: formData.date,
      happening_date_end: formData.date_end,
      happening_time: formData.time,
      happening_time_end: formData.time_end,
      place_id: formData.placeId,
      isItBookable: formData.checked,
      seats_bookable: formData.seats_bookable,
    })
      .then(response => {
        if (response.status === 201) {
          this.setState(prevState => {
            return {events: [...prevState.events, response.data]}
          }, () => {        
            alert("Votre événement a été créé!")
          })
          } else {
            console.log(response)
          }
      })
    }


  render() {
    const loggedIn = (this.state.token !== null && this.state.token !== undefined);
    return (
        <BrowserRouter>
          <Route path="/">
            <Route exact path='/login'>
            {loggedIn ? <Redirect to="/displayadmin" /> :
              <LoginVacationer token={this.state.token} setToken={this.setToken} />}
            </Route>
            <Route exact path='/loginadmin'>
            {loggedIn ? <Redirect to="/displayadmin" /> :
              <LoginAdmin isAdmin={this.state.isAdmin} setAsAdmin={(isAdmin)=> this.setState({isAdmin})}token={this.state.token} setToken={this.setToken} />}
            </Route>
            {loggedIn ? <>
          <Route exact path='/displayadmin'>
            <Sidebar isAdmin={this.state.isAdmin} deleteToken={this.deleteToken} token={this.state.token}/>
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
          <Route exact path='/profilevacationer'>
          {this.state.vacationers && React.Children.toArray(this.state.vacationers.map((vacationer) => (
              <DisplayProfileVacationer
                firstname={vacationer.tourist_firstname}
                lastname={vacationer.tourist_lastname}
                city={vacationer.tourist_city}
                zip={vacationer.tourist_zip}
                address={vacationer.tourist_address1}
                birthday={vacationer.birthday}
                photo={vacationer.tourist_photo}
                phone={vacationer.tourist_phone}
                email={vacationer.tourist_email}
              />
          )))}
          </Route>    
          <Route path='/vacationers/delete'>
          </Route>  
          <Route exact path='/formplace'>
            <FormPlace postFormDataPlace={this.postFormDataPlace} />
          </Route>
          <Route exact path='/formvacationer'>
            <FormVacationer postFormDataVacat={this.postFormDataVacat}/>
          </Route>
          <Route exact path='/formevents'>
            <FormEvent postFormDataEvent={this.postFormDataEvent}
                       places={this.state.places}/>
          </Route>
          <Route exact path='/modifplace'>
            <ModifPlace place={this.state.places[this.state.currentPlace]} />
          </Route>
          <Route path='/vacationer/delete'>
            <>
            <Sidebar isAdmin={this.state.isAdmin} deleteToken={this.deleteToken} token={this.state.token}/>
            <CancelBar />
            <div>
              <h1 style={{textAlign:'center'}}>Profils vacancier</h1>
              <p style={{textAlign:'center'}}>Attention ! la suppression d'un profil est définitive !</p>
            </div>
              {this.state.vacationers&&React.Children.toArray(this.state.vacationers.map((vacationer) => (
                  <DeletionOfVacationers
                    id={vacationer.id}
                    firstname={vacationer.tourist_firstname}
                    lastname={vacationer.tourist_lastname}
                    city={vacationer.tourist_city}
                    zip={vacationer.tourist_zip}
                  />
              )))}
            </>
            </Route>
            <Route path='/happens/delete'>
            <>
            <Sidebar/>
            <CancelBar />
            <div>
              <h1 style={{textAlign:'center'}}>Evènements</h1>
              <p style={{textAlign:'center'}}>Attention ! la suppression est définitive !</p>
            </div>
              {React.Children.toArray(this.state.events.map((event) => (
                  <DeletionOfEvents
                    id={event.id}
                    title={event.happening_name}
                    date={event.happening_date}
                    time={event.happening_time}
                  />
              )))}
            </>
          </Route>    
          <Route path='/places/delete'>
            <>
            <Sidebar/>
            <CancelBar />
            <div>
              <h1 style={{textAlign:'center'}}>Lieux</h1>
              <p style={{textAlign:'center'}}>Attention ! la suppression d'un lieu est définitive !</p>
            </div>
              {React.Children.toArray(this.state.places.map((place) => (
                  <DeletionOfPlaces
                    id={place.id}
                    name={place.local_name}
                  />
              )))}
            </>
          </Route>    
          <Route exact path='/bookings/event/delete'>
            <>
            <Sidebar/>
            <CancelBar />
            <div>
              <h1 style={{textAlign:'center'}}>Réservation</h1>
              <p style={{textAlign:'center'}}>Attention ! la suppression d'une réservation est définitive !</p>
            </div>
            {this.state.books && React.Children.toArray(this.state.books.map((book) => (
                  <DeletionOfBookingsByEvent
                    id={book.happening_id}
                    date={book.happening_date}
                    time={book.happening_time}
                    name={book.happening_name}
                    bookable={book.seats_bookable}
                    booked={book.places_booked}
                    free={book.free_places}
                  />
              )))}
            </>
          </Route>  
          <Route path='/bookings/tourist/delete'>
            <>
            <Sidebar/>
            <BookBarLight />
            <div>
              <p style={{textAlign:'center'}}>Attention ! la suppression d'une réservation est définitive !</p>
            </div>
            {this.state.touristbooks && React.Children.toArray(this.state.touristbooks.map((touristbook) => (
                  <DeletionOfBookingsByTourist
                    id={touristbook.tourist_id}
                    idevent={touristbook.happening_id}
                    idbook={touristbook.num_book}
                    date={touristbook.tourist_date}
                    time={touristbook.happening_time}
                    name={touristbook.happening_name}
                  />
              )))}
            </>
            </Route>  

          <Route exact path='/formvacationer'>
            <FormVacationer vacationer={this.state.vacationers}/>
          </Route>
          <Route exact path='/events'>
            <Sidebar isAdmin={this.state.isAdmin} deleteToken={this.deleteToken} token={this.state.token}/>
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
                    <Sidebar isAdmin={this.state.isAdmin} deleteToken={this.deleteToken} token={this.state.token}/>
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
                      token={this.state.token}
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
                    <Sidebar isAdmin={this.state.isAdmin} deleteToken={this.deleteToken} token={this.state.token}/>
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
          <Sidebar isAdmin={this.state.isAdmin} deleteToken={this.deleteToken} token={this.state.token}/>
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

          {/*<Route
            exact
            path='/bookings/tourist/delete'
            render={(props) => <DeletionOfBookingsByTourist />}
          />*/}
          <Route
            exact
            path='/bookings/:id'
            render={(props) => <DisplayListOfBooks id={props.match.params.id} />}
          />

         
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

