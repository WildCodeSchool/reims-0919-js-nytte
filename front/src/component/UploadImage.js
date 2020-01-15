import React from 'react'
const axios = require("axios");

class UploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post('http://localhost:8000/api/upload',formData,config)
            .then((response) => {
                this.props.savePicture(response.data.filename)
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default UploadImage