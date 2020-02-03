import React from 'react';
import './FormPlace.css'
import UploadImage from './UploadImage'

class FormPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      photo: null,
      description: null,
      phone: null,
      attachment: null,
      logo: null,
      adminId: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.savePicture = this.savePicture.bind(this); 
  }

  savePicture(photo) {
    this.setState({photo: `pictures/${photo}`})
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
    
  handleSubmit(event) {
    event.preventDefault()
  }

    render() {
      return (
      <div className = "formContainer">
        <div className="bannerTop">
          <h1 className='title'>
            <br/>
              Lieu
          </h1>
        </div>
        <form>
            <div className="form-place">
                <label htmlFor="place">Nom du lieu</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  onChange={this.change}
                  required/>
            </div> 
            <div className="form-place">
                <label htmlFor="adminId ">N° identifiant</label>
                <input 
                  type="number" 
                  name="adminId" 
                  id="adminId" 
                  onChange={this.change}
                  required/>
            </div> 
            <div className="form-place">
                <label htmlFor="phone">Téléphone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  onChange={this.change}
                  required/>
            </div>
            <div className="form-place">
                <label htmlFor="photo">Photo du lieu</label>
                <UploadImage
                  savePicture = {this.savePicture}
                />
            </div>
            <div className="form-place">
                <label htmlFor="attachment">Pièce jointe</label>
                <input 
                  type="text" 
                  name="attachment" 
                  id="attachment" 
                  onChange={this.change}
                  required/>
            </div>
            <div className="form-place">
                <label htmlFor="logo">Logo</label>
                <input 
                  type="text" 
                  name="logo" 
                  id="logo" 
                  onChange={this.change}
                  required/>
            </div>
              <div className = 'textareaForm'>
                <label htmlFor="description">Description</label>
                <textarea 
                  className='textareaFormBox' 
                  placeholder='description du lieu' rows='5'
                  name="description"
                  id="description"
                  onChange={this.change}
                />
            </div>
        </form>
        <button 
          className="createButton"
          onClick={() => this.props.postFormDataPlace(this.state)}
          type='submit'
          value='Créer'
        >
          Créer
        </button>
    </div>
    )
  }
}
export default FormPlace;
