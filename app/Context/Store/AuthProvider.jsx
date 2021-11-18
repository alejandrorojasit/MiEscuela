import {
   useReducer,
   useEffect
}from 'react'

import authReducer from '../Reducers/autentication.reducer'
import hardCodeDataReducer from '../Reducers/hardCodeData.reducer'

import {
   setCurrentUser,
   logoutUser
} from '../Actions/autentication.action'

import {createContext} from 'react'

import {postFetchVerifyToken} from '../../Hooks/postFetch.js'
import {verifyTokenUrl} from '../../Helpers/Urls.js'

import {setHardCodeData} from '../Actions/hardCodeData.action'

import {getHardCodeData} from '../../Hooks/getFetch'

export const AuthContext = createContext()

export const baseUrl = window.location.hostname

window.addEventListener('beforeunload' ,(ev) => {
   logoutUser()
})

const initialState = {
   isAuthenticated : false,
   token: '',
   user: {},
}

const initialHardCodeData = {
   hardCodeData:{},
}

const AuthProvider = (props) => {

   const [stateUser,dispatch] = useReducer(authReducer,initialState)
   const [stateHardCodeData,dispatchHardCodeData] = useReducer(hardCodeDataReducer,initialHardCodeData)

   useEffect( ()=>{
      if(stateUser.token === ''){
         return null
      }else{
         postFetchVerifyToken(
            stateUser.token,
            verifyTokenUrl
         ).then((res)=>
            {
               if(res.statusText === 'Unauthorized'){
                  dispatch(setCurrentUser(''))
               }
               if(res.statusText === 'OK'){
                  getHardCodeData(stateUser.token)
                     .then(res => {
                        dispatchHardCodeData(setHardCodeData(res.data[0]))         
                     })
               }
            }
         )
      }
   },[stateUser])

   return (
      <AuthContext.Provider 
         value={{
            stateUser,
            stateHardCodeData,
            dispatch,
            dispatchHardCodeData,
         }}>
         {props.children}
      </AuthContext.Provider>
   )
}

export default AuthProvider
