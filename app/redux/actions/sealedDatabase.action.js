export const UPDATE_WHOLESTATE = "UPDATE_WHOLESTATE"
export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_ISSEALEDINITPRIM = "UPDATE_ISSEALEDINITPRIM" 
export const UPDATE_ISSEALEDSECU = "UPDATE_ISSEALEDSECU"

export const sealedDatabase_updateWholeState = (payload) => {
   return{
      type:  UPDATE_WHOLESTATE,
      payload
   }

}

export const sealedDatabase_updateIsSealedSecu = () => {
   return {
      type: UPDATE_ISSEALEDSECU
   }
}

export const sealedDatabase_updateIsSealedIniPrim = () => {
   return {
      type: UPDATE_ISSEALEDINITPRIM
   }
}

export const sealedDatabase_updateName = (payload) => {
   return {
      type: UPDATE_NAME,
      payload
   }
}


