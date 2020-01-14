import React from 'react';
import Switch from "react-switch";
import axios from 'axios'
import './FormEvent.css'


class FormEvent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        event: null,
        picture: null,
        category: null,
        description: null,
        date: null,
        time: null,
        placeId: null,
        checked: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.postFormData = this.postFormData.bind(this);
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

    postFormData() {
      axios.post('http://localhost:8000/api/happenings', {
        happening_name: this.state.event,
        happening_picture: this.state.picture,
        happening_category: this.state.category,
        happening_description: this.state.description,
        happening_date: this.state.date,
        happening_time: this.state.time,
        place_id: this.state.placeId,
        isItBookable: this.state.checked
      })
      alert("Votre événement a bien été crée !")
    }

    render() {
      return (
      <div className = "formContainer">
        <div className="bannerTop">
        <button className='arrowBack'>
            <a className="menu-item" href="/">
              &lsaquo;
            </a>
          </button>
          <h1 className='title'>Création
            <br/>
              d'un événement
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
                <input
                  type="text"
                  name="picture"
                  id="picture" 
                  onChange={this.change}
                  required
                />
            </div>
            <hr/>
            <div className="form-event">
                <label htmlFor="category">Catégorie</label>
                <select value={this.state.value} onChange={this.change}>
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
                <label htmlFor="placeId">N° de lieu</label>
                <input
                  type="text"
                  name="placeId"
                  id="placeId"
                  onChange={this.change}
                  required
                />
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
        </form>
        <button 
          className="createButton"
          onClick={this.postFormData}
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