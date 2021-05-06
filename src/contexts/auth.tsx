import {
  useState,
  createContext,
  useEffect,
  ReactNode,
  useContext
} from 'react'
import firebase from '../services/firebaseConnection'
import { toast } from 'react-toastify'
import { AuthContextData, IUser } from '../types'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const initialValue = {
  uid: 0,
  nome: '',
  avatarUrl: '',
  email: ''
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>(initialValue)
  // const [user, setUser] = useState({ id: 1, nome: 'junior' })
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('SistemaUser')
      if (storageUser) {
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }

    loadStorage()
  }, [])

  // Fazer login
  async function signIn(email: string, password: string) {
    setLoadingAuth(true)

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value: any) => {
        console.log('tipo', value)
        const uid = value.user.uid
        const userProfile: any = await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .get()

        const data: any = {
          uid: uid,
          nome: userProfile.data().nome,
          avatarUrl: userProfile.data().avatarUrl,
          email: value.user.email
        }

        setUser(data)
        storageUser(data)
        setLoadingAuth(false)
        toast.success('Bem vindo ao Sistema!')
      })
      .catch((error) => {
        console.log(error)
        toast.error('Ops, ocorreu um erro: ' + error)
        setLoadingAuth(false)
      })
  }

  // Cadastrar um novo usuário
  async function signUp(email: string, password: string, nome: string) {
    setLoadingAuth(true)

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value: any) => {
        const uid = value.user.uid

        await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .set({ nome: nome, avatarUrl: null })
          .then(() => {
            const data: any = {
              uid: uid,
              nome: nome,
              email: value.user.email,
              avatarUrl: null
            }

            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            toast.success('Usuário cadastrado com sucesso!')
          })
      })
      .catch((error) => {
        console.log(error)
        setLoadingAuth(false)
        toast.error('Ops, ocorreu um erro: ' + error)
      })
  }

  function storageUser(data: any) {
    localStorage.setItem('SistemaUser', JSON.stringify(data))
  }

  async function signOut() {
    await firebase.auth().signOut()
    localStorage.removeItem('SistemaUser')
    // setUser(null)
    setUser(initialValue)
    toast.success('Logout efetuado com sucesso!')
  }

  return (
    // !! : converte para boleano
    <AuthContext.Provider
      value={{
        signed: !!user.uid,
        user,
        loading,
        signUp,
        signOut,
        signIn,
        loadingAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// export default AuthProvider

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
