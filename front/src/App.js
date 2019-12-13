import React from 'react';
import axios from 'axios'
import './App.css';
import DisplayAdmin from './component/DisplayAdmin.js'
import FormAdmin from './component/FormAdmin.js'
import DisplayPlace from './component/DisplayPlace.js'
import DisplayVacationer from './component/DisplayVacationer.js'
import RandomCamping from './component/RandomCamping';



class App extends React.Component {
constructor(props) {
  super(props);
  this.state = { 
    camping :{
      id: 0,
      company: '',
      firstname: '',
    },
    place : {},
    vacationer :{}
  };
}

componentDidMount() {
 
  axios.get('http://localhost:8000/api/admins')
  .then(response => {
    return response.data
  })
  .then(data =>{
    this.setState({
      camping: data[3]});
  });
  axios.get('http://localhost:8000/api/places')
  .then(response => {
    return response.data
  })
  .then(data =>{
    this.setState({
      place: data[0]});
  });
  axios.get('http://localhost:8000/api/vacationers')
  .then(response => {
    return response.data
  })
  .then(data =>{
    this.setState({
      vacationer: data[0]});
  });
}

render() {
  return (
  <div>
     <FormAdmin />
     <br/>
     <RandomCamping />
     <br/>
     <div>
     <DisplayPlace place={this.state.place}/>
     <br/>
     <DisplayVacationer vacationer={this.state.vacationer}/>
     <br/>
     </div>
  </div>
);
}}

export default App;
