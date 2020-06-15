import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PrivateRouter from './components/PrivateRouter';

function App() {

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Login} />
				<PrivateRouter path='/dashboard' component={Dashboard} />
				<Route path='/signup' component={Signup} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
