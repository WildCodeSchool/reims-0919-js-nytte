import React from 'react'
import './FormAdmin.css'
import axios from 'axios'

class LoginAdmin extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.postFormData = this.postFormData.bind(this)
    this.state = {
      username: null,
      password: null
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
    axios
      .post('http://localhost:8000/api/admins/login', {
        loginAdmin: this.state.username,
        passwordAdmin: this.state.password
      })
      .then(res => {
        console.log('Yes! ', res.data)
      })
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
export default LoginAdmin
