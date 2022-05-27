import {LOGINFORM_CHANGEUSER,LOGINFORM_CHANGEPASSWORD} from "../actions/logInForm.action";

import {logInFormState} from '../states/logInForm.state'

export const logInFormReducer = (
   state = logInFormState,
   action
) => {
   switch(action.type) {
      case LOGINFORM_CHANGEUSER:
         return {
            ...state , 
            user: action.payload
         }
      case LOGINFORM_CHANGEPASSWORD:
         return {
            ...state , 
            password: action.payload
         }
      default:
         return state
   }
}
