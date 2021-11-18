import {
   Button,
} from 'react-bootstrap'

import { postFetchRatificacion } from "../../Hooks/postFetch"

import { ratificacionUrl } from "../../Helpers/Urls"

export const handleClickNivel = (item,setNivel) => {
   setNivel(item)
}

export const handleClickGrado = (item,setGrado) => {
   setGrado(item)
}

export const handleClickDivision = (item,setDivision) => {
   setDivision(item)
} 

export const updateLista = (data,setDatosAlumno) => {
   setDatosAlumno([...datosAlumno,data])
}

export const handleChangeModel = (event,setModelo) => {
   setModelo(event.target.value)
}

export const handleAcceptModel = (setShowModalPdfSelection,setShowModalItemsToPrint) => {
   setShowModalPdfSelection(false)
   setShowModalItemsToPrint(true)
}
export const generarInforme = (setDatosAlumno,setShowModalItems,nivel,division,grado,context) => {
   if(nivel !== 'Nivel' && division !== 'Division' && grado !== 'Grado'){
      postFetchRatificacion(context.stateUser.token,nivel,grado,division,ratificacionUrl).then((data)=> {
         setDatosAlumno(data.data)
      })
   }else {
      alert('La seleccion de Nivel,Grado y Division son obligatorias')
   }
   setShowModalItems(true)
}

export const handleDelete = (dni,setFiltredDatosAlumnoStage1,filtredDatosAlumnoStage1) => {
   const dataAlumnosSinFiltrar = filtredDatosAlumnoStage1
   let filtrado = []
   for (var i = 0; i < dataAlumnosSinFiltrar.length; i++){
      if(dataAlumnosSinFiltrar[i].N_DNI_ALUMNO !== dni){
         filtrado = [...filtrado,dataAlumnosSinFiltrar[i]]
      }
   }
   setFiltredDatosAlumnoStage1(filtrado)
}

export const conditionalButtonReder = (selectedItems,filtredDatosAlumnoStage1,setShowModalPdfSelection) => {
   switch(true){
      case filtredDatosAlumnoStage1.length < 0 :
         return null
      case filtredDatosAlumnoStage1.length > 0 :
         return (<Button 
            variant='outline-primary' 
            size='sm'
            onClick={()=> setShowModalPdfSelection(true)}
         >Generar Informe</Button>
         )
   }
}
