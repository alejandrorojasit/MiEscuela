export const UPDATE_STATESHOW = "UPDATE_STATESHOW"
export const UPDATE_MESSAGE = "UPDATE_MESSAGE"

export const modalAlertSpinner_updateMessage = (payload) => {
   return {
      type: UPDATE_MESSAGE,
      payload
   }
}
export const modalAlertSpinner_updateStateShow = () => {
   return {
      type: UPDATE_STATESHOW
   }
} 
