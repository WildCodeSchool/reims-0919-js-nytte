import React from 'react';
import axios from 'axios'
import './App.css';
import DisplayAdmin from './component/DisplayAdmin.js'
import FormAdmin from './component/FormAdmin.js'


class App extends React.Component {
constructor(props) {
  super(props);
  this.state = { camping :{
      id: 0,
      company: '',
      firstname: '',
  }};

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
  axios.get('http://localhost:8000//api/places')
  .then(response => {
    return response.data
  })
  .then(data =>{
    this.setState({
      place: data});
  });
}

render() {
  return (
  <div>
     <DisplayAdmin camping={this.state.camping}/>
     <FormAdmin />
     <p>{this.state.place}</p>
  </div>
);
}}

export default App;