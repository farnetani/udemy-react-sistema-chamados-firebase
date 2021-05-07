import React from 'react'
import { AuthProvider } from './contexts/auth'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'

import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'

import { useAuth } from './contexts/auth'
import usePersistedState from './utils/usePersistedState'
// import firebase from './services/firebaseConnection'
// import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'

function App() {
  const { signOut, signed } = useAuth()
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
    console.log('mudou')
  }

  function ActiveApp() {
    if (signed) {
      return (
        <>
          <Header toggleTheme={toggleTheme} />
        </>
      )
    } else {
      return <Redirect to="/login" />
    }
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        {/* {ActiveApp()} */}
        {/* <Header toggleTheme={toggleTheme} /> */}
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
