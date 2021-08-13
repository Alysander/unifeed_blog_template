import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders the logo', async () => {
  render(<App />);

  expect(screen.getAllByAltText(/Unifeed logo/)[0]).toBeInTheDocument();
});

test('shows the copyright', async () => {
  render(<App />);
  expect(await screen.findByText("Unifeed © 2017 All Copyrights Not Reserved")).toBeInTheDocument();
})

describe('twitter blog post', () => {
  test('shows the heading', () => {
    render(<App />)
    expect(screen.getByRole("heading", { name: "Weekly Newsletter: Tweets for Higher Engagements" })).toBeInTheDocument();
  });
})

describe("the hamburger menu", () => {

  test('renders the hamburger menu', async () => {
    render(<App />);
    expect(await screen.findByAltText(/Menu/)).toBeInTheDocument();
  })
  test('clicking the menu button opens the menu', async () => {
    render(<App />);
    const menu = screen.getByAltText(/Menu/);

    expect(menu).toBeInTheDocument()
    menu.click();

    expect(screen.getAllByText("Home")[0]).toBeVisible();

    expect(screen.getAllByText("Features")[0]).toBeVisible();
    expect(screen.getAllByText("Pricing")[0]).toBeVisible();
    expect(screen.getAllByRole("button", { name: "Subscribe" })[0]).toBeVisible();

  })
})