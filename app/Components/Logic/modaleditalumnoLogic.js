import {createStringDate} from './dateHandler'

import {
   updateAlumnoForEdit,
   updateDataAlumno,
} from '../../redux/actions/matricula.action'

import {
   updateFechaNacimiento,
   updateSwitchEdit,
   updateUpdatedData,
   show_ModalUpdate,
   show_ModalEditAlumno,
} from '../../redux/actions/modalEditAlumno.action'

export const handleSwitchEdit = (
   setSwitchEdit
) => {
   setSwitchEdit(false)
}

export const handleUpdateData = (
   modalEditRef,
   fechaNacimiento,
   dataAlumno,
   fechaIngreso,
   fechaEgreso,
   dispatch
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
      ingreso: fechaIngreso === '' ? '' : createStringDate(fechaIngreso),
      egreso: fechaEgreso === '' ? '' : createStringDate(fechaEgreso),
   }

   for (let i = 0 ; i < Object.keys(dataAlumno).length ; i ++){
      Object.values(dataAlumno)[i].toString() !== Object.values(newDataAlumno)[i].toString() ?
         changedData = {...changedData , [Object.keys(dataAlumno)[i]]: Object.values(newDataAlumno)[i]} 
         :
         null
   }
   if (Object.keys(changedData).length === 0)
   {  alert('No se realizaron cambios')
      dispatch(updateSwitchEdit())
   }else{
      dispatch(updateUpdatedData(changedData))   
      dispatch(show_ModalUpdate())
   }
}

export const handleChangeCalendar = (value,dispatch) => {
   dispatch(updateFechaNacimiento(value))
}

export const handleShow = (
   dispatch
) => {
   dispatch(show_ModalEditAlumno())
   dispatch(updateDataAlumno({}))
   dispatch(updateAlumnoForEdit(''))
}
