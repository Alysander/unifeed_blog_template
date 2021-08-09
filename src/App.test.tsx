import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the logo', async () => {
  render(<App />);

  expect(await screen.findByAltText(/Unifeed logo/)).toBeInTheDocument();
});
