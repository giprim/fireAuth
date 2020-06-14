import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Login} />
				<Route path='/' component={Signup} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
