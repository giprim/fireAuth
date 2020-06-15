import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { Link, Redirect } from 'react-router-dom';
import { InputBox, Form } from '../styles/Css';
import { useSelector, useDispatch } from 'react-redux';
import { PHONE_TEST } from '../functionalities/regularExpressions';
import firebase from 'firebase';
import { auth_action } from '../Redux/actions/authActions';

const initState = {
	email: '',
	password: '',
};

/**
 * @name Login
 * @description this is a page component for logging in
 */
const Login = () => {
	const [data, setdata] = useState(initState);
	const dispatch = useDispatch();
	const auth = useSelector((state: any) => state.auth);

	const SetInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
		setdata({ ...data, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (data.password.trim() !== '' && data.email.trim() !== '') {
			firebase
				.auth()
				.signInWithEmailAndPassword(data.email, data.password)
				.then((response) => {
					dispatch(auth_action(response));
				})
				.catch((err) => console.error(err));
		}
	};

	if (auth !== null) {
		// console.log(auth.additionalUserInfo.providerId);
		return <Redirect to='/home' />;
	}

	return (
		<Container>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit}>
				<InputBox
					onChange={SetInputData}
					value={data.email}
					type='email'
					id='email'
					placeholder='phone number'
				/>
				<InputBox
					onChange={SetInputData}
					type='password'
					id='password'
					value={data.password}
					placeholder='phone number'
				/>
				<Button text='Login' />
				<br />
				<Link to='/signup'>
					<code>Create a new account</code>
				</Link>
			</Form>
		</Container>
	);
};

export default Login;
