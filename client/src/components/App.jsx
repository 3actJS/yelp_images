import React from 'react';
import ImageContainer from './ImageContainer.jsx';
import styled from 'styled-components';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
        this.getImages = this.getImages.bind(this);
    }

    componentDidMount() {
        this.getImages();
    }

    // error handling
    handleError(error) {
        console.log(error);
    }

    getImages() {
        axios.get('/images')
        .then(res => this.setState({images: res.data}))
        .catch(this.handleError) 
    }

    render() {
        return(
            <div>
                <ImageContainer images={this.state.images}/>
            </div>
        );       
    }
}

export default App;