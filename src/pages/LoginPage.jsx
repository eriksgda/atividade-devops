import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Login realizado com sucesso!');
      setTimeout(() => navigate('/profile'), 2000);
    } catch (error) {
      setMessage('Usuário ou senha incorretos!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label className="form-label">
          E-mail
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="seu@email.com"
            required
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
            required
          />
        </label>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Acessando...' : 'Acessar'}
        </button>
      </form>
      {message && (
        <p className={`status ${message.includes('sucesso') ? 'success' : 'error'}`}>
          {message}
        </p>
      )}
    </section>
  )
}
