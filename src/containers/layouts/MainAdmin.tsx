import React, { ReactNode } from 'react'
import Breadcrump from '../../components/Breadcrump'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { useAuth } from '../../contexts/auth'
import usePersistedState from '../../utils/usePersistedState'

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/global'

interface MainAdminProps {
  children: ReactNode
}

export default function MainAdmin({ children }: MainAdminProps) {
  const { signOut, signed } = useAuth()
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
    console.log('mudou')
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Sidebar />
      {children}
    </ThemeProvider>
  )
}
