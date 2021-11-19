import {postFetchUpdateAlumno} from '../../Hooks/postFetch'

export const handleClose = (setShowModalEditObservaciones) => {
   setShowModalEditObservaciones(false)
}

export const handleChange = (event,setNuevaObservacion) => {
   setNuevaObservacion(event.target.value)
}

export const handleClickAñadir = (nuevaObservacionState,id,context,apiUrl) => {
   let updatedData = {
      user: context.stateUser.user,
      fecha: new Date().toLocaleString(),
      observacion: nuevaObservacionState
   }
   let dataRegistro = {
      user: context.stateUser.user,
      fecha: new Date().toLocaleString(),
      cambios: [`Observacion: ${nuevaObservacionState}`]
   }
   postFetchUpdateAlumno(context.stateUser.token,updatedData,apiUrl,id,dataRegistro)   
   }
