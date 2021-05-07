import React from 'react'
import { AuthProvider } from './contexts/auth'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'

// import firebase from './services/firebaseConnection'
// import Sidebar from './components/Sidebar'

function App() {
  return (
    <AuthProvider>
      <ToastContainer autoClose={3000} />
      <Routes />
    </AuthProvider>
  )
}

export default App
