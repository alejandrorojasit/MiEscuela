import {
   Route,
   Navigate
} from 'react-router-dom'

import useAuth from '../Context/Store/useAuth.jsx'

import {DecodeToken} from '../Components/Logic/tokenhandler.js'

export const AdminRoute = ({children}) => {

   const {stateUser} = useAuth()

   switch(true){
      case (stateUser.isAuthenticated === false):
         return <Navigate to='/LogIn'/>
      case (stateUser.isAuthenticated === true):
         if(DecodeToken(1).usuario.role === 'admin'){
         return(
            children 
         )         
         }else{
            return (
               <Navigate to='/Forbidden'/>
            )
         }
         }
   }
