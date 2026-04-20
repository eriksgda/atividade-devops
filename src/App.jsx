import LoginForm from './LoginForm.jsx'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <LoginForm
        expectedEmail="eduardo.lino@pucpr.br"
        expectedPassword="123456"
      />
    </div>
  )
}

export default App
