import axios from 'axios'
import {baseUrl} from '../Context/Store/AuthProvider.jsx'
import {
   usuariosUrl,
   matriculaUrlSingle,
   matriculaUrlActivo,
   hardCodeData,
} from '../Helpers/Urls'

export const getFetchUsuarios = async (token) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `http://${baseUrl}:3000/${usuariosUrl}` 
   try{
   const dataRes = await axios.get(
      url,
      config
   )
   return dataRes

   }
   catch(err) {
      return (err.response)      
   }
}

export const getFetchUsuarioSingle = async (
   token,
   usuario
) => {

   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `http://${baseUrl}:3000/${usuariosUrl}/${usuario}` 
   try{
const dataRes = await axios.get(
      url,
      config
   )
   return dataRes
   }
   catch(err){
      return (err.response)
   }
   
}

export const getMatricula = async (token) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `http://${baseUrl}:3000/${matriculaUrlActivo}` 
   try{
   const dataRes = await axios.get(
      url,
      config
   )
   return dataRes
   }
   catch(err)
   {
      return(err.response)
   }
   
}

export const getMatriculaSingle = async (token,DNI) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `http://${baseUrl}:3000/${matriculaUrlSingle}/${DNI}` 
   try{
   const dataRes = await axios.get(
      url,
      config
   )
   return dataRes
   }
   catch(err) {
      return (err.response)
   }
}

export const getHardCodeData = async (token) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `http://${baseUrl}:3000/${hardCodeData}` 
   try{
   const dataRes = await axios.get(
      url,
      config
   )
   return dataRes
   }
   catch(err) {
      return (err.response)
   }
}

