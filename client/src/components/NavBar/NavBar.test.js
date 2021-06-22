import React from 'react';
import {Link} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import NavBar from './NavBar';

Enzyme.configure({adapter: new Adapter()});

describe('<NavBar />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<NavBar />);
	});

	it('Should render two Link components', () => {
		expect(wrapper.find(Link)).toHaveLength(2);
	});
	it('First Link, LOGO must redirect to path /home', () => {
		expect(wrapper.find(Link).at(0).prop('to')).toEqual('/home');
	});
	it('Second Link, must redirect to path /create_dog', () => {
		expect(wrapper.find(Link).at(1).prop('to')).toEqual('/create_dog');

		expect(wrapper.find(Link).at(1).text()).toEqual('Create a dog');
	});
});