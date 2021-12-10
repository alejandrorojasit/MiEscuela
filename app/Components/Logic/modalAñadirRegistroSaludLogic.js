import {postFetchUpdateRegistroSalud} from '../../Hooks/postFetch'

import {
   handleGetDataAlumno,
} from '../Logic/matriculaLogic'


export const handleClickAñadir = (nuevoRegistroSalud,dataAlumno,context,updateRegistroSaludUrl,setDataAlumno,selectedAlumnoForEdit) => {
   let dataToSend = {
      usuario: context.stateUser.user,
      fecha: new Date().toLocaleString(),
      data: nuevoRegistroSalud
   }
   
   postFetchUpdateRegistroSalud(context.stateUser.token,dataToSend,updateRegistroSaludUrl,dataAlumno).then((res)=>{
      if(res.status === 200){
         handleGetDataAlumno(context,selectedAlumnoForEdit,setDataAlumno,selectedAlumnoForEdit)
      }
   })
}



