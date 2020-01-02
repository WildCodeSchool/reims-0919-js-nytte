import React from 'react'
import './FormAdmin.css'
import axios from 'axios'

class FormAdmin extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.postFormData = this.postFormData.bind(this)
    this.state = {
      company: null,
      lastname: null,
      firstname: null,
      email: null,
      adress: null,
      city: null,
      zip: null,
      username: null,
      password: null,
      description: null,
      phone: null,
      photo: null
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
    axios.post('http://localhost:8000/api/admins', {
      company: this.state.company,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      login_admin: this.state.username,
      password_admin: this.state.password,
      city: this.state.city,
      zip: this.state.zip,
      address1: this.state.adress,
      description_company: this.state.description,
      phone_company: this.state.phone,
      email: this.state.email,
      photo: this.state.photo
    })
    alert("Votre compte a été créé! Incroyable n'est ce pas ?")
  }

  render() {
    return (
      <div className='formAdminContainer'>
        <img
          src='https://zupimages.net/up/19/50/0b2g.png'
          className='LogoNytte'
          alt='logo Nytte'></img>
        <form onSubmit={this.handleSubmit}>
          <div className='form-example'>
            <label htmlFor='company'>Nom établissement</label>
            <input
              type='text'
              name='company'
              id='company'
              onChange={this.change}
              required
            />
          </div>
          <hr />
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
          <hr />
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
          <hr />
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
          <hr />
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
          <hr />
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
          <hr />
          <div className='form-example'>
            <label htmlFor='zip'>Code postal</label>
            <input
              type='number'
              name='zip'
              id='zip'
              onChange={this.change}
              required
            />
          </div>
          <hr />
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
          <hr />
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
          <hr />
          <div className='form-example'>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              name='description'
              id='description'
              onChange={this.change}
              required
            />
          </div>
          <hr />
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
          <hr />
          <div className='form-example'>
            <label htmlFor='photo'>Photo</label>
              <form method="POST" enctype="multipart/form-data" action="uploaddufichier">
                <input type="file" name="monfichier"/>
                <button> envoyer </button>
              </form>
          </div>
          <hr />
          <div className='inputForm'>
            <input
              onClick={this.postFormData}
              type='submit'
              value='VALIDER >'
            />
          </div>
        </form>
      </div>
    )
  }
}
export default FormAdmin
