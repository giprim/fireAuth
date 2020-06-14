import { Action } from "redux";

interface IActions extends Action{

}

interface Istate {
  auth: {}
}

const initialState:Istate  = {
  auth: {}
}

const AuthReducer = (state = {}, action: IActions) => {
  switch(action.type){
    case "Login": 
    return {...state, login: "just Logged in"}

    default: 
    return state;
  }
}

export default AuthReducer