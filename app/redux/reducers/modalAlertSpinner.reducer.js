import {SHOW_HIDE} from '../actions/modalAlertSpinner.action'
import { modalAlertSpinnerState } from '../states/modalAlertSpinner.state'

export const modalAlertSpinnerReducer = (
   state = modalAlertSpinnerState,
   action
) => {
   switch(action.type) {
      case SHOW_HIDE:
         return{
            ...state,
            show: !state.show
         }
      default:
         return state

   }
}
