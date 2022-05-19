import React from 'react'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import { Header, Profiles } from '../components'

const SelectProfileContainer = ({user,setProfile}) => {
  return (
      <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt='Netlifs' />
            </Header.Frame>
        </Header>
        <Profiles>
            <Profiles.Title>Who's Watching</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={() => setProfile({displayName:user.displayName,photoUrl:user.photoUrl})}>
                    <Profiles.Picture src={user.photoUrl}/>
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
      </>
  )
}

export default SelectProfileContainer