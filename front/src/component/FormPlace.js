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
        <div className="bannerTop">
          <button className='arrowBack'>&lsaquo;</button>
          <h1 className='title'>Création
            <br/>
              d'un lieu
          </h1>
        </div>
        <form>
            <div className="form-place">
                <label htmlFor="place">Nom du lieu</label>
                <input type="text" name="place" id="place" required/>
            </div> 
            <hr/>
            <div className="form-place">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" name="phone" id="phone" required/>
            </div>
            <hr/>
            <div className="form-place">
                <label htmlFor="photo">Photo du lieu</label>
                <input type="text" name="photo" id="photo " required/>
            </div>
            <hr/>
            <div className="form-place">
                <label htmlFor="attachment">Pièce jointe</label>
                <input type="text" name="attachment" id="attachment" required/>
            </div>
            <hr/>
            <div className="form-place">
                <label htmlFor="logo">Logo</label>
                <input type="text" name="logo" id="logo" required/>
            </div>
            <hr/>
            <div className = 'textareaForm'>
                <label htmlFor="description">Description</label>
                <textarea className='textareaForm' placeholder='description du lieu' rows='5'/>
            </div>
            <hr/>
        </form>
        <button className="createButton">Créer</button>
      </div>
    );
    }}
export default FormPlace;