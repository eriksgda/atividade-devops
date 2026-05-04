import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase/firebase'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (event) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'usuario', user.uid), {
        email: email,
        nome: name,
        sobrenome: lastName,
        dataNascimento: birthDate,
        uid: user.uid
      });

      setMessage('Cadastro realizado com sucesso!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setMessage(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-card">
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
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
        <label className="form-label">
          Nome
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Seu nome"
            required
          />
        </label>
        <label className="form-label">
          Sobrenome
          <input
            className="form-input"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Seu sobrenome"
            required
          />
        </label>
        <label className="form-label">
          Data de Nascimento
          <input
            className="form-input"
            type="date"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
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
