import jwt_decode from 'jwt-decode'

export const DecodeToken = (userState) => {
         return jwt_decode(userState.token)
}
