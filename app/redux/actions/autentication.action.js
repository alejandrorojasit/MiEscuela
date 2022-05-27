export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const LOG_OUT_CURRENT_USER = "LOG_OUT_CURRENT_USER"
export const GET_STATE = "GET_STATE"

export const setCurrentUser = token => {
   return {
      type: SET_CURRENT_USER,
      payload: token
   }
}

export const logOutCurrentUser = () => {
   return {
      type: LOG_OUT_CURRENT_USER,
      payload:''
   }
}


