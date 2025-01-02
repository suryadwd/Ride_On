import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const ProtectionCap = ({children}) => {

  const {caption} = useSelector(store => store.caption)
  const navigate = useNavigate()

  useEffect( () => {
    if(!caption){
      navigate("/")
    }
  },[] )

  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectionCap
