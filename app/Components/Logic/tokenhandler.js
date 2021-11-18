import jwt_decode from 'jwt-decode'
import useAuth from '../../Context/Store/useAuth.jsx'
export const DecodeToken = (number) => {
   const context = useAuth()
   switch(number){
      case 1:
         return jwt_decode(context.stateUser.token)
   }
}
