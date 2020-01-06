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
              <div className="form-example">
                  <label htmlFor="place">Nom du lieu</label>
                  <input type="text" name="place" id="place" required/>
              </div> 
              <hr/>
              <div className="form-example">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" name="phone" id="phone" required/>
              </div>
              <hr/>
              <div className="form-example">
                  <label htmlFor="photo">Photo du lieu</label>
                  <form method="POST" enctype="multipart/form-data" action="upload">
                    <input type="file" name="file"/>
                    <button> envoyer </button>
                  </form>
              </div>
              <hr/>
              <div className="form-example">
                  <label htmlFor="attachment">Pièce jointe</label>
                    <form method="POST" enctype="multipart/form-data" action="upload">
                      <input type="file" name="file"/>
                      <button> envoyer </button>
                    </form>
              </div>
              <hr/>
              <div className="form-example">
                  <label htmlFor="logo">Logo</label>
                  <form ref='uploadForm' 
                    id='uploadForm' 
                    action='/upload' 
                    method='post' 
                    encType="multipart/form-data">
                      <input type="file" name="my_profile_pic" />
                      <input type="file" name="my_pet" />
                      <input type="file" name="my_cover_photo" />
                      <input type='submit' value='Upload!' />
                  </form>		
              </div>
              <hr/>
              <div className = 'textareaForm'>
                  <label htmlFor="description">Description</label>
                  <textarea className='textareaForm' placeholder='description du lieu' rows='5'/>
              </div>
              <hr/>
          </form>
      </div>
    </div>
    );
  }
}
export default FormPlace;