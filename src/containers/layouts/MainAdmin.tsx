import React, { ReactNode } from 'react'
import Breadcrump from '../../components/Breadcrump'
import Sidebar from '../../components/Sidebar'

interface MainAdminProps {
  children: ReactNode
}

export default function MainAdmin({ children }: MainAdminProps) {
  return (
    <div>
      <Breadcrump name="Admin" />
      <Sidebar />
      {children}
    </div>
  )
}
