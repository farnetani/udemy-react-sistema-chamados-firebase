import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/auth'

import Routes from './routes'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import Header from './components/Header'

import firebase from './services/firebaseConnection'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  console.log(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <div className="App">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
