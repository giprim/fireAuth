import { Action } from 'redux';
import { AUTH, SIGNOUT } from '../actions/authActions';

interface IActions extends Action {
	payload: any;
}

const initialState: {} | null = null;

const AuthReducer = (state = initialState, action: IActions) => {
	switch (action.type) {
		case AUTH:
			return (state = { ...action.payload });

		case SIGNOUT:
			return (state = null);
		default:
			return state;
	}
};

export default AuthReducer;
