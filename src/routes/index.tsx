import React from 'react'
import { useAuth } from '../contexts/auth'

import SignRoutes from './SignRoutes'
import AppRoutes from './AppRoutes'

const Routes: React.FC = () => {
  const { signed } = useAuth()

  return signed ? <AppRoutes /> : <SignRoutes />
}

export default Routes
