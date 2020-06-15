export const AUTH = 'AUTH';
export const SIGNOUT = 'SIGNOUT';

export const auth_action = (auth: any) => {
	return {
		type: AUTH,
		payload: auth,
	};
};

export const signout = () => {
	return { type: SIGNOUT, payload: null };
};
