import React from 'react'
import Container from '@/components/Container'
import Title from '@/components/Title'
import MyServices from '@/components/MyServices'

const servicePage = () => {
  return (
    <Container>
    <Title title="My Services"/>
   <MyServices/>
   </Container>
  )
}

export default servicePage