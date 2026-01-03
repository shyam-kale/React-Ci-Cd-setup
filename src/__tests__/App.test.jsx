import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

test('renders heading text', () => {
  render(<App />)

  const heading = screen.getByText(/Vite \+ React/i)
  expect(heading).toBeInTheDocument()
})

test('counter increments when button is clicked', () => {
  render(<App />)

  // initial state
  const button = screen.getByText(/count is 0/i)
  expect(button).toBeInTheDocument()

  // click
  fireEvent.click(button)

  // after click
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument()
})
