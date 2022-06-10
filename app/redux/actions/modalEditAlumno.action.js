export const SWITCH_EDIT                 = "SWITCH_EDIT"
export const UPDATE_NUEVAOBSERVACION     = "UPDATE_NUEVAOBSERVACION"
export const UPDATE_NUEVOREGISTROSALUD   = "UPDATE_NUEVOREGISTROSALUD"
export const SHOW_MODALEDITOBSERVACIONES = "SHOW_MODALEDITOBSERVACIONES"
export const SHOW_MODALEDITREGISTROSALUD = "SHOW_MODALEDITREGISTROSALUD"
export const SHOW_MODALUPDATE            = "SHOW_MODALUPDATE"
export const SHOW_MODALEDITALUMNO        = "SHOW_MODALEDITALUMNO"
export const UPDATE_FECHANACIMIENTO      = "UPDATE_FECHANACIMIENTO"
export const UPDATE_FECHAINGRESO         = "UPDATE_FECHAINGRESO"
export const UPDATE_FECHAEGRESO          = "UPDATE_FECHAEGRESO"
export const UPDATE_UPDATEDDATA          = "UPDATE_UPDATEDDATA"

export const updateUpdatedData = (payload) => {
   return {
      type: UPDATE_UPDATEDDATA,
      payload
   }
}

export const updateSwitchEdit = () => {
   return {
      type: SWITCH_EDIT,
   }
}

export const updateNuevaObservacion = (payload) => {
   return {
      type: UPDATE_NUEVAOBSERVACION,
      payload
   } 
}

export const updateNuevoRegistroSalud = (payload) => {
   return {
      type: UPDATE_NUEVOREGISTROSALUD,
      payload
   }
}

export const show_ModalEditObservaciones = () => {
   return {
      type: SHOW_MODALEDITOBSERVACIONES
   }
}

export const show_ModalEditRegistroSalud = () => {
   return {
      type: SHOW_MODALEDITREGISTROSALUD
   }
}

export const show_ModalUpdate = () => {
   return {
      type: SHOW_MODALUPDATE
   }
}

export const show_ModalEditAlumno = () => {
   return {
      type: SHOW_MODALEDITALUMNO
   }
}

export const updateFechaNacimiento = (payload) => {
   return {
      type: UPDATE_FECHANACIMIENTO,
      payload
   }
}

export const updateFechaIngreso = (payload) => {
   return {
      type: UPDATE_FECHAINGRESO,
      payload
   }
}

export const updateFechaEgreso = (payload) => {
   return {
      type: UPDATE_FECHAEGRESO,
      payload
   }
}
