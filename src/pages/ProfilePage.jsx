import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase/firebase'

export default function ProfilePage() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const docSnap = await getDoc(doc(db, 'usuario', currentUser.uid));
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
        }
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/register');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  if (loading) {
    return <div className="login-card"><p>Carregando...</p></div>
  }

  return (
    <section className="login-card">
      <h2>Perfil do Usuário</h2>
      {userData ? (
        <div>
          <p><strong>Nome:</strong> {userData.nome}</p>
          <p><strong>Sobrenome:</strong> {userData.sobrenome}</p>
          <p><strong>Data de Nascimento:</strong> {userData.dataNascimento}</p>
          <button onClick={handleLogout} className="submit-button">
            Sair
          </button>
        </div>
      ) : (
        <p>Dados do usuário não encontrados</p>
      )}
    </section>
  )
}
