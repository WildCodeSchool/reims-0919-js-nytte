import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayAdmin from './component/DisplayAdmin.js'
const sampleCamping =
//[
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
 /* {"id":2,
  "company":"Camping de Wojtek",
  "firstname":"Wojtek",
  "lastname":"Zdebski",
  "login_admin":"woj-tek",
  "password_admin":"password",
  "city":"Quiberon",
  "zip":"56170",
  "address1":"3 rue de la Steppe",
  "address2":null,
  "photo":"https://zupimages.net/up/19/49/3ik8.jpg",
  "description_company":null,
  "latitude":null,
  "longitude":null,
  "phone_company":"0201020304",
  "creation_date":"2019-12-05T13:59:10.000Z"},
  {"id":3,
  "company":"Club de Victor",
  "firstname":"Victor",
  "lastname":"Biard",
  "login_admin":"vic-bia",
  "password_admin":"password",
  "city":"Reims","zip":"51100",
  "address1":"6 rue du Champagne Comte Vicolatino",
  "address2":null,
  "photo":"https://zupimages.net/up/19/49/y642.jpg",
  "description_company":null,
  "latitude":null,
  "longitude":null,
  "phone_company":"0301020304",
  "creation_date":"2019-12-05T13:59:10.000Z"},
  {"id":4,
  "company":"Hotel de plein air de Cindie",
  "firstname":"Cindie",
  "lastname":"Jouvin",
  "login_admin":"cin-jou",
  "password_admin":"password",
  "city":"Cassis",
  "zip":"13260",
  "address1":"Rue de la Framboise",
  "address2":null,
  "photo":"https://zupimages.net/up/19/49/ctks.jpg",
  "description_company":null,
  "latitude":null,
  "longitude":null,
  "phone_company":"0406081001",
  "creation_date":"2019-12-05T13:59:10.000Z"}*/
//]
class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    camping: sampleCamping,
  };
}
render() {
  return (
  <div>
    <div className="card">
      <DisplayAdmin camping={this.state.camping}/>
      <div className="boutons">
        <button  type="button" onClick={this.getCamping}>Suivant</button>
      </div>
    </div>
  </div>
);
}}
export default App;
