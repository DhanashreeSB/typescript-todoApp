import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

window.scrollTo = jest.fn();

test('renders Plan your Work', () => {
  render(<App />);
  const linkElement = screen.getByText("Plan Your Work");
  expect(linkElement).toBeInTheDocument();
});
