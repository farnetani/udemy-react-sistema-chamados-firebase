import React from 'react'
import Sidebar from '../../components/Sidebar'
import { useAuth } from '../../contexts/auth'
import Header from '../../components/Header'

import usePersistedState from '../../utils/usePersistedState'

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/global'

export default function Layout() {
  const { signOut } = useAuth()
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
    console.log('mudou')
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Header toggleTheme={toggleTheme} />
        <Sidebar />
        <h1>Dashboard</h1>
        <button onClick={() => signOut()}>Fazer Logout </button>
      </div>
    </ThemeProvider>
  )
}
