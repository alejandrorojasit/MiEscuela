import {SET_CURRENT_USER,LOG_OUT_CURRENT_USER} from '../Actions/autentication.action'
import isEmpty from '../Validations/isEmpty'
import jwt_decode from 'jwt-decode'

export default function(
   state, 
   action 
){
   switch(action.type) {
      case SET_CURRENT_USER:
         let dataToken = jwt_decode(action.payload)
         return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            token: action.payload,
            user: dataToken.usuario.usuario 
         }
      case LOG_OUT_CURRENT_USER:
         return {
            ...state,
            isAuthenticated:false,
            token: '',
            user: {}
         }
      default: 
         return state;   
   }
}
