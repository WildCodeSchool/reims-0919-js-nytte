import React from 'react'
import './FormAdmin.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
class FormVacationer extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.postFormData = this.postFormData.bind(this)
    this.state = {
      lastname: null,
      firstname: null,
      email: null,
      adress: null,
      city: null,
      zip: null,
      username: null,
      password: null,
      phone: null,
      photo: null,
      birthday: null,
      adminId: null
    }
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
    axios.post('http://localhost:8000/api/vacationers', {
      tourist_firstname: this.state.firstname,
      tourist_lastname: this.state.lastname,
      tourist_login: this.state.username,
      tourist_password: this.state.password,
      tourist_city: this.state.city,
      tourist_zip: this.state.zip,
      tourist_address1: this.state.adress,
      tourist_phone: this.state.phone,
      tourist_email: this.state.email,
      tourist_photo: this.state.photo,
      birthday: this.state.birthday,
      admin_id: this.state.adminId
    })
    .then(response => {
      (response.status === 200) && (alert("Votre compte a été créé!"))
    })
  }

  render() {
    return (
      <div className = "formContainer">
      <button className='arrowBack'>
        <Link className='arrowBackLink' to='/displayadmin'>&lsaquo;</Link>
      </button>
      <div className='formAdminVacationer'>
        <img
          src='https://zupimages.net/up/19/50/0b2g.png'
          className='LogoNytte'
          alt='logo Nytte'></img>
        <h1>Création d'un vacancier</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-example'>
            <label htmlFor='lastname'>Nom</label>
            <input
              type='text'
              name='lastname'
              id='lastname'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='firstname'>Prénom</label>
            <input
              type='text'
              name='firstname'
              id='firstname'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='adminId'>N° établissement</label>
            <input
              type='number'
              name='adminId'
              id='adminId'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='email'>Mail</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='adress'>Adresse</label>
            <input
              type='text'
              name='adress'
              id='adress'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='city'>Ville</label>
            <input
              type='text'
              name='city'
              id='city'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='zip'>Code postal</label>
            <input
              type='text'
              name='zip'
              id='zip'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='username'>Identifiant</label>
            <input
              type='text'
              name='username'
              id='username'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='password'>Mot de passe</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='phone'>Téléphone</label>
            <input
              type='tel'
              name='phone'
              id='phone'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='birthday'>Date de naissance</label>
            <input
              type='date'
              name='birthday'
              id='birthday'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='photo'>Photo</label>
            <input
              type='text'
              name='photo'
              id='photo'
              onChange={this.change}
              required
            />
          </div>
          <div className='inputForm'>
            <input
              onClick={this.postFormData}
              type='submit'
              value='VALIDER >'
            />
          </div>
        </form>
      </div>
      </div>
    )
  }
}
export default FormVacationer
