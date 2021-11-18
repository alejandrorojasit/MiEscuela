import {
   setCurrentUser,
   logoutUser
} from '../../Context/Actions/autentication.action.js'

import {postFetchLogIn} from '../../Hooks/postFetch.js'

import {logInUrl} from '../../Helpers/Urls.js'

export const handleChangeUser =(
   event,
   setUsuario
) => {
   setUsuario(event.target.value)
}

export const handleChangePassowrd =(
   event,
   setPassword
) => {
   setPassword(event.target.value)
}

export const handleClick = (
   usuario,
   password,
   context
) => {
   postFetchLogIn(
      usuario,
      password,
      logInUrl
   ).then(res => {
      if(res.data.ok === true) {
         jwtToken(res.data.token,context)
      }else {
         alert(res.data.err.message)
         logoutUser(context.dispatch)
      }
   })
   
}

const jwtToken = (token,context) => {
   context.dispatch(setCurrentUser(token))
}

