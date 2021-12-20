import {postFetchUpdateAlumno} from '../../Hooks/postFetch'

import { handleGetDataAlumno } from '../Logic/matriculaLogic'

import {DecodeToken} from './../Logic/tokenhandler'

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
      user: context.stateUser.user,
      puesto: DecodeToken(context).usuario.role,
      fecha: new Date().toLocaleString(),
      observacion: nuevaObservacionState
   }
   let dataRegistro = {
      user: context.stateUser.user,
      fecha: new Date().toLocaleString(),
      cambios: [`Observacion: ${nuevaObservacionState}`]
   }
   postFetchUpdateAlumno(
      context.stateUser.token,
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
