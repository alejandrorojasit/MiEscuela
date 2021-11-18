import {SET_HARDCODE_DATA} from '../Actions/hardCodeData.action'

export default function(
   state , 
   action 
){
   
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
