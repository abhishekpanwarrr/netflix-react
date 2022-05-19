import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {Home,Browse,Signin, NotFound} from './pages'
import {ProtectedRouets,UerLoggedInProtectedRouets} from './helpers/protected.routes'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouets/>}>
          <Route path={ROUTES.BROWSE} element={<Browse/>}/>
        </Route>
        <Route element={<UerLoggedInProtectedRouets />}>
          <Route path={ROUTES.HOME} element={<Home/>}/>
          <Route path={ROUTES.SIGN_IN} element={<Signin/>}/>
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App