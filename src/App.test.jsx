import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('should render the LoginForm component', () => {
    render(<App />)

    const heading = screen.getByText('Login')

    expect(heading).toBeDefined()
  })
})