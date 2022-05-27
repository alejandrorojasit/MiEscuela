export const UPDATE_ALUMNOS_FULL_LIST = "UPDATE_ALUMNOS_FULL_LIST"
export const UPDATE_DATA_ALUMNO = "UPDATE_DATA_ALUMNO"
export const UPDATE_ALUMNO_FOR_EDIT = "UPDATE_ALUMNO_FOR_EDIT"

export const updateAlumnoFullList = (payload) => {
   return {
      type: UPDATE_ALUMNOS_FULL_LIST,
      payload
   }
}

export const updateDataAlumno = (payload) => {
   return {
      type: UPDATE_DATA_ALUMNO,
      payload
   }
}

export const updateAlumnoForEdit = (payload) => {
   return {
      type: UPDATE_ALUMNO_FOR_EDIT,
      payload
   }
}
