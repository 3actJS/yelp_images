import React from 'react';
import ImageItem from './ImageItem.jsx';
import styled from 'styled-components';

const Div = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-x: auto;
`;

const ImageContainer = ({images}) => (
    <Div>
        {images && images.map((image) =>
            <ImageItem image={image}/>
        )}
    </Div>    
)

export default ImageContainer