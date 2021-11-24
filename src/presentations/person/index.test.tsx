import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import Person from './index';


const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

const person =[{"name":"Ketty"}];

jest.mock('react',()=>({
    ...jest.requireActual('react'),
    useMemo: ()=>jest.fn(()=>person[0])
}))

test('renders person component', () => {
  const wrapper = shallow(<Person />);
  expect(wrapper.find('.justify-content-end')).toBeTruthy();
});

test('component should contain "ROW"',()=>{
    const wrapper = shallow(<Person />);
    expect(wrapper.find('.justify-content-md-center')).toBeTruthy();
});

test('component should contain "Star wars Details"',()=>{
   const {container, getByText} = render(<Person />);
    expect(getByText('Star wars Details')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot()

});