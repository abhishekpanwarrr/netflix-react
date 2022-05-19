import React from 'react'
// import { getAuth, signOut } from "firebase/auth";
// import {useNavigate} from 'react-router-dom'
// import useAuthListner from '../helpers/use-auth-listner'
// import * as ROUTES from '../constants/routes'
import {useContent} from '../hooks/use-content'
import selectionFilter from '../utils/selection-filter';
import BrowseContainer from '../containers/browse';


const Browse = () => {

  const {series} = useContent('series')
  const {films} = useContent('films')
  const slides = selectionFilter({series,films})
  // console.log('series',series);
  // console.log('films',films);


  // const {user} = useAuthListner()
  // const navigate = useNavigate()
  // const handleSignout = async() => {
  //   const auth = getAuth();
  //   await signOut(auth).then(() => navigate(ROUTES.SIGN_IN)).catch((error) => {
  //     alert('Something went wrong!! Please try again')
  //   });
  // }

  return <BrowseContainer slides={slides} />
}

export default Browse