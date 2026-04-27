import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from './LoginForm'

describe('LoginForm button interaction', () => {
  it('should show error message when credentials are incorrect', () => {
    render(<LoginForm expectedEmail="test@example.com" expectedPassword="123456" />)

    const emailInput = screen.getByPlaceholderText('teste@example.com')
    const passwordInput = screen.getByPlaceholderText('Digite sua senha')
    const button = screen.getByRole('button', { name: /acessar/i })

    fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } })
    fireEvent.change(passwordInput, { target: { value: '123456' } })
    fireEvent.click(button)

    expect(screen.getByText('Usuário ou senha incorretos!')).toBeDefined()
  })
})