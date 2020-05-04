import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-right: 2px solid white;
`;

const ImageItem = ({image}) => (
    <Div>
        <span>       
            <img src={image.itemImageUrl} alt="food image" height="250" width="250"/>           
        </span>
    </Div>
)

export default ImageItem