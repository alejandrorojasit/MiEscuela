import axios from 'axios'
import {baseUrl} from '../Context/Store/AuthProvider.jsx'

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
   const url= `http://${baseUrl}:3000/${apiUrl}`  
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
   const url= `http://${baseUrl}:3000/${apiUrl}`  
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
   apiUrl
) => {
   const url= `http://${baseUrl}:3000/${apiUrl}`  

   const dataPost = {
      usuario:usuario,
      password:password,
      role:role
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
   const url= `http://${baseUrl}:3000/${apiUrl}`  
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
   const url= `http://${baseUrl}:3000/${apiUrl}`  
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
   const url= `http://${baseUrl}:3000/${apiUrl}`  
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
