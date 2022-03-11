import {
   Route,
   Navigate
} from 'react-router-dom'

import useAuth from '../Context/Store/useAuth'

import {DecodeToken} from '../Components/Logic/tokenhandler.js'

export const AdminRoute = ({children}) => {

   const context = useAuth()

   switch(true){
      case (context.stateUser.isAuthenticated === false):
         return <Navigate to='/LogIn'/>
      case (context.stateUser.isAuthenticated === true):
         if(DecodeToken(context).usuario.role === 'Administrador Informatico'){
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
