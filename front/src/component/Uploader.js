import React, { Component } from 'react';
import axios from 'axios';

class Uploader extends Component {

  state = {
    imageUrl: 'https://placeimg.com/320/320/animals' 
  }
  
  handleUploadFile = (event) => {
    const data = new FormData()
    axios.post('/files', data).then((response) => {
      this.setState({
        imageUrl: response.data.fileUrl
      })
    })
  }
    
  render() {
    return(
      <div>
        <img width='320' src={this.state.imageUrl} />
        <div>
          <input type="file" onChange={this.handleUploadFile}/>
          <button > envoyer </button>
        </div>  
      </div>
    )
  }
}

export default Uploader