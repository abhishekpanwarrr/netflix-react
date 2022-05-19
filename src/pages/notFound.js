import React from 'react'
import { useNavigate} from 'react-router-dom'
import useAuthListner from '../helpers/use-auth-listner'
import * as ROUTES from '../constants/routes'
const NotFound = () => {
  const {user} = useAuthListner()
  const navigate = useNavigate()
  const goBack = () => user ? navigate(ROUTES.BROWSE): navigate(ROUTES.HOME)

  return (
    <>
    <h3 style={{color:'white'}}>
          NOT FOUND 404      
    </h3>
    <button type='button' onClick={goBack}>{user ? 'GO BACK' :'HOME'}</button>
    </>
  )
}

export default NotFound