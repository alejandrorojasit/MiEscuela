import axios from 'axios'
import {baseUrl} from '../Context/Store/AuthProvider'

export const deleteFetchDeleteUser = async (
   token,
   usuario,
   apiUrl
) => {
   const url= `${baseUrl}/${apiUrl}/${usuario}`
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   }
   try{
      const resData = await axios.delete(
         url,
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}


