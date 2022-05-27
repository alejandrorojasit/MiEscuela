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
   nuevaObservacionState,
   id,
   context,
   apiUrl,
   selectedAlumnoForEdit,
   setDataAlumno
) => {

   let updatedData = {
      user: context.user,
      puesto: DecodeToken(context).usuario.role,
      fecha: new Date().toLocaleString(),
      observacion: nuevaObservacionState
   }
   let dataRegistro = {
      user: context.user,
      fecha: new Date().toLocaleString(),
      cambios: [`Observacion: ${nuevaObservacionState}`]
   }
   postFetchUpdateAlumno(
      context.token,
      updatedData,
      apiUrl,
      id,
      dataRegistro
   ).then((res)=>{
      if(res.status === 200){
         handleGetDataAlumno(
            context,
            selectedAlumnoForEdit,
            setDataAlumno,
         )
      }
   })
}
