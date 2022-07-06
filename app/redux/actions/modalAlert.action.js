export const UPDATE_STATESHOW = "UPDATE_STATESHOW"
export const UPDATE_MESSAGE = "UPDATE_MESSAGE"
export const UPDATE_MODEL = "UPDATE_MODEL"
export const UPDATE_CALLBACK = "UPDATE_CALLBACK"

export const modalAlert_updateCallBack = (payload) => {
   return {
      type: UPDATE_CALLBACK,
      payload
   }
}

export const modalAlert_updateModel = (payload) => {
   return {
      type: UPDATE_MODEL,
      payload
   }
}

export const modalAlert_updateMessage = (payload) => {
   return {
      type: UPDATE_MESSAGE,
      payload
   }
}

export const modalAlert_updateStateShow = () => {
   return {
      type: UPDATE_STATESHOW
   }
}
