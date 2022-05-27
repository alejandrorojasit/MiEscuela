import axios from 'axios'
import {baseUrl} from '../context/store/AuthProvider'
import {
   usuariosUrl,
   matriculaUrlCompleta,
   matriculaUrlSingle,
   matriculaUrlActivo,
   matriculaUrlBaja,
   hardCodeData,
} from '../helpers/Urls'

export const getFetchUsuarios = async (token) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `${baseUrl}/${usuariosUrl}` 
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
   const url= `${baseUrl}/${usuariosUrl}/${usuario}` 
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

export const getMatriculaActivo = async (
   token,
) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `${baseUrl}/${matriculaUrlActivo}` 
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

export const getMatriculaCompleta = async (
   token,
) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `${baseUrl}/${matriculaUrlCompleta}` 
   try{
   const dataRes = await axios.get(
      url,
      config,
   )
   return dataRes
   }
   catch(err)
   {
      return(err.response)
   }
}

export const getMatriculaBaja = async (
   token,
) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `${baseUrl}/${matriculaUrlBaja}` 
   try{
   const dataRes = await axios.get(
      url,
      config,
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
   const url= `${baseUrl}/${matriculaUrlSingle}/${DNI}` 
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
   const url= `${baseUrl}/${hardCodeData}` 
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

