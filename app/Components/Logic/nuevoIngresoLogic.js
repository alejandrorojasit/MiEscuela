import axios from 'axios'
const baseApiUrl = 'https://apis.datos.gob.ar/georef/api/'
export const getDataArg = async (apiUrl) => {
   const dataArg = {}
   try{
      const dataRes = await axios.get(
         `${baseApiUrl}${apiUrl}`
      )
      dataArg.provincias = dataRes
   }
   catch(err){
      return(err.response)
   }
   return dataArg 

}
