import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Checks for authentication before routing
 * @param Component
 * @example 
 * <PrivateRouter path='/home' component={Home} />
 */
const PrivateRouter = ({ component: Component, ...rest }: any) => {
	const auth = useSelector((state: any) => state.auth);

	if (auth) {
		return <Route {...rest} render={(props) => <Component {...props} />} />;
	} else {
		return (
			<Route
				{...rest}
				render={() => {
					return <Redirect to='/' />;
				}}
			/>
		);
	}
};

export default PrivateRouter;
