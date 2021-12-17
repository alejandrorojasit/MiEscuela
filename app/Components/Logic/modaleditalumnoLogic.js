import {createStringDate} from './dateHandler'

export const handleSwitchEdit = (
   setSwitchEdit
) => {
   setSwitchEdit(false)
}

export const handleUpdateData = (
   modalEditRef,
   fechaNacimiento,
   dataAlumno,
   setSwitchEdit,
   updatedData,
   setShowModalUpdate,
   setUpdatedData,
   fechaIngreso,
   fechaEgreso,
) => {

   let newDataAlumno = {}
   let changedData = {}

   for(let i = 0 ; i < Object.keys(dataAlumno).length ; i ++){
      if(modalEditRef.current[i] !== undefined){
         newDataAlumno = {...newDataAlumno , [Object.keys(dataAlumno)[i]] : modalEditRef.current[i].value}
      }else{
            newDataAlumno = {...newDataAlumno , [Object.keys(dataAlumno)[i]] : Object.values(dataAlumno)[i] 
            }
      }
   }
   newDataAlumno = {...newDataAlumno, 
      fechaNacimiento: createStringDate(fechaNacimiento),
      ingreso: fechaIngreso === '' ? 'Sin datos' : createStringDate(fechaIngreso),
      egreso: fechaEgreso === '' ? 'Sin datos' : createStringDate(fechaEgreso),
   }

   for (let i = 0 ; i < Object.keys(dataAlumno).length ; i ++){
      Object.values(dataAlumno)[i].toString() !== Object.values(newDataAlumno)[i].toString() ?
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
