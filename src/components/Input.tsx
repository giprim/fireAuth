import React from 'react'
import styled from 'styled-components';

const InputField = styled('input')`
  padding: 5px 10px; 
  border: 1px #eee solid;
`

const Input : React.FC = () => {

  return (
    <InputField/>

  )
}

export default Input;