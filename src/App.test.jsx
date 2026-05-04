import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('should render the RegisterPage component by default', () => {
    render(<App />)

    const heading = screen.getByText('Cadastro')

    expect(heading).toBeDefined()
  })
})