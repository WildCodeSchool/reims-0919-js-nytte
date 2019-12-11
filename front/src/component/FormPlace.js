import React from 'react';
import './FormPlace.css'


class FormPlace extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
      <div className = "formContainer">
        <img src = 'https://zupimages.net/up/19/50/0b2g.png' className = 'LogoNytte' alt='logo Nytte'></img>
        <form>
            <div className="form-example">
                <label htmlFor="place">Nom du lieu</label>
                <input type="text" name="place" id="place" required/>
            </div> 
            <hr/>
            <div className = 'form-example'>
                <label htmlFor="firstname">Prénom du responsable</label>
                <input type="text" name="firstname" id="firstname" required/>
            </div>
            <hr/>
            <div className = 'form-example'>
                <label htmlFor="firstname">Nom du responsable</label>
                <input type="text" name="firstname" id="firstname" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="email">Mail</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="adress">Adresse</label>
                <input type="text" name="adress" id="adress" required/>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="city">Ville</label>
                <input type="text" name="city" id="city" required/>
            </div>
            <hr/>
            <div className = 'form-example'>
                <label htmlFor="lastname">
                  Description
                  <textarea />
                </label>
            </div>
            <hr/>
            <div className="form-example">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" name="phone" id="phone" required/>
            </div>
            <hr/>
            <div className= 'inputForm'>
                <input  type="submit" value="VALIDER  >"/>
            </div>
        </form>
      </div>
    );
    }}
export default FormPlace;