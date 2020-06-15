import React, { useState } from 'react';
import Container from '../components/Container';
import { Form, InputBox, H1 } from '../styles/Css';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
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

			<Form onSubmit={handleSubmit}>
			<H1>Sign up</H1>
				<div id='recaptcha'></div>
				<InputBox
					onChange={SetInputData}
					value={data.email}
					type='email'
					id='email'
					placeholder='email: youremail@email.com'
				/>
				<InputBox
					onChange={SetInputData}
					type='password'
					id='password'
					value={data.password}
					placeholder='password'
				/>
				<Button text='Register' bgcolor="#aec" />
			<Link to='/'>Already have an account?</Link>
			</Form>
		</Container>
	);
};

export default Signup;

