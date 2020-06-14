import React from 'react'
import Container from '../components/Container'
import { Form, InputBox } from '../styles/Css'

const Signup = () => {
  return (
    <Container>
      <h1>Sign up</h1>
      <Form>
        <InputBox placeholder="Full name" />
        <InputBox />
        <InputBox />
        <InputBox />
      </Form>
    </Container>
  )
}

export default Signup
