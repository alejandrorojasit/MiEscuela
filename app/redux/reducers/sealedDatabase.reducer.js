import {
   UPDATE_NAME,
   UPDATE_ISSEALEDINITPRIM,
   UPDATE_ISSEALEDSECU, 
   UPDATE_WHOLESTATE
} from '../actions/sealedDatabase.action'

import {sealedDatabaseState} from '../states/sealedDatabase.state'

export const sealedDatabaseReducer = (
state = sealedDatabaseState,
action
) => {
   switch(action.type){
      case UPDATE_WHOLESTATE:
         return {
            ...state,
            name :action.payload.name,
            isSealedIniPrim: action.payload.isSealedIniPrim,
            isSealedSecu: action.payload.isSealedSecu,
         }
      case UPDATE_NAME:
         return {
            ...state,
            name: action.payload
         }
      case UPDATE_ISSEALEDINITPRIM:
         return {
            ...state,
            isSealedIniPrim: true
         }
      case UPDATE_ISSEALEDSECU:
         return {
            ...state,
            isSealedSecu: true
         }
      default:
         return state
   }
}

