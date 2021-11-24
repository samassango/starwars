import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Main from './index';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

jest.mock('react-router-dom',()=>({
...jest.requireActual('react-router-dom'),
useNavigate:()=>jest.fn()
}));

test('renders main component', () => {
  const wrapper = shallow(<Main />);
  expect(wrapper).toBeTruthy();
});

test('renders main component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toBeTruthy();
  });

  test('component should contain "ROW"',()=>{
    const wrapper = shallow(<Main />);
    expect(wrapper.find('.justify-content-md-center')).toBeTruthy();
});

test('test component snapshot',()=>{
    const {container, getByText} = render(<Main />);
    expect(container.firstChild).toMatchSnapshot()
})
