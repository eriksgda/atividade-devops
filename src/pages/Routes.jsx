import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from '../LoginForm'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import ProfilePage from './ProfilePage'

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        {/* Etapa 1 de Tecnologias para desenvolvimento web - (UTILIZADA PARA DEVOPS) */}
        <Route path="/auth" element={<LoginForm expectedEmail="eduardo.lino@pucpr.br" expectedPassword="123456" />} />

        {/* Etapa 2 - Tecnologias para desenvolvimento web */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Rota padrão - vai para Etapa 2 */}
        <Route path="/" element={<Navigate to="/register" replace />} />
      </Routes>
    </HashRouter>
  )
}
