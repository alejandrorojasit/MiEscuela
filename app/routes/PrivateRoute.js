import {
   Route,
   Navigate
} from 'react-router-dom'

import {useSelector} from 'react-redux'

import {DecodeToken} from '../components/logic/tokenhandler.js'

export const AdminRoute = ({children}) => {

   const context = useSelector(state => state.authReducer)

   switch(true){
      case (context.isAuthenticated === false):
         return <Navigate to='/LogIn'/>
      case (context.isAuthenticated === true):
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
