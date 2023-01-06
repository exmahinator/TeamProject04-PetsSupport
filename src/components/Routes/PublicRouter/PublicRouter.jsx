import React from 'react'
import { Navigate } from 'react-router-dom'
import {useAuth} from '../../../shared/hooks/useAuth'

export const PublicRouter = ({children}) => {
  const isLogin = useAuth()

   if (isLogin) {
      return <Navigate to={'/'}/>
   }
   
  return (
    {children}
  )
}
