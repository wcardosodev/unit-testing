const React = require('react');
const Enzyme = require('enzyme');
const { shallow } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const { Counter } = require('./Counter');
 
Enzyme.configure({ adapter: new Adapter() });

describe('Testing counter page', () => {
    const wrapper = shallow(<Counter />);
    test('render header text', () => {
        expect(wrapper.find('.app h1').text()).toBe('Counter');
    });

    test('render counter init value', () => {
        expect(wrapper.find('#counter-text').text()).toBe("0");
    });

    describe('render buttons', () => {
        test('render increment', () => {
            expect(wrapper.find('.btn-inc').text()).toBe('Increment');
        });

        test('render decrement', () => {
            expect(wrapper.find('.btn-dec').text()).toBe('Decrement');
        });
    });

    describe('test button onClick', () => {
        test('increment', () => {
            const currentValue = parseInt(wrapper.find('#counter-text').text());

            wrapper.find('.btn-inc').simulate('click');
            expect(wrapper.find('#counter-text').text()).toBe((currentValue + 1).toString());
        });

        test('decrement', () => {
            const currentValue = parseInt(wrapper.find('#counter-text').text());

            wrapper.find('.btn-dec').simulate('click');


            expect(wrapper.find('#counter-text').text()).toBe((currentValue !== 0 ? currentValue - 1 : 0).toString());
        });
    });
});