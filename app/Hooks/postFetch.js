import axios from 'axios'
import {baseUrl} from '../Context/Store/AuthProvider'

export const postFetchUpdateRegistroSalud = async (
   token,
   dataToSend,
   apiUrl,
   id,
) => {

   let objetToSend = {
      _id : id,
      data: dataToSend,
   }
   const url= `${baseUrl}/${apiUrl}`  
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         objetToSend,
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}

export const postFetchUpdateAlumno = async (

   token,
   updatedData,
   apiUrl,
   id,
   dataRegistro,

) => {
   let objetToSend = {
      _id : id, 
      data : updatedData,
      dataRegistro: dataRegistro,
   }
   const url= `${baseUrl}/${apiUrl}`  
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         objetToSend,
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}

export const postFetchUpdateUser = async (
   token,
   updatedData,
   apiUrl,
   _id,
) =>  {
   let objetToSend = {
      _id : _id, 
      data : updatedData,
   }
   const url= `${baseUrl}/${apiUrl}`  
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         objetToSend,
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}

export const postUpdateWholeDB = async (
   token,
   updatedData,
   apiUrl,
   id,
) => {
   let objetToSend = {
      _id : id, 
      data : updatedData,
   }
   const url= `${baseUrl}/${apiUrl}`  
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         objetToSend,
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}

export const postCopyWholeDb = async (
   token,
   dataDb,
   apiUrl,
) => {
   let objetToSend = {
      data : dataDb,
   }
   const url= `${baseUrl}/${apiUrl}`  
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         objetToSend,
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}
export const postFetchAddUser = async (
   token,
   usuario,
   password,
   role,
   permissions,
   apiUrl
) => {
   const url= `${baseUrl}/${apiUrl}`  

   const dataPost = {
      usuario,
      password,
      role,
      permissions
   }
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         dataPost,
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}

export const postFetchLogIn = async (
   usuario,
   password,
   apiUrl
) => {
   const url= `${baseUrl}/${apiUrl}`  
   const dataPost = {
      usuario:usuario,
      password:password
   }
   try{
      const resData = await axios.post(
         url,
         dataPost
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}

export const postFetchRatificacion = async (
   token,
   nivel,
   grado,
   division,
   apiUrl
) => {
   const url= `${baseUrl}/${apiUrl}`  
   const dataPost = {
      NIVEL:nivel,
      GRADO:grado,
      DIVISION:division,
   }
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }
   }
   try{
      const resData = await axios.post(
         url,
         dataPost,
         config
      )
      return resData
   }
   catch(err){
      return(err.response)
   }
}

export const postFetchVerifyToken = async (
   token,
   apiUrl
) => {
   const url= `${baseUrl}/${apiUrl}`  
   const dataPost = {}
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         dataPost,
         config
      )
      return resData

   }catch(err){
      return(err.response)
   }
}

export const postFetchNuevaDenominacion = async (
   token,
   apiUrl,
   denominacion

) => {
   const url = `${baseUrl}/${apiUrl}`

   const dataPost = {
      denominacion
   }
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         dataPost,
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}

export const postFetchNuevoAlumno = async (
   token,
   apiUrl,
   dataPost
) => {

const url = `${baseUrl}/${apiUrl}`

   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         dataPost,
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}
