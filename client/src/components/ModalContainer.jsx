import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import ModalImagesContainer from './ModalImagesContainer.jsx';

const MainContainer=styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    background: #333;
    background: rgba(0,0,0,.7);
    box-sizing: border-box;
    -webkit-user-select: none;
    user-select: none;
    border-radius: 0 0 4px 4px;
    z-index: 1018;
    h1 {
        color: white;
    }
`;

const InnerModalContainer = styled.div`
    position: relative;
    height: 90%;
    background: #333;
    background: rgba(0,0,0,.7);
    -webkit-user-select: text;
    user-select: text;
    max-width: 1300px;
    min-width: 960px;
    min-height: 400px;
    margin: 40px;
    .closeBtn {
        left: -40px;
        position: absolute;
        top: 2px;
    };
    p {
        color: #ffffff;
        a {
            position: absolute;
            right: 0; 
            bottom: 100%;          
            text-align: right;
            text-shadow: 0 1px 1px rgba(0,0,0,.8);
            text-decoration: none;
        }
    };
    svg {
        fill: #ffffff;
    }
`;

const PlaceHolderContainer = styled.div`
    color: #ffffff;
    .carouselComponent {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 360px;
        border: 1px solid white;
    };
    .imagesComponent {
        right: 0;
        width: 360px;
        position: absolute;
        top: 0;
        bottom: 0;
        border: 1px solid white;
        background-color: #ffffff;
    }
`;

const ModalContainer = forwardRef((props, ref) => {
    const [value, setValue] = useState(false);

    const showModal = () => {
        setValue(true);
    };

    const hideModal = () => {
        setValue(false);
    };

    useImperativeHandle(ref, () => {
        return {
            showModal: showModal
        };
    });

    return (
        <div>
            {value && <MainContainer>
                <InnerModalContainer>
                    <p>
                        <a>
                        <span className="closeBtn" onClick={hideModal}>Close</span>
                        <span onClick={hideModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg">
                                <path d="M17.657 19.07L12 13.415 6.343 19.07 4.93 17.658 10.585 12 4.93 6.343 6.342 4.93 12 10.585l5.657-5.657L19.07 6.34 13.416 12l5.657 5.657-1.413 1.414z">
                                </path>
                            </svg>
                        </span>
                        </a>
                    </p>
                    <PlaceHolderContainer>
                        <div className="carouselComponent">
                            <ImageCarousel images={props.allImages} selectedImage={props.clickedImage}/>
                            <UserInfo userInfo={props.allUsers}/>   
                        </div>
                        <div className="imagesComponent">
                            <ModalImagesContainer images={props.allImages}/>
                        </div>
                    </PlaceHolderContainer>
                </InnerModalContainer>
                </MainContainer>
            }
        </div>
    );
});

export default ModalContainer;