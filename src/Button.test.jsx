import { render, screen } from '@testing-library/react'
import Button from './Button'
import '@testing-library/jest-dom'

test('button render test', () => {
  render(<Button />)
  expect(screen.getByText('Click Me')).toBeInTheDocument()
})