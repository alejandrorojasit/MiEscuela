import {useContext} from 'react'
import {AuthContext} from './AuthProvider.jsx'

export default function useAuth () {
   const contextValue = useContext(AuthContext)
   return contextValue
}
