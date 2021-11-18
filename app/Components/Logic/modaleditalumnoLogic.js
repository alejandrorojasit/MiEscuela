import {createStringDate} from './dateHandler'

export const handleSwitchEdit = (
   setSwitchEdit
) => {
   setSwitchEdit(false)
}

export const handleUpdateData = (modalEditRef,fechaNacimiento,dataAlumno,setSwitchEdit,updatedData,setShowModalUpdate,setUpdatedData) => {
   let newDataAlumno = {}
   let changedData = {}
   for(let i = 0 ; i < Object.keys(dataAlumno).length - 3 ; i ++){
      modalEditRef.current[i] !== undefined ? 
         newDataAlumno = {...newDataAlumno , [Object.keys(dataAlumno)[i]] : modalEditRef.current[i].value}
         :
         newDataAlumno = {...newDataAlumno , [Object.keys(dataAlumno)[i]] : Object.values(dataAlumno)[i] 
         }
   }
         newDataAlumno = {...newDataAlumno, fechaNacimiento: createStringDate(fechaNacimiento)}

   for (let i = 0 ; i < Object.keys(dataAlumno).length - 3 ; i ++){
      Object.values(dataAlumno)[i].toString() !== Object.values(newDataAlumno)[i] ?
         changedData = {...changedData , [Object.keys(dataAlumno)[i]]: Object.values(newDataAlumno)[i]} 
         :
         null
   }
   if (Object.keys(changedData).length === 0)
      {alert('No se realizaron cambios')
         setSwitchEdit(true)}
   else{
      setUpdatedData(changedData)
      setShowModalUpdate(true)
   }
}

export const handleChangeCalendar = (value,setFechaNacimiento) => {
   setFechaNacimiento(value)
}

export const handleShow = (setAlumnoEditModal,setDataAlumno,setSelectedAlumnoForEdit) => {
   setAlumnoEditModal(false)
   setDataAlumno({})
   setSelectedAlumnoForEdit('')
}
