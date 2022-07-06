import {
   UPDATE_ROLE,
   UPDATE_PASSWORD,
   UPDATE_USER,
   UPDATE_SWITCHROLE,
   UPDATE_SWITCHPASSWORD,
   UPDATE_SWITCHUSUARIO,
   UPDATE_DATAUSUARIOS,
   UPDATE_DATAUSER,
   UPDATE_ISNEWUSER,
   UPDATE_SWITCHCALIFICACIONESEDITAR,
   UPDATE_SWITCHCALIFICACIONESLEER,
   UPDATE_SWITCHASISTENCIA,
   UPDATE_RERENDER,
   UPDATE_SELECTEDUSER,
   UPDATE_ADDUSERMODAL,
   UPDATE_USUARIOSMODAL,
   UPDATE_USEREDITMODAL
} from '../actions/adminOptions.actions'

import { adminOptionsState } from '../states/adminOptions.state'

export const adminOptionsReducer = (
   state = adminOptionsState,
   action
) => {
   switch(action.type){
      
      case UPDATE_USEREDITMODAL:
         return  {
            ...state,
            userEditModal: !state.userEditModal
         }
      case UPDATE_USUARIOSMODAL:
         return {
            ...state,
            usuariosModal: !state.usuariosModal
         }
      case UPDATE_ADDUSERMODAL:
         return {
            ...state,
            addUserModal: !state.addUserModal
         }
      case UPDATE_SELECTEDUSER:
         return {
            ...state,
            selectedUser: action.payload
         }
      case UPDATE_RERENDER:
         return {
            ...state,
            reRender: !state.reRender
         }
      case UPDATE_SWITCHASISTENCIA:
         return {
            ...state,
            switchAsistencia: !state.switchAsistencia
         }
      case UPDATE_SWITCHCALIFICACIONESLEER:
         return {
            ...state,
            switchCalificacionesLeer: !state.switchCalificacionesLeer
         }
      case UPDATE_SWITCHCALIFICACIONESEDITAR:
         return {
            ...state,
            switchCalificacionesEditar: !state.switchCalificacionesEditar
         }
      case UPDATE_ISNEWUSER:
         return {
            ...state,
            isNewUser: action.payload
         }
      case UPDATE_DATAUSER:
         return {
            ...state,
            dataUser: action.payload
         }
      case UPDATE_DATAUSUARIOS:
         return {
            ...state,
            dataUsuarios: action.payload 
         }
      case UPDATE_SWITCHUSUARIO:
         return {
            ...state,
            switchUsuario: !state.switchUsuario
         }
      case UPDATE_SWITCHPASSWORD:
         return {
            ...state,
            switchPassword: !state.switchPassword
         }
      case UPDATE_SWITCHROLE:
         return {
            ...state,
            switchRole: !state.switchRole
         }
      case UPDATE_USER:
         return {
            ...state,
            user: action.payload
         }
      case UPDATE_PASSWORD:
         return {
            ...state,
            password: action.payload
         }
      case UPDATE_ROLE:
         return  {
            ...state,
            role: action.payload
      }
      default: 
         return state
      
   }
}
