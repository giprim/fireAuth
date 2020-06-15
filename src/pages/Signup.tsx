import React, { useState } from 'react';
import Container from '../components/Container';
import { Form, InputBox } from '../styles/Css';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { PHONE_TEST } from '../functionalities/regularExpressions';
import firebase from '../Firebase/Firebase';
import { useDispatch } from 'react-redux';
import { auth_action } from '../Redux/actions/authActions';

const initState = {
	email: '',
	password: '',
};
const Signup = () => {
	const [data, setdata] = useState(initState);
	const dispatch = useDispatch();

	const SetInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
		setdata({ ...data, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (data.password.trim() !== '' && data.email.trim() !== '') {
			firebase
				.auth()
				.createUserWithEmailAndPassword(data.email, data.password)
				.then((response) => {
					console.log(response);
					dispatch(auth_action(response));
				})
				.catch((err) => console.error(err));
		}
	};

	return (
		<Container>
			<Link to='/'>Home</Link>
			<h1>Sign up</h1>

			<Form onSubmit={handleSubmit}>
				<div id='recaptcha'></div>
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
				<Button text='Register' />
			</Form>
		</Container>
	);
};

export default Signup;

// provider
// 				.verifyPhoneNumber(phoneNumber, recaptcha)
// 				.then((verificationID) => {
// 					let verificationCode = prompt(
// 						'enter the verification code sent to you',
// 						'',
// 					);
// 					if (verificationCode !== null)
// 						return firebase.auth.PhoneAuthProvider.credential(
// 							verificationID,
// 							verificationCode,
// 						);
// 				})
// 				.then((phoneCredential) => {
// 					if (phoneCredential !== undefined)
// 						return firebase
// 							.auth()
// 							.signInWithCredential(phoneCredential);
// 				})
// 				.catch((err) => console.error(err));
