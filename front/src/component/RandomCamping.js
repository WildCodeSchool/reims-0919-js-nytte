import React from 'react';
import axios from 'axios'
import DisplayAdmin from './DisplayAdmin'


class RandomCamping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campings : null,
      currentCamping: 0
    };
    this.nextCamping = this.nextCamping.bind(this);
  }

  nextCamping(){
    this.setState((prevState) => {
      return {
        currentCamping: (prevState.currentCamping + 1) % prevState.campings.length
      };
    });
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/admins')
    .then(response => response.data)
    .then(data =>{
      this.setState({
        campings: data,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.campings && <DisplayAdmin camping={this.state.campings[this.state.currentCamping]}/>}
        <button  type="button" onClick={this.nextCamping}>Suivant</button>
      </div>
    );
  }
}

export default RandomCamping