import {postFetchUpdateAlumno} from '../../hooks/postFetch'

import { handleGetDataAlumno } from '../logic/matriculaLogic'

import {DecodeToken} from './../logic/tokenhandler'

export const handleClose = (setShowModalEditObservaciones) => {
   setShowModalEditObservaciones(false)
}

export const handleChange = (
   event,
   setNuevaObservacion
) => {

   setNuevaObservacion(event.target.value)
}

export const handleClickAñadir = (
   userState,
   nuevaObservacion,
   id,
   apiUrl,
   selectedAlumnoForEdit,
   dispatch
) => {

   let updatedData = {
      user: userState.user,
      puesto: DecodeToken(userState).usuario.role,
      fecha: new Date().toLocaleString(),
      observacion: nuevaObservacion
   }
   let dataRegistro = {
      user: userState.user,
      fecha: new Date().toLocaleString(),
      cambios: [`Observacion: ${nuevaObservacion}`]
   }
   postFetchUpdateAlumno(
      userState.token,
      updatedData,
      apiUrl,
      id,
      dataRegistro
   ).then((res)=>{
      if(res.status === 200){
         handleGetDataAlumno(
            userState,
            selectedAlumnoForEdit,
            dispatch,
         )
      }
   })
}
