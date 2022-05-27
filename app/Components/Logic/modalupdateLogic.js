import {postFetchUpdateAlumno} from '../../hooks/postFetch'
import {handleGetDataAlumno} from './../logic/matriculaLogic'

export const handleShow = (setShowModalUpdate) => {
   setShowModalUpdate(false)
}

export const handleClickAccept = (
   updatedData,
   context,
   apiUrl,
   id,
   dataRegistro,
   setAlumnoEditModal,
   setShowModalUpdate,
   setSwitchEdit,
   setSelectedAlumnoForEdit,
   selectedAlumnoForEdit,
   setDataAlumno
) => {
   postFetchUpdateAlumno(context.token,updatedData,apiUrl,id,dataRegistro)
      .then((res)=> {
         if(res.status === 200){
            handleGetDataAlumno(
               context,
               selectedAlumnoForEdit,
               setDataAlumno,
            )
         }
      } 
      
   )
   setShowModalUpdate(false)
   setSwitchEdit(true)
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
