import {postFetchUpdateRegistroSalud} from '../../hooks/postFetch'

import {
   handleGetDataAlumno,
} from '../logic/matriculaLogic'


export const handleClickAñadir = (
   nuevoRegistroSalud,
   dataAlumno,
   userState,
   updateRegistroSaludUrl,
   dispatch
) => {
   let dataToSend = {
      usuario: userState.user,
      fecha: new Date().toLocaleString(),
      data: nuevoRegistroSalud
   }
   
   postFetchUpdateRegistroSalud(
      userState,
      dataToSend,
      updateRegistroSaludUrl,
      dataAlumno
   ).then((res)=>{
      if(res.status === 200){
         handleGetDataAlumno(userState,dataAlumno,dispatch)
      }
   })
}



