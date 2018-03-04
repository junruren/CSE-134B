import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils'
import TestRenderer from 'react-test-renderer';
import DriverHome from '../src/DriverHome';


describe('Driver homepage', () => {
	const testRenderer = TestRenderer.create(<DriverHome />);
	const testInstance = testRenderer.root;

	describe('Upon loading', () => {
	   it('adds driver to body className', () => {
	       	expect(testInstance.findByProps({className: "container"}).type).toBe('div');   
	   });
	});

});
