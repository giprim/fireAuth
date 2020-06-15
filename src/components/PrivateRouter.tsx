import React, { useEffect } from 'react'
import {  Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';
import { auth_action } from '../Redux/actions/authActions';

const PrivateRouter = (props:any) => {
 const auth = useSelector((state:any) => state.auth)
 const dispatch = useDispatch()
  const { component: Component, ...rest } = props;

  useEffect(() => {

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        dispatch(auth_action(user))
      }
    });
  },[dispatch])

  if (auth.hasOwnProperty('user'))  {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return (
      <Route
        {...rest}
        render={(props) => {
          const { location } = props;
          return (
            <Redirect
              to={{ pathname: "/", state: { from: location } }}
            />
          );
        }}
      />
    );
  }

}

export default PrivateRouter
