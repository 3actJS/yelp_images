import React from 'react';
import { shallow } from 'enzyme';
import sampleResponse from '../client/src/sampleResponse.js'

// importing actual component
import ImageContainer from '../client/src/components/ImageContainer';

describe('ImageContainer test suite', () => {
    it('should render the ImageContainer component on screen', () => {
        //console.log(sampleResponse);
        const wrapper = shallow(<ImageContainer images={sampleResponse}/>);
        expect(wrapper).toExist();          
    })
})