import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';

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
    z-index: 1018;
    h1 {
        color: white;
    }
`;

const InnerModalContainer = styled.div`
    position: relative;
    height: 100%;
    background: #333;
    background: rgba(0,0,0,.7);
    -webkit-user-select: text;
    user-select: text;
    max-width: 1300px;
    min-width: 960px;
    min-height: 400px;
    margin: 40px auto 0 auto;
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
    }
    svg {
        fill: #ffffff;
    }
`;

const PlaceHolderContainer = styled.div`
    color: #ffffff;
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
                        <span onClick={hideModal}>Close</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg">
                                <path d="M17.657 19.07L12 13.415 6.343 19.07 4.93 17.658 10.585 12 4.93 6.343 6.342 4.93 12 10.585l5.657-5.657L19.07 6.34 13.416 12l5.657 5.657-1.413 1.414z">
                                </path>
                            </svg>
                        </span>
                        </a>
                    </p>
                    <PlaceHolderContainer>
                        <p>placeholder for displaying all the images</p>
                    </PlaceHolderContainer>
                </InnerModalContainer>
                </MainContainer>
            }
        </div>
    );
});

export default ModalContainer;