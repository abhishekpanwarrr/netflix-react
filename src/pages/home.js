import React from 'react'
import FaqsContainer from '../containers/faqs'
import JumbotronContainer from '../containers/jumbotron'
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import { OptForm } from '../components'
import { Feature } from '../components'

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited filmx, TV programmers and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time</Feature.SubTitle>
        </Feature>
            <OptForm>
                <OptForm.Input placeholder='Email address' />
                <OptForm.Button>Try It now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}

export default Home