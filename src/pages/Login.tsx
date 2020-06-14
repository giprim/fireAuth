import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { InputBox, Form } from '../styles/Css';
import { useSelector } from 'react-redux';

const initialState = {
	user: '',
	password: '',
};

/**
 * @name Login
 * @description this is a page component for logging in
 */
const Login = () => {
	const [data, setData] = useState(initialState);
	const state = useSelector((state: any) => state);

	console.log(state);

	/**
	 * listens for onChange event and add the value of input field to state
	 * @param event
	 */
	const SetInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [event.target.id]: event.target.value });
	};

	/**
	 * listens for submit event
	 * @param event
	 */
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Container>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit}>
				<InputBox
					value={data.user}
					onChange={SetInputData}
					placeholder='username'
					id='user'
					type='text'
				/>
				<InputBox
					onChange={SetInputData}
					placeholder='password'
					id='password'
					type='password'
				/>
				<Button text='Login' />
				<br />
				<Link to='/signup'>
					<code>Create a new account</code>{' '}
				</Link>
			</Form>
		</Container>
	);
};

export default Login;
