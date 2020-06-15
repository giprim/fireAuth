export const AUTH = 'AUTH';

export const auth_action = (auth: any) => {
  console.log(auth)
  return {
    type: AUTH,
    payload: auth
  }
}