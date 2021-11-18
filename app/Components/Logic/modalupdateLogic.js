import {postFetchUpdateAlumno} from '../../Hooks/postFetch'

export const handleShow = (setShowModalUpdate) => {
   setShowModalUpdate(false)
}

export const handleClickAccept = (updatedData,token,apiUrl,id,dataRegistro,setAlumnoEditModal,setShowModalUpdate,setSwitchEdit,setSelectedAlumnoForEdit) => {
   postFetchUpdateAlumno(token,updatedData,apiUrl,id,dataRegistro)
   setShowModalUpdate(false)
   setAlumnoEditModal(false)
   setSwitchEdit(true)
   setSelectedAlumnoForEdit('')
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
