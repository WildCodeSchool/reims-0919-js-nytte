import React from 'react'
import './FormAdmin.css'
import UploadImage from './UploadImage'

class FormVacationer extends React.Component {
  constructor(props) {
    super(props)
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
      <div className='formAdminVacationer'>
        <img
          src='https://zupimages.net/up/19/50/0b2g.png'
          className='LogoNytte'
          alt='logo Nytte'></img>
        <h1>Création d'un vacancier</h1>
        <form>
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
            <UploadImage
                  savePicture = {this.savePicture}
           />
          </div>
        </form>
        <button 
          className="createButton"
          onClick={() => this.props.postFormDataVacat(this.state)}
          type='submit'
          value='Créer'
        >
          Valider
        </button>
      </div>
    </div>
    )
  }
}
export default FormVacationer;
