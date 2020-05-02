import React from 'react'

class ImageItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { imageId,
                imageTitle,
                itemImage,
                imageCategory,
                imageDescription,
                imageUploadDate,
                userId,
                restaurantId } = this.props.image;

        const imageContainerStyle = {
                border: '1px solid black',
                margin: '20px',
                padding: '20px'
            };

        return(
            <div>
                <div className="imageContainer" style={imageContainerStyle}>
                    <div>{imageId}</div>
                    <div>{imageTitle}</div>
                    <div>
                        <img src={itemImage} alt="food image" height="100" width="100"/>
                    </div>
                    <div>{imageCategory}</div>
                    <div>{imageDescription}</div>
                    <div>{imageUploadDate}</div>
                    <div>{userId}</div>
                    <div>{restaurantId}</div>
                </div>
            </div>
        );
    }
}

export default ImageItem