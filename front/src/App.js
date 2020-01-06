import React from 'react'
import axios from 'axios'
import './App.css'
import DisplayAdmin from './component/DisplayAdmin.js'
import DisplayPlace from './component/DisplayPlace.js'
import FormAdmin from './component/FormAdmin.js'
import FormPlace from './component/FormPlace'
import LoginAdmin from './component/LoginAdmin.js'
import DisplayVacationer from './component/DisplayVacationer.js'
import FormEvent from './component/FormEvent'
import FormVacationer from './component/FormVacationer.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campings: null,
      currentCamping: 0,
      places : null,
      currentPlace: 0,
      vacationer :null,
      currentVacationer: 0
    }
    this.nextCamping = this.nextCamping.bind(this)
    this.nextVacationer = this.nextVacationer.bind(this)
    this.nextPlace = this.nextPlace.bind(this)
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
}


  render() {
    return (
      <div>
        <LoginAdmin />
        
        {this.state.campings && (
          <DisplayAdmin
            camping={this.state.campings[this.state.currentCamping]}
          />
        )}
        <button type='button' onClick={this.nextCamping}>
          Suivant
        </button>
        <FormAdmin />
        <FormPlace />   
      
        {this.state.places && (
          <DisplayPlace
            place={this.state.places[this.state.currentPlace]}
          />
        )}
         <button type='button' onClick={this.nextPlace}>
          Suivant
        </button>

        {this.state.vacationers && (
          <DisplayVacationer
            vacationer={this.state.vacationers[this.state.currentVacationer]}
          />
        )}
        <button type='button' onClick={this.nextVacationer}>
          Suivant
        </button>
        <FormVacationer vacationer={this.state.vacationer}/>
        <FormEvent />
      </div>
    )
  }
}
export default App

