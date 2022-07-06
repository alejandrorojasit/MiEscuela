export const UPDATE_ROLE                       = 'UPDATE_ROLE'
export const UPDATE_PASSWORD                   = 'UPDATE_PASSWORD'
export const UPDATE_USER                       = 'UPDATE_USER'
export const UPDATE_SWITCHROLE                 = 'UPDATE_SWITCHROLE'
export const UPDATE_SWITCHPASSWORD             = 'UPDATE_SWITCHPASSWORD'
export const UPDATE_SWITCHUSUARIO              = 'UPDATE_SWITCHUSUARIO'
export const UPDATE_DATAUSUARIOS               = 'UPDATE_DATAUSUARIOS'
export const UPDATE_DATAUSER                   = 'UPDATE_DATAUSER'
export const UPDATE_ISNEWUSER                  = 'UPDATE_ISNEWUSER'
export const UPDATE_SWITCHCALIFICACIONESEDITAR = 'UPDATE_SWITCHCALIFICACIONESEDITAR'
export const UPDATE_SWITCHCALIFICACIONESLEER   = 'UPDATE_SWITCHCALIFICACIONESLEER'
export const UPDATE_SWITCHASISTENCIA           = 'UPDATE_SWITCHASISTENCIA'
export const UPDATE_RERENDER                   = 'UPDATE_RERENDER'
export const UPDATE_SELECTEDUSER               = 'UPDATE_SELECTEDUSER'
export const UPDATE_ADDUSERMODAL               = 'UPDATE_ADDUSERMODAL'
export const UPDATE_USUARIOSMODAL              = 'UPDATE_USUARIOSMODAL'
export const UPDATE_USEREDITMODAL              = 'UPDATE_USEREDITMODAL'

export const updateUserEditModal = () => {
   return {
      type: UPDATE_USEREDITMODAL
   }
}

export const updateUsuariosModal = () => {
   return {
      type: UPDATE_USUARIOSMODAL
   }
}

export const updateAddUserModal = () => {
   return {
      type: UPDATE_ADDUSERMODAL
   }
}

export const updateSelectedUser = (payload) => {
   return {
      type: UPDATE_SELECTEDUSER,
      payload
   }
}

export const updateReRender = () => {
   return {
      type: UPDATE_RERENDER
   }
}

export const updateSwitchAsistencia = () => {
   return {
      type: UPDATE_SWITCHASISTENCIA
   }
}

export const updateSwitchCalificacionesLeer = () => {
   return {
      type: UPDATE_SWITCHCALIFICACIONESLEER
   }
}

export const updateSwitchCalificacionesEditar = () => {
   return {
      type: UPDATE_SWITCHCALIFICACIONESEDITAR
   }
} 

export const updateIsNewUser = (payload) => {
   return {
      type: UPDATE_ISNEWUSER,
      payload
   }
}

export const updateDataUser = (payload) => {
   return {
      type: UPDATE_DATAUSER,
      payload
   }
}

export const updateDataUsuarios = (payload) => {
   return {
      type: UPDATE_DATAUSUARIOS,
      payload
   }
}

export const updateSwitchUsuario = () => {
   return {
      type: UPDATE_SWITCHUSUARIO
   }
}

export const updateSwitchPassword = () => {
   return {
      type: UPDATE_SWITCHPASSWORD
   }
}

export const updateSwitchRole = () => {
   return {
      type: UPDATE_SWITCHROLE
   }
}

export const updateUser = (payload) => {
   return {
      type:UPDATE_USER,
      payload
   }
}

export const updatePassword = (payload) => {
   return {
      type: UPDATE_PASSWORD,
      payload
   }
}
export const updateRole = (payload) => {
   return {
      type: UPDATE_ROLE,
      payload
   }
}
