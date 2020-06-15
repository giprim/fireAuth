import React from 'react'
import Button from '../components/Button'
import firebase from '../Firebase/Firebase'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch();

  const logout = () => {
    console.log(firebase.auth().signOut())
    
    firebase.auth().signOut()
    
  }
  return (
    <div>
      <h2>HOME 📄 </h2>
      <Button text="signout" onClick={() => logout()} />
    </div>
  )
}

export default Home
