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
      axios.post('http://localhost:8000/api/events', {
        event: this.state.event,
        picture: this.state.picture,
        category: this.state.category,
        description: this.state.description,
        isItBookable: this.state.checked
      })
      alert("Votre événement a bien été crée !")
    }

    render() {
      return (
      <div className = "formContainer">
        <div className="bannerTop">
          <button className='arrowBack'>&lsaquo;</button>
          <h1 className='title'>Création
            <br/>
              d'un événement
          </h1>
        </div>
        <form>
            <div className="form-example">
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
            <div className="form-example">
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
            <div className="form-example">
                <label htmlFor="category">Catégorie</label>
                <input
                  type="text"
                  name="category"
                  id="category"
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
            <div className="form-example">
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