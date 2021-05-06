import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import AuthProvider from './contexts/auth'
import { AuthProvider } from './contexts/auth'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import Routes from './routes'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

// import light from './styles/themes/light'
// import dark from './styles/themes/dark'

// import GlobalStyle from './styles/global'

// import firebase from './services/firebaseConnection'

function App() {
  // const [theme] = usePersistedState<DefaultTheme>('theme', light)

  // const toggleTheme = () => {
  //   setTheme(theme.title === 'light' ? dark : light)
  // }
  // console.log(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)
  return (
    <AuthProvider>
      <div className="App">
        {/* <GlobalStyle /> */}
        <BrowserRouter>
          <ToastContainer autoClose={3000} />
          <Routes />
        </BrowserRouter>
      </div>
    </AuthProvider>
  )
}

export default App
