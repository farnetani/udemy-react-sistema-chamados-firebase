import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Breadcrump from '../../components/Breadcrump'
import { Container } from './MainStyles'

interface MainProps {
  children: ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <Container>
      <Breadcrump name="Main" />

      {children}
      <Link to="/admin">Voltar</Link>
    </Container>
  )
}
