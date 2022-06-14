import {
   setCurrentUser,
   logOutCurrentUser
} from '../../redux/actions/autentication.action.js'

import {
   setHardCodeData
} from '../../redux/actions/hardCodeData.action'

import {
   showHideAlert
} from '../../redux/actions/modalAlertSpinner.action'

import{
   logInFormChangeUser,
   logInFormChangePassword
} from '../../redux/actions/logInForm.action'

import {postFetchLogIn} from '../../hooks/postFetch.js'
import {getHardCodeData} from '../../hooks/getFetch'

import {logInUrl} from '../../helpers/Urls.js'

export const handleChangeUser =(
   event,
   dispatch
) => {
   dispatch(logInFormChangeUser(event.target.value))
}

export const handleChangePassowrd =(
   event,
   dispatch
) => {
   dispatch(logInFormChangePassword(event.target.value))
}

export const handleClick = (
   user,
   password,
   dispatch,
   setStateShow
) => {
   dispatch(showHideAlert())
   postFetchLogIn(
      user,
      password,
      logInUrl
   ).then(res => {
      if(res.data.ok === true) {
         dispatch(showHideAlert())
         dispatch(setCurrentUser(res.data.token))
         getHardCodeData(res.data.token)
            .then(res => {
               dispatch(setHardCodeData(res.data[0]))
            })
      }else {
         setStateShow(true)
         dispatch(logOutCurrentUser())
         dispatch(showHideAlert())
      }
   })
}


