import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the logo', async () => {
  render(<App />);

  expect(await screen.findByAltText(/Unifeed logo/)).toBeInTheDocument();
});


test('renders the hamburger menu', async () => {
  render(<App />);
  expect(await screen.findByAltText(/Menu/)).toBeInTheDocument();
})

test('shows the copyright', async () => {
  render(<App />);
  expect(await screen.findByText("Unifeed © 2017 All Copyrights Not Reserved")).toBeInTheDocument();
})

describe('twitter blog post', () => {
  test('shows the heading', async () => {
    render(<App />)
    expect(await screen.findByTitle("Weekly Newsletter: Tweets for Higher Engagements")).toBeInTheDocument();

  });
})