import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'

test('form test', () => {
  render(<App />)

  fireEvent.click(screen.getByText('Submit'))

  expect(screen.getByText('Success')).toBeInTheDocument()
})