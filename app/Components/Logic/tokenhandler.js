import jwt_decode from 'jwt-decode'

export const DecodeToken = (context) => {
         return jwt_decode(context.token)
}
