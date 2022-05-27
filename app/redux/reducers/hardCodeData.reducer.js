import {SET_HARDCODE_DATA} from '../actions/hardCodeData.action'

export const hardCodeDataReducer = (
   state = {} , 
   action 
) => {
   switch(action.type) {
      case SET_HARDCODE_DATA:
         return {
            ...state,
            hardCodeData: action.payload 
         }
      default: 
         return state;   
   }
}
