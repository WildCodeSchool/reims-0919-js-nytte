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
import EventBar from './component/EventBar'
import FormVacationer from './component/FormVacationer.js'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import UploadImage from './component/UploadImage'
import LoginAdmin from './component/LoginAdmin'


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
      events:null,
      currentEvent:0,
      token: null,
    }
    this.nextCamping = this.nextCamping.bind(this)
    this.nextVacationer = this.nextVacationer.bind(this)
    this.nextPlace = this.nextPlace.bind(this)
    this.nextEvent = this.nextEvent.bind(this)
  }

  nextCamping() {
    this.setState(prevState => {
      return {
        currentCamping:
          (prevState.currentCamping + 1) % prevState.campings.length
      }
    })
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

  nextEvent() {
    this.setState(prevState => {
      return {
        currentEvent:
          (prevState.currentEvent + 1) % prevState.events.length
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

    axios.get('http://localhost:8000/api/places')
    .then(response => response.data)
      .then(data => {
        this.setState({
          places: data})
       })

    axios.get('http://localhost:8000/api/vacationers')
      .then(response => response.data)
      .then(data => {
        this.setState({
          vacationers: data})
      })

    axios.get('http://localhost:8000/api/happenings')
      .then(response => response.data)
      .then(data => {
        this.setState({
          events: data})
        })
    }

  render() {
    const loggedIn = (this.state.token !== null && this.state.token !== undefined);
    const events = this.state.events;
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
          </Route>
          <Route exact path='/formadmin'>
            <FormAdmin />
          </Route>
          <Route exact path='/formplace'>
            <FormPlace />
          </Route>
          <Route exact path='/place' >
            {this.state.places && (
              <DisplayPlace 
                place={this.state.places[this.state.currentPlace]}
              />
            )}
           <button  type="button" onClick={this.nextPlace}>Suivant</button>
          </Route>
          <Route exact path='/vacationer'>
            {this.state.vacationers && (
              <DisplayVacationer
                vacationer={this.state.vacationers[this.state.currentVacationer]}
              />
            )}
            <button  type="button" onClick={this.nextVacationer}>Suivant</button>
          </Route>        
          <Route exact path='/formvacationer'>
            <FormVacationer vacationer={this.state.vacationer}/>
          </Route>
          <Route exact path='/events'>
            <Sidebar/>
            <EventBar/>
          {this.state.events && React.Children.toArray(this.state.events.map((event) => (
              <EventCard 
                id={event.id}
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
          <Route exact path='/events/:id' render={(props) => {
              const index = props.match.params.id - 1;
              if (events && index < events.length) {
                const event = events[index];
                return (
                  <>
                    <Sidebar />
                    <EventCardFull
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
                    />
                  </>
                )
              } else {
                return <></>
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

