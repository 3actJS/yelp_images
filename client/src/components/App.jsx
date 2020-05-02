import React from 'react'
import ImageContainer from './ImageContainer.jsx'
import images from '../sampleResponse.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: images
        }
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