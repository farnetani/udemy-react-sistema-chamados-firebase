import Breadcrump from '../../components/Breadcrump'
import { useAuth } from '../../contexts/auth'

import { Container } from './styles'

export default function Dashboard() {
  // const { signOut } = useContext(AuthContext)
  const { signOut } = useAuth()
  return (
    <>
      <Breadcrump name="Home > Dashboard" />
      <Container>
        <h1>
          Dashboard sadfas fklas fdjasfkas faskf asklfjalsdf ajskfd asjfas fdka
          sjdfklas fd
        </h1>
        <button onClick={() => signOut()}>Fazer Logout </button>
      </Container>
    </>
  )
}
