import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils'
import TestRenderer from 'react-test-renderer';
import Home from '../src/Home';


describe('Homepage', () => {
	const testRenderer = TestRenderer.create(<Home />);
	const testInstance = testRenderer.root;

	describe('Upon loading', () => {
	   it('adds driver to body className', () => {
	       	expect(testInstance.findByProps({className: "container"}).type).toBe('div');   
	   });
	});

});
