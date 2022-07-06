import {
   SET_CURRENT_USER,
   LOG_OUT_CURRENT_USER,
   GET_STATE,
   SET_CURRENT_YEAR
} from "../actions/autentication.action";
import isEmpty from "../Validations/isEmpty";
import jwt_decode from "jwt-decode";
import { userState } from "../states/userState.state";

export const authReducer = (
   state = userState, 
   action
) => {
   switch (action.type) {

      case SET_CURRENT_YEAR:
         return {
            ...state,
            currentYear: action.payload
         }
      case SET_CURRENT_USER:
         let dataToken = jwt_decode(action.payload);
         return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            token: action.payload,
            user: dataToken.usuario.usuario,
         };
      case LOG_OUT_CURRENT_USER:
         return {
            ...state,
            isAuthenticated: false,
            token: "",
            user: {},
         };
      default:
      return state;
   }
};
