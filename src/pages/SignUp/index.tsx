import React, { useState } from 'react'
// import { AuthContext } from '../../contexts/auth'
import { useAuth } from '../../contexts/auth'

import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Button from '../../components/Button'

function SignUp() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const { signUp, loadingAuth } = useContext(AuthContext)
  const { signUp, loadingAuth } = useAuth()

  function handleSubmit(e: any) {
    e.preventDefault()
    if (nome !== '' && email !== '' && password !== '') {
      signUp(email, password, nome)
    }
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do Sistema" />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">
            {loadingAuth ? 'Carregando...' : 'Cadastrar'}
          </Button>
        </form>

        <Link to="/">Já possuo cadastro</Link>
      </div>
    </div>
  )
}

export default SignUp
