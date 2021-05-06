// import { useContext } from 'react' // substituido pelo hookpersonalizado que fiz em useAuth
import Sidebar from '../../components/Sidebar'

// import { AuthContext } from '../../contexts/auth'

import { useAuth } from '../../contexts/auth'

export default function Dashboard() {
  // const { signOut } = useContext(AuthContext)
  const { signOut } = useAuth()
  return (
    <div>
      <Sidebar />
      <h1>Dashboard</h1>
      <button onClick={() => signOut()}>Fazer Logout </button>
    </div>
  )
}
