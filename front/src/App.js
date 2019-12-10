import React from 'react';
import axios from 'axios'
import './App.css';
import DisplayAdmin from './component/DisplayAdmin.js'
/*
const sampleCamping = 

  {"id":1,
  "company":"Camping de Max",
  "firstname":"Maxime",
  "lastname":"Thibaud",
  "login_admin":"max-thi",
  "password_admin":"password",
  "city":"Sainte Maxime",
  "zip":"83120",
  "address1":"1 rue Thibaud",
  "address2":null,
  "photo":"https://zupimages.net/up/19/49/c3li.jpg",
  "description_company":"Pour des vacances en famille, en couple ou entre amis, nous vous proposons des séjours détente et confort sur de vastes emplacements ombragés pour tentes, caravanes ou camping-cars ou dans des hébergements de qualité tels que mobil homes, chalets, roulottes, gîtes ou appartements",
  "latitude":null,
  "longitude":null,
  "phone_company":"0401020304",
  "email_company":"maxthi@campingdemax.fr",
  "creation_date":"2019-12-05T13:59:10.000Z"};
 */

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = { camping :{
      id: 0,
      company: '',
      firstname: '',
  }};
  //this.getCamping = this.getCamping.bind(this);
}

componentDidMount() {
 
  axios.get('http://localhost:8000/api/admins')
  .then(response => {
    console.log(response)
    return response.data
  })
  .then(data =>{
    console.log(data)
    this.setState({
      camping: data[2]});
  });
}

render() {
  return (
  <div>
       
      <DisplayAdmin camping={this.state.camping}/>

  </div>
);
}}

export default App;


/*<div className="boutons">
        <button  type="button" onClick={this.getCamping}>Suivant</button> 
                 
    
      </div>*/