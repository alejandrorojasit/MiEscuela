export const UPDATE_GRADO = 'UPDATE_GRADO'
export const UPDATE_DIVISION = 'UPDATE_DIVISION'
export const UPDATE_NIVEL = 'UPDATE_NIVEL'
export const UPDATE_ISFILTREDSTAGE1 = 'UPDATE_ISFILTREDSTAGE1'
export const UPDATE_ISFILTREDSTAGE2 = 'UPDATE_ISFILTREDSTAGE2'
export const UPDATE_FILTREDDATOSSTAGE1 = 'UPDATE_FILTREDDATOSSTAGE1'
export const UPDATE_FILTREDDATOSSTAGE2 = 'UPDATE_FILTREDDATOSSTAGE2'
export const RESET_STATE = 'RESET_STATE'
export const UPDATE_NOMOBREFILTER = "UPDATE_NOMOBREFILTER"
export const UPDATE_APELLIDOFILTER = "UPDATE_APELLIDOFILTER"
export const UPDATE_EDADFILTER = "UPDATE_EDADFILTER"
export const UPDATE_EDAD3006FILTER = "UPDATE_EDAD3006FILTER"

export const updateEdad3006Filter = (payload) => {
    return {
        type: UPDATE_EDAD3006FILTER,
        payload
    }
}

export const updateEdadFilter = (payload) => {
    return {
        type: UPDATE_EDADFILTER,
        payload
    }
}

export const updateApellidoFilter = (payload) => {
    return {
        type: UPDATE_APELLIDOFILTER,
        payload
    }
}
export const updateNombreFilter = (payload) => {
    return {
        type: UPDATE_NOMOBREFILTER,
        payload
    }
}

export const updateGrado = (payload) => {
   return {
      type : UPDATE_GRADO,
      payload
   }
}

export const updateDivision = (payload) => {
   return {
      type : UPDATE_DIVISION,
      payload
   }
}

export const updateNivel = (payload) => {
   return {
      type : UPDATE_NIVEL,
      payload
   }
}

export const updateIsFiltredState1 = () => {
   return {
      type: UPDATE_ISFILTREDSTAGE1,
   }
}

export const updateIsFiltredState2 = () => {
   return {
      type: UPDATE_ISFILTREDSTAGE2,
   }
}

export const updateFiltredDatosStage1 = (payload) => {
   return {
      type: UPDATE_FILTREDDATOSSTAGE1,
      payload
   }   
}

export const updateFiltredDatosStage2 = (payload) => {
   return {
      type: UPDATE_FILTREDDATOSSTAGE2,
      payload
   }   
}

export const resetState = () => {
   return {
      type: RESET_STATE
   }
}
