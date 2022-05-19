import React from 'react'
import { Container, Image, Inner, Item, Pane, SubTitle, Title } from './styles/jumbotron'
const Jumbotron = ({children,direction = 'row',...restProps}) => {
  return (
      <Item {...restProps}>
        <Inner direction={direction} >
            {children}
        </Inner>
      </Item>
  )
}

export default Jumbotron

Jumbotron.Container = function Jumbotron({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = function Jumbotron({children,...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Title = function Jumbotron({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = function Jumbotron({children,...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = function Jumbotron({...restProps}){
    return <Image {...restProps} />
}