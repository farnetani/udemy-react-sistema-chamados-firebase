import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function SignUp() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: any) {
    e.preventDefault()
    alert('clicou')
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
          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/">Já possuo cadastro</Link>
      </div>
    </div>
  )
}

export default SignUp
