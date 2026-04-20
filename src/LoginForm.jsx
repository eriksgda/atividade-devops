import { useState } from 'react'

export default function LoginForm({ expectedEmail, expectedPassword }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = email === expectedEmail && password === expectedPassword
    setMessage(isValid ? 'Acessado com sucesso!' : 'Usuário ou senha incorretos!')
  }

  return (
    <section className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          E-mail
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="teste@example.com"
          />
        </label>
        <label className="form-label">
          Senha
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Digite sua senha"
          />
        </label>
        <button type="submit" className="submit-button">
          Acessar
        </button>
      </form>
      <p className={`status ${message === 'Acessado com sucesso!' ? 'success' : 'error'}`}>
        {message}
      </p>
    </section>
  )
}
