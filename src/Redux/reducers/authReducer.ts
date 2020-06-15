import { Action } from "redux";
import { AUTH } from "../actions/authActions";

interface IActions extends Action{
  payload: any
}

interface Istate {
  auth: {}
}


const AuthReducer = (state = {}, action: IActions) => {
  switch(action.type){
    case AUTH: 
    return {...state,   ...action.payload}

    default: 
    return state;
  }
}

export default AuthReducer