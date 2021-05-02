import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signin.scss'
import logo from '../../assets/logo.png'

import { FiMail, FiLock } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Footer, LoginLogo } from './styles'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: any) {
    e.preventDefault()
    alert('clicou')
  }

  return (
    // <div className="container-center">
    <Container>
      <Content>
        {/* <div className="login"> */}
        {/* <div className="login-area">
          <img src={logo} alt="Logo do Sistema" />
        </div> */}
        <LoginLogo>
          <img src={logo} alt="Logo do Sistema" />
        </LoginLogo>
        <form onSubmit={handleSubmit}>
          <h1>Faça o seu Login</h1>
          {/* <input
            type="text"
            placeholder="seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <Input
            icon={FiMail}
            name="email"
            placeholder="E-mail"
            autoComplete="false"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        {/* <div className="login-rodape"> */}
        <Footer>
          <Link to="/register">Criar uma conta</Link>
          <Link to="/register">Esqueci a minha senha</Link>
        </Footer>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </Content>
    </Container>
  )
}

export default SignIn
