import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { useAuth } from '../../contexts/auth'

import usePersistedState from '../../utils/usePersistedState'

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/global'

import Routes from '../../routes'
import { BrowserRouter } from 'react-router-dom'

export default function Layout() {
  const { signOut, signed } = useAuth()
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
    console.log('mudou')
  }

  // Função que valida se está logado pra mostrar Sidebar
  function CreateLayout() {
    if (signed) {
      return (
        <>
          <Header toggleTheme={toggleTheme} />
          <Sidebar />
        </>
      )
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>{CreateLayout()}</div>
    </ThemeProvider>
  )
}
