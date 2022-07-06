import {
  modalAlertState 
} from '../states/modalAlert.state'

import {
   UPDATE_STATESHOW,
   UPDATE_MESSAGE,
   UPDATE_MODEL,
   UPDATE_CALLBACK,
} from '../actions/modalAlert.action'

export const modalAlertReducer = (
   state = modalAlertState,
   action
) => {
   switch(action.type){
      case UPDATE_CALLBACK:
         return {
            ...state,
            callBack: action.payload
         }
      case UPDATE_MODEL:
         return {
            ...state,
            model: action.payload
         }
      case UPDATE_MESSAGE:
         return {
            ...state,
            message: action.payload
         }
      case UPDATE_STATESHOW:
         return {
            ...state,
            stateShow: !state.stateShow
         }
      default:
         return state
   }
}
