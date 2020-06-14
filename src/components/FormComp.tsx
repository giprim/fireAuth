import React from 'react'
import styled from 'styled-components'

interface IForm extends React.HTMLAttributes<HTMLFormElement>{}

const Form = styled('form')`
  padding: 2em;
  max-width: 350px;
  margin: auto;
  border: 1px #999999aa;
`
const FormComp: React.FC<IForm> = ({children}) => {
  return (
   <Form>
     {children}
   </Form>
  )
}

export default FormComp
