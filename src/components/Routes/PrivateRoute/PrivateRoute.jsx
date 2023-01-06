import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import { getToken, isAuth } from 'redux/auth/auth-selectors';

export const PrivateRoute = () => {
   const isLogin = useSelector(isAuth);
   const token = useSelector(getToken)

console.log(isLogin)
   if (!token || !isLogin) {
      return <Navigate to={'/'}/>
   }
   
  return (
    <Outlet/>
  )
}
