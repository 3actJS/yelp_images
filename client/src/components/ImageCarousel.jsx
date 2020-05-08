import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    height: 100%;
    text-align: center;
    font-size: 0;
    background: #000;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    img {
        width: 541px;
        height: 593px;
        vertical-align: middle;
        display: inline-block;
    }
`;

const ImageCarousel = (props) => {
    return (
        <div>
           <ImageContainer>
             <img src={props.selectedImage.itemImageUrl} alt="food image"/>     
           </ImageContainer>
        </div>
    );
}

export default ImageCarousel;