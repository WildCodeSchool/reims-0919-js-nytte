import React from 'react'
import axios from 'axios'
import './App.css'
import DisplayAdmin from './component/DisplayAdmin.js'
import FormAdmin from './component/FormAdmin.js'
import FormPlace from './component/FormPlace'
import LoginAdmin from './component/LoginAdmin.js'
import DisplayPlace from './component/DisplayPlace.js'
import DisplayVacationer from './component/DisplayVacationer.js'
import FormVacationer from './component/FormVacationer.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campings: null,
      currentCamping: 0,
      place : {},
      vacationer :null,
      currentVacationer: 0
    }
    this.nextCamping = this.nextCamping.bind(this)
    this.nextVacationer = this.nextVacationer.bind(this)
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
      .then(response => {
        return response.data
      })
      .then(data =>{
        this.setState({
          place: data[0]});
       });
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
        <DisplayPlace place={this.state.place}/>
        {this.state.vacationers && (
          <DisplayVacationer
            vacationer={this.state.vacationers[this.state.currentVacationer]}
          />
        )}
        <button type='button' onClick={this.nextVacationer}>
          Suivant
        </button>
        <FormVacationer vacationer={this.state.vacationer}/>
      </div>
    )
  }
}
export default App

