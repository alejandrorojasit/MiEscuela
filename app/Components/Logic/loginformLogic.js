import {
   setCurrentUser,
   logOutCurrentUser,
   setCurrentYear,
   setCurrentYearServer
} from '../../redux/actions/autentication.action.js'

import {
   setHardCodeData
} from '../../redux/actions/hardCodeData.action'

import {
   modalAlertSpinner_updateStateShow,
   modalAlertSpinner_updateMessage,
} from '../../redux/actions/modalAlertSpinner.action'

import {
   modalAlert_updateMessage,
   modalAlert_updateStateShow
} from '../../redux/actions/modalAlert.action'

import{
   logInFormChangeUser,
   logInFormChangePassword
} from '../../redux/actions/logInForm.action'

import {postFetchLogIn} from '../../hooks/postFetch.js'
import {getHardCodeData,getCurrentYear} from '../../hooks/getFetch'

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

export const handleClick = async (
   user,
   password,
   dispatch,
) => {
      dispatch(modalAlertSpinner_updateMessage('Conectando con el servidor de login. Por favor espere.'))
      dispatch(modalAlertSpinner_updateStateShow())
   const fetchLogin = await postFetchLogIn(
      user,
      password,
      logInUrl
   )

   if (fetchLogin.data.ok === true){
      const currentYear = await getCurrentYear()
      dispatch(setCurrentYear(currentYear.data))
      dispatch(setCurrentYearServer(currentYear.data))
      const hardCodeData = await getHardCodeData(fetchLogin.data.token)
      dispatch(setHardCodeData(hardCodeData.data[0]))
      dispatch(setCurrentUser(fetchLogin.data.token))
      dispatch(modalAlertSpinner_updateStateShow())
   }else{
      dispatch(modalAlert_updateMessage('Usuario o clave incorrectos'))
      dispatch(modalAlert_updateStateShow())
      dispatch(logOutCurrentUser())
      dispatch(modalAlertSpinner_updateStateShow())
   }
}
