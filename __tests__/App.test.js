import React from 'react';
import { shallow } from 'enzyme';
import sampleResponse from '../client/src/sampleResponse.js'

// importing actual component
import App from '../client/src/components/App';

describe('App test suite', () => {
    it('should render the App component on screen', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toExist();    
    })
})