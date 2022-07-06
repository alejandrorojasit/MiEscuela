import {postFetchUpdateAlumno} from '../../hooks/postFetch'
import {handleGetDataAlumno} from './../logic/matriculaLogic'

import {
   show_ModalUpdate,
   updateSwitchEdit
} from '../../redux/actions/modalEditAlumno.action'

export const handleShow = (setShowModalUpdate) => {
   setShowModalUpdate(false)
}

export const handleClickAccept = (
   updatedData,
   userState,
   apiUrl,
   id,
   dataRegistro,
   selectedAlumnoForEdit,
   dispatch
) => {
   postFetchUpdateAlumno(
      userState,
      updatedData,
      apiUrl,
      id,
      dataRegistro
   )
      .then((res)=> {
         if(res.status === 200){
            handleGetDataAlumno(
               userState,
               selectedAlumnoForEdit,
               dispatch,
            )
         }
      } 
      
   )
   dispatch(show_ModalUpdate())
   dispatch(updateSwitchEdit())
}

export const createDataRegistro = (dataAlumno,updatedData,usuario) => {
   let dataRegistro = {}
   dataRegistro = {
      user: usuario,
      fecha: new Date().toLocaleString(),
      cambios:[]
   } 
   
   Object.keys(updatedData).map((dataMap,index)=>{
      dataRegistro.cambios.push(`${dataMap} | Anterior: ${dataAlumno[dataMap]} | Nuevo: ${Object.values(updatedData)[index]}`)
   })
   return dataRegistro
}
