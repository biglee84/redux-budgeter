import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import StatelessComponent from '../app/components/StatelessComponent';

describe('<StatelessComponent>', function () {

    it('should do stuff', () => {
        const wrapper = shallow(<StatelessComponent />);
        expect(wrapper.length).to.eql(1);
    });

});