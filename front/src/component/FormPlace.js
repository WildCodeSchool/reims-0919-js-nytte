import React from 'react';
import './FormPlace.css';


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
        <div>
          <form>
              <div className="form-place">
                  <label htmlFor="place">Nom du lieu</label>
                  <input type="text" name="place" id="place" required/>
              </div> 
              <div className="form-place">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" name="phone" id="phone" required/>
              </div>
              <div className="form-place">
                  <label htmlFor="photo">Photo du lieu</label>
                    <input type="file" name="file"/>
              </div>
              <div className="form-place">
                  <label htmlFor="attachment">Pièce jointe</label>
                      <input type="file" name="file"/>
              </div>
              <div className="form-place">
                  <label htmlFor="logo">Logo</label>
                      <input type="file" name="logo" />
              </div>
              <div className = 'form-place'>
                  <label htmlFor="description">Description</label>
                  <textarea className='textareaFormBox' placeholder='description du lieu' rows='5'/>
              </div>
          </form>
      </div>
    </div>
    );
  }
}
export default FormPlace;