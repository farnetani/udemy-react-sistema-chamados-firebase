// import { useContext } from 'react'
// import { AuthContext } from '../../contexts/auth'
import { useAuth } from '../../contexts/auth'
import avatar from '../../assets/avatar.png'

import { Link } from 'react-router-dom'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

import { Container, Content } from './styles'
import { AuthContextData } from '../../types'

export default function Sidebar() {
  // const { user } = useContext<IUser>(AuthContext as IUser)
  const { user, signOut }: AuthContextData = useAuth()

  return (
    <Container>
      <div>
        <img
          src={user?.avatarUrl !== '' ? avatar : user?.avatarUrl}
          alt="Foto avatar"
        />
      </div>

      <Link to="/dashboard">
        <FiHome color="#FFF" size={24} />
        Chamados
      </Link>
      <Link to="/customers">
        <FiUser color="#FFF" size={24} />
        Clientes
      </Link>
      <Link to="/profile">
        <FiSettings color="#FFF" size={24} />
        Configurações
      </Link>
      <Link to="#" onClick={() => signOut()}>
        <FiSettings color="#FFF" size={24} />
        Logout
      </Link>
    </Container>
  )
}
