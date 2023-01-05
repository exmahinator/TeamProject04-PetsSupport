import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServices, getServicesError, getServicesLoading } from '../../redux/services/services-selectors'
import { getAllServices } from '../../redux/services/services-operations'

const OurFriendsPage = () => {
  const dispatch = useDispatch()
  const services = useSelector(getServices)
  const isLoading = useSelector(getServicesLoading)
  const error = useSelector(getServicesError)

  useEffect(() => {
  dispatch(getAllServices())
  }, [dispatch])
  
  console.log(services)
  console.log(isLoading)
  console.log(error)

  return (
    <div>OurFriendsPage</div>
  )
}

export default OurFriendsPage