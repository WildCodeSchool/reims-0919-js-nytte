import React from 'react';
import './FormPlace.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import UploadImage from './UploadImage'


class ModifPlace extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        place: this.props.place[this.props.index]
        };

     
      this.handleSubmit = this.handleSubmit.bind(this)
      this.putFormData = this.putFormData.bind(this)
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
    
    putFormData() {
      axios.put(`http://localhost:8000/api/places/${this.props.place.id}`, {
        local_name: this.state.name,
        local_photo: this.state.photo,
        local_description: this.state.description,
        local_phone: this.state.phone,
        local_pj: this.state.attachment,
        local_logo: this.state.logo,
        admin_id: this.state.adminId,
      })
      .then(response => {
        (response.status === 200) && (alert("Votre lieu a été modifié !"))
      })
    }


    render() {
      console.log(this.props.id)
      return (
      <div className = "formContainer">
        <div className="bannerTop">
          <button className='arrowBack'>
            <Link className='arrowBackLink' to='/displayadmin'>&lsaquo;</Link>
          </button>
          <h1 className='title'>Modifier
            <br/>
              un lieu
          </h1>
        </div>
        <form>
            <div className="form-place">
                <label htmlFor="place">Nom du lieu</label>
                <input 
                  type="text"               
                  name="name"
                  id="name" 
                  placeholder={this.state.place.local_name}
                  onChange={this.change}
                  required/>
            </div> 
         
           
            <div className="form-place">
                <label htmlFor="phone">Téléphone</label>
                <input 
                  type="tel"
                  name="phone" 
                  id="phone"
                  placeholder={this.state.place.local_phone}
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
                  placeholder={this.state.place.local_pj}
                  onChange={this.change}
                  required/>
            </div>
            <div className="form-place">
                <label htmlFor="logo">Logo</label>
                <input 
                  type="text" 
                  name="logo" 
                  id="logo" 
                  placeholder={this.state.place.local_logo}
                  onChange={this.change}
                  required/>
            </div>
              <div className = 'textareaForm'>
                <label htmlFor="description">Description</label>
                <textarea 
                  className='textareaFormBox' 
                  placeholder={this.state.place.local_description} rows='5'
                  name="description"
                  id="description"
                  onChange={this.change}
                />
            </div>
        </form>
        <button 
          className="createButton"
          onClick={this.putFormData}
          type='submit'
          value='Confirmer'
        >
          Confirmer
        </button>
    </div>
    );
  }
}
export default ModifPlace;
