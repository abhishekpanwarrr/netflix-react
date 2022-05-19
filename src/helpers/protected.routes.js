// import PropTypes from 'prop-types'
import { Outlet ,Navigate } from 'react-router-dom'
import useAuthListner from './use-auth-listner'
import * as ROUTES from '../constants/routes'

const ProtectedRouets = () => {
    const {user} = useAuthListner()
    return user ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />
}

const UerLoggedInProtectedRouets = () => {
    const {user} = useAuthListner()
    return user ? <Navigate to={ROUTES.BROWSE} /> :<Outlet />
}

export  {ProtectedRouets,UerLoggedInProtectedRouets}