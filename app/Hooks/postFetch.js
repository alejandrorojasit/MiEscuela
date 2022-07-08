import axios from 'axios'
import {baseUrl} from '../context/store/AuthProvider'

export const postFetchUpdateRegistroSalud = async (
   userState,
   dataToSend,
   apiUrl,
   id,
) => {

   let objetToSend = {
      _id : id,
      data: dataToSend,
      currentYear:userState.currentYear
   }
   const url= `${baseUrl}/${apiUrl}`  
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": userState.token                
      }           
   }
   try{
      const resData = await axios.put(
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
   userState,
   updatedData,
   apiUrl,
   id,
   dataRegistro,

) => {
   let objetToSend = {
      _id : id, 
      data : updatedData,
      dataRegistro: dataRegistro,
      currentYear:userState.currentYear
   }
   const url= `${baseUrl}/${apiUrl}`  
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": userState.token                
      }           
   }
   try{
      const resData = await axios.put(
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
      const resData = await axios.put(
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
      const resData = await axios.put(
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
   userState,
   apiUrl,
) => {
   const url= `${baseUrl}/${apiUrl}`  
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": userState.token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         {
            currentYear: userState.currentYear
         },
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
   userState,
   apiUrl,
   dataPost
) => {

const url = `${baseUrl}/${apiUrl}`

   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": userState.token                
      }           
   }
   try{
      const resData = await axios.post(
         url,
         {
            currentYear: userState.currentYear,
            dataPost,
         },
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}

export const putFinCicloLectivo = async (
   userState,
   apiUrl,
   dataPut,
) => {
const url = `${baseUrl}/${apiUrl}`

   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": userState.token                
      }           
   }
   try{
      const resData = await axios.put(
         url,
         dataPut,
         config
      )
      return resData
   }
   catch(err) {
      return(err.response)
   }
}

