export const SET_CURRENT_USER       = "SET_CURRENT_USER"
export const LOG_OUT_CURRENT_USER   = "LOG_OUT_CURRENT_USER"
export const GET_STATE              = "GET_STATE"
export const SET_CURRENT_YEAR       = "SET_CURRENT_YEAR"
export const SET_CURRENT_YEARSERVER = "SET_CURRENT_YEARSERVER"

export const setCurrentYearServer = (payload) => {
   return {
      type: SET_CURRENT_YEARSERVER,
      payload
   }
}

export const setCurrentYear = (payload) => {
   return {
      type: SET_CURRENT_YEAR,
      payload
   }
}

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


