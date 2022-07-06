import axios from 'axios'
import {baseUrl} from '../context/store/AuthProvider'
import {
   usuariosUrl,
   matriculaUrlCompleta,
   matriculaUrlSingle,
   matriculaUrlActivo,
   matriculaUrlBaja,
   hardCodeData,
   municipiosArgUrl,
   callesArgUrl,
   currentYear,
   sealedDatabaseSingle,
} from '../helpers/Urls'

export const getSealedDatabaseSingle = async (
   userState
) => {

   const config = {
      headers: {
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": userState.token                
      }
   }

   const url = `${baseUrl}/${sealedDatabaseSingle}/${userState.currentYear}`

   try{
      const dataRes = await axios.get(
         url,
         config
      )
      return dataRes
   }
   catch(err){
      return err.response
   }
}

export const getCurrentYear = () => {

   const url = `${baseUrl}/${currentYear}`

   try{
      const dataRes = axios.get(url)
      return dataRes
   }
   catch(err){
      return err.response
   }

}

export const getFetchCallesArg =  async (
   token,
   municipio
) => {
   const config = {
      headers: {
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }
   }

   const url = `${baseUrl}/${callesArgUrl}/${municipio}`

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

export const getFetchMunicipiosArg =  async (
   token,
   provincia
) => {

   const config = {
      headers: {
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }
   }

   const url = `${baseUrl}/${municipiosArgUrl}/${provincia}`

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
   usuario,
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
   currentYear
) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `${baseUrl}/${matriculaUrlActivo}/${currentYear}` 
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
   currentYear
) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `${baseUrl}/${matriculaUrlCompleta}/${currentYear}` 
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

export const getMatriculaSingle = async (
   userState,
   nDniAlumno,
) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": userState.token                
      }           
   } 
   const url= `${baseUrl}/${matriculaUrlSingle}/${nDniAlumno}/${userState.currentYear}` 
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

