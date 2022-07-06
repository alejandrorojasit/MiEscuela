import {
   Route,
   Navigate
} from 'react-router-dom'

import {useSelector} from 'react-redux'

import {DecodeToken} from '../components/logic/tokenhandler.js'


export const AdminRoute = ({children}) => {

   const userState = useSelector(state => state.authReducer)
   switch(userState.isAuthenticated){
      case  false:
         return <Navigate to='/LogIn'/>
      case  true:
         if(DecodeToken(userState).usuario.role === 'Administrador Informatico'){
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

export const NuevoCicloLectivoRoute = ({children}) => {

   const coordinacionIniPrim = "Coordinacion Administrativa Nivel Primario"
   const coordinacionSecu = "Coordinacion Administrativa Nivel Secundario"
   const userState = useSelector(state => state.authReducer)

   switch (userState.isAuthenticated){
      case false:
         return <Navigate to='/LogIn' />
      case true:
         if(DecodeToken(userState).usuario.role === coordinacionIniPrim || DecodeToken(userState).usuario.role === coordinacionSecu){
            return (
               children
            )
         }else{
            return (
               <Navigate to='/Forbidden'/>
            )
         }
   }

}
