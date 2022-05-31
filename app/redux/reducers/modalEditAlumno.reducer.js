import {
   SWITCH_EDIT,
   UPDATE_NUEVAOBSERVACION,
   UPDATE_NUEVOREGISTROSALUD,
   SHOW_MODALEDITOBSERVACIONES,
   SHOW_MODALEDITREGISTROSALUD,
   SHOW_MODALUPDATE,
   SHOW_MODALEDITALUMNO,
   UPDATE_FECHANACIMIENTO,
   UPDATE_FECHAINGRESO,
   UPDATE_FECHAEGRESO 
} from '../actions/modalEditAlumno.action'

import { modalEditAlumnoState } from '../states/modalEditAlumno.state'

export const modalEditAlumnoReducer = (
   state = modalEditAlumnoState,
   action
) =>{
   switch (action.type) {
      case SWITCH_EDIT:
         return {
            ...state,
            switchEdit: !state.switchEdit
         } 
      case UPDATE_NUEVAOBSERVACION:
         return {
            ...state,
            nuevaObservacion: action.payload
         }
      case UPDATE_NUEVOREGISTROSALUD:
         return {
            ...state,
            nuevoRegistroSalud: action.payload
         }
      case SHOW_MODALEDITOBSERVACIONES:
         return {
            ...state,
            showModalEditObservaciones: !state.showModalEditObservaciones
         }
      case SHOW_MODALEDITREGISTROSALUD:
         return {
            ...state,
            showModalEditRegistroSalud: !state.showModalEditRegistroSalud
         }
      case SHOW_MODALUPDATE:
         return {
            ...state,
            showModalUpdate: !state.showModalUpdate
         }
      case SHOW_MODALEDITALUMNO:
         return {
            ...state,
            showModalEditAlumno: !state.showModalEditAlumno
         }
      case UPDATE_FECHANACIMIENTO:
         return {
            ...state,
            fechaNacimiento: action.payload
         }
      case UPDATE_FECHAINGRESO:
         return {
            ...state,
            fechaIngreso: action.payload
         }
      case UPDATE_FECHAEGRESO:
         return {
            ...state,
            fechaEgreso: action.payload
         }
      default:
         return state
   }
}
