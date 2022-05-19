import React,{useState} from 'react'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import {Form} from '../components'
import * as ROUTES from '../constants/routes'
import {useNavigate} from 'react-router-dom'
// import {FirebaseContext} from '../context/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const SignIn = () => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth();
  const navigate = useNavigate()
  // const [emailAddress, setEmailAddress] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const isInvalid = password === '' || emailAddress === '';

  const handleSignin =(e) => {
    e.preventDefault()
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // console.log('token,user',token, user);
      navigate(ROUTES.BROWSE)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      setError(error.message)
      // ...
    })
  }


  return (
    <>
    <HeaderContainer>
      <Form>
      {/* <Form.Title>Sign In</Form.Title> */}
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            {/* <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            /> */}
            <Form.Submit  type="submit" data-testid="sign-in">
              Sign In With Google
            </Form.Submit>
          </Form.Base>

          {/* <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text> */}
          {/* <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall> */}
      </Form>
    </HeaderContainer>
    <FooterContainer/>
    </>
  )
}

export default SignIn