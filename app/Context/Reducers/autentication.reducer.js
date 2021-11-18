import {SET_CURRENT_USER,SET_HARDCODE_DATA} from '../Actions/autentication.action'
import isEmpty from '../Validations/isEmpty'
import jwt_decode from 'jwt-decode'

export default function(
   state , 
   action 
){
   
   switch(action.type) {
      case SET_CURRENT_USER:
         let userName = jwt_decode(action.payload)
         return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            token: action.payload,
            user: userName.usuario.usuario 
         }
      default: 
         return state;   
   }
}
