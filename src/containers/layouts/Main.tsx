import React, { ReactNode } from 'react'
import Breadcrump from '../../components/Breadcrump'
import Sidebar from '../../components/Sidebar'

interface MainProps {
  children: ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <div>
      <Breadcrump name="Main" />
      <Sidebar />
      {children}
    </div>
  )
}
