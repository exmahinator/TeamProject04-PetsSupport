import React from 'react'
import { Navigate } from 'react-router-dom'
import {useAuth} from '../../../shared/hooks/useAuth'

export const PublicRouter = ({ children, restricted = false, redirect = '/' }) => {
  const isLogin = useAuth()
  const shouldRedirect = isLogin && restricted;
  
	return shouldRedirect ? <Navigate to={redirect} /> : children;
}
