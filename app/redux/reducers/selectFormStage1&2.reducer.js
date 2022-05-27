import {
   selectFormStagesState
} from '../states/selectFormStage1&2'

import {
   UPDATE_GRADO,
   UPDATE_DIVISION,
   UPDATE_NIVEL,
   UPDATE_ISFILTREDSTAGE1,
   UPDATE_ISFILTREDSTAGE2,
   UPDATE_FILTREDDATOSSTAGE1,
   UPDATE_FILTREDDATOSSTAGE2, 
   RESET_STATE,
} from '../actions/selectFormStage1&2.actions'

export const selectFormStagesReducer = (
   state = selectFormStagesState,
   action
) => {
   switch (action.type) {
      case UPDATE_GRADO:
         return {
            ...state,
            gradoState : action.payload
         }
      case UPDATE_DIVISION:
         return {
            ...state,
            divisionState : action.payload
         }
      case UPDATE_NIVEL:
         return{
            ...state,
            nivelState : action.payload
         }
      case UPDATE_ISFILTREDSTAGE1:
         return {
            ...state,
            isFiltredStage1 : true
         }
      case UPDATE_ISFILTREDSTAGE2:
         return {
            ...state,
            isFiltredStage2: true
         }
      case UPDATE_FILTREDDATOSSTAGE1:
         return {
            ...state,
            filtredDatosAlumnoStage1: action.payload
         }
      case UPDATE_FILTREDDATOSSTAGE2:
         return {
            ...state,
            filtredDatosAlumnoStage2: action.payload
         }
      case RESET_STATE:
         return selectFormStagesState
         
      default:
         return state
   }
}

