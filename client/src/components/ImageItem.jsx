import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-right: 2px solid white;
  img {
    height: 100%;
    width: 350px;
    object-fit: cover;
    vertical-align: middle;
  }
`;

const ImageItem = ({image}) => (
    <Div>
        <span>       
            <img src={image.itemImageUrl} alt="food image"/>           
        </span>
    </Div>
)

export default ImageItem