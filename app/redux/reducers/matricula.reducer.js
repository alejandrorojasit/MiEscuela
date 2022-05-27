import {
   UPDATE_ALUMNOS_FULL_LIST,
   UPDATE_DATA_ALUMNO,
   UPDATE_ALUMNO_FOR_EDIT
} from '../actions/matricula.action'

import {matriculaState} from '../states/matricula.state'

export const matriculaReducer = (
   state = matriculaState,
   action
) => {
   switch(action.type){
      case UPDATE_ALUMNOS_FULL_LIST:
         return {
            ...state,
            alumnosFullList: action.payload
         }
      case UPDATE_DATA_ALUMNO:
         return {
            ...state,
            dataAlumno: action.payload
         }
      case UPDATE_ALUMNO_FOR_EDIT:
         return {
            ...state,
            selecteAlumnoForEdit:action. payload
         }
      default:
         return state
   } 
} 
