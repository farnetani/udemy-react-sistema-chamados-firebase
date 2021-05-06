export interface IUserValue {
  user: {
    uid: number
    nome: string
    avatarUrl: string
    email: string
  }
}

export interface IUser {
  uid: number
  nome: string
  avatarUrl: string
  email: string
}

export interface AuthContextData {
  signed: boolean
  user?: IUser
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, nome: string) => Promise<void>
  signOut: () => Promise<void>
  loadingAuth: boolean
}
