import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protection = ({children}) => {

  const {user} = useSelector(store => store.user)
  const navigate = useNavigate()

  useEffect( () => {
    if(!user){
      navigate("/")
    }
  },[] )

  return (
    <div>
      {children}
    </div>
  )
}

export default Protection
