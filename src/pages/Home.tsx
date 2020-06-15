import React from 'react';
import firebase from '../Firebase/Firebase';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signout } from '../Redux/actions/authActions';
import { BtnElement } from '../styles/Css';

const Home = () => {
	const dispatch = useDispatch();

	const logout = () => {
		firebase.auth().signOut();
		dispatch(signout());
	};
	return (
		<div>
			<h2>HOME </h2>
			<BtnElement onClick={logout}>sign out</BtnElement>
		</div>
	);
};

export default Home;
