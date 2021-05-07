import { useAuth } from '../../contexts/auth'

export default function Dashboard() {
  // const { signOut } = useContext(AuthContext)
  const { signOut } = useAuth()
  return (
    <div>
      <h1>
        Dashboard sadfas fklas fdjasfkas faskf asklfjalsdf ajskfd asjfas fdka
        sjdfklas fd
      </h1>
      <button onClick={() => signOut()}>Fazer Logout </button>
    </div>
  )
}
