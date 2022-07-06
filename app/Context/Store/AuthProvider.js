import {
   useEffect
}from 'react'

import {createContext} from 'react'

import {postFetchVerifyToken} from '../../hooks/postFetch.js'

import {verifyTokenUrl} from '../../helpers/Urls.js'

import {setHardCodeData} from '../../redux/actions/hardCodeData.action'

import {getHardCodeData} from '../../hooks/getFetch'

export const AuthContext = createContext()

//export const baseUrl = 'https://us-central1-miescuela-5e8d6.cloudfunctions.net/app' 
export const baseUrl = 'http://localhost:5001/miescuela-5e8d6/us-central1/app'

const AuthProvider = (props) => {

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
                  dispatchStateUser(logOutCurrentUser())
               }
               if(res.data.verification){
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
      <AuthContext.Provider>
          {props.children}
      </AuthContext.Provider>
   )
}

export default AuthProvider
