import React from 'react';
import Switch from "react-switch";
import './FormEvent.css'
import UploadImage from './UploadImage'


class FormEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null,
      picture: null,
      category: null,
      description: null,
      date: null,
      date_end: null,
      time: null,
      time_end: null,
      placeId: null,
      seats_bookable: null,
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.savePicture = this.savePicture.bind(this);      
  }
  
  savePicture(picture) {
    this.setState({picture: `pictures/${picture}`})
  }

  handleChange(checked) {
    this.setState({ checked });
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
              Evénement
          </h1>
        </div>
        <form>
            <div className="form-event">
                <label htmlFor="Event">Nom</label>
                <input 
                  type="text"
                  name="event"
                  id="event"
                  onChange={this.change}
                  required
                />
            </div> 
            <hr/>
            <div className="form-event">
                <label htmlFor="picture">Image</label>
                <UploadImage
                  savePicture = {this.savePicture}
                />
            </div>
            <hr/>
            <div className="form-event">
                <label htmlFor="category">Catégorie</label>
                <select value={this.state.value} name="category" id="category" onChange={this.change}>
                  <option value="Restauration">Restauration</option>
                  <option value="Sport">Sport</option>
                  <option value="Enfant">Enfant</option>
                  <option value="Fiesta">Fiesta</option>
                  <option value="Détente">Détente</option>
                  <option value="Nature">Nature</option>
                  <option value="Cours">Cours</option>
                </select>
            </div> 
            <hr/>
            <div className="form-event">
                <label htmlFor="placeId">Lieu</label>
                <select value={this.state.value} name="placeId" id="placeId" onChange={this.change}>
                  {this.props.places.map((place) => 
                      <option key={this.props.places.id} 
                        value={place.id}>{place.local_name}</option>            
                  )}
                </select>

            </div> 
            <hr/>
            <div className="form-event">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={this.change}
                  required
                />
            </div> 
            <hr/>
            <div className="form-event">
                <label htmlFor="date">Date de fin</label>
                <input
                  type="date"
                  name="date_end"
                  id="date_end"
                  onChange={this.change}
                />
            </div> 
            <hr/>
            <div className="form-event">
                <label htmlFor="time">Heure</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  onChange={this.change}
                  required
                />
            </div> 
            <hr/>
            <div className="form-event">
                <label htmlFor="time">Heure de fin</label>
                <input
                  type="time"
                  name="time_end"
                  id="time_end"
                  onChange={this.change}
                />
            </div> 
            <hr/>
            <div className = 'textareaForm'>
                <label htmlFor="description">Description</label>
                <textarea
                  className='textareaForm'
                  placeholder="description de l'événement"
                  rows='5'
                  name="description"
                  id="description"
                  onChange={this.change}
                  required
                />
            </div>
            <hr/>
            <div className="form-event">
                <label htmlFor="booking">Réservation</label>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </div> 
            <div className="form-event">
                <label htmlFor="time">Nombre de réservation possible</label>
                <input
                  type="number"
                  name="seats_bookable"
                  id="seats_bookable"
                  onChange={this.change}
                />
            </div> 
            <hr/>
        </form>
        <button 
          className="createButton"
          onClick={() => this.props.postFormDataEvent(this.state)}
          type='submit'
          value='Créer'
        >
          Créer
        </button>
      </div>
    );
  }
}

export default FormEvent;