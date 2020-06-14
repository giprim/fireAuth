import React from 'react'
import { LayoutBox } from '../styles/Css'


/**
 * Container has a flex display with a max-width of 1000px
 * @param children
 */
const Container: React.FC = ({children}) => {
  return (
   <LayoutBox>
     {children}
   </LayoutBox>
  )
}

export default Container
