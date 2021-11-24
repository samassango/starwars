import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  
});
test('test App component snapshot',()=>{
  const {container, getByText} = render(<App />);
  expect(container.firstChild).toMatchSnapshot()
})
