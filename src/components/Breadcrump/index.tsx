import { ReactNode } from 'react'
import { Container } from './styles'

interface BreadcrumpProps {
  children?: ReactNode
  name: string
}
export default function Breadcrump({ children, name }: BreadcrumpProps) {
  return (
    <Container>
      {children}
      <span>{name}</span>
    </Container>
  )
}
