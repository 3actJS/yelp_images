import React from 'react'
import ImageItem from './ImageItem.jsx'

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { images } = this.props;
        return(
            <div>
                {images.map((image) =>
                    <ImageItem image={image}/>
                )}
            </div>
        );
    }
}

export default ImageContainer