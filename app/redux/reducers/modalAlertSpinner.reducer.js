import {
   UPDATE_STATESHOW,
   UPDATE_MESSAGE,
} from '../actions/modalAlertSpinner.action'
import { modalAlertSpinnerState } from '../states/modalAlertSpinner.state'

export const modalAlertSpinnerReducer = (
   state = modalAlertSpinnerState,
   action
) => {
   switch(action.type) {
      case UPDATE_MESSAGE:
         return {
            ...state,
            message: action.payload
         }
      case UPDATE_STATESHOW:
         return{
            ...state,
            show: !state.show
         }
      default:
         return state

   }
}
