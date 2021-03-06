import {
   ageCalculate,
   splitDate,
   ageCalculate3006
} from './dateHandler'
import {postUpdateWholeDB} from '../../hooks/postFetch'
import {updateWholeDB} from '../../helpers/Urls'
import {getMatriculaSingle} from '../../hooks/getFetch'

import {
   updateAlumnoForEdit,
   updateDataAlumno
} from '../../redux/actions/matricula.action'

import {
   show_ModalEditAlumno
} from '../../redux/actions/modalEditAlumno.action'

import {
   updateNivel,
   updateGrado,
   updateDivision,
   updateIsFiltredState1,
   updateFiltredDatosStage1,
   updateIsFiltredState2,
   updateFiltredDatosStage2,
   resetState,
   updateNombreFilter,
   updateApellidoFilter,
   updateEdadFilter,
   updateEdad3006Filter,
} from '../../redux/actions/selectFormStage1&2.actions'

export const checkIsSealed = (
   sealedDatabase,
   nivel,
) => {
   switch(nivel){
      case "Inicial":
         return sealedDatabase.isSealedIniPrim
      case "Primario":
         return sealedDatabase.isSealedIniPrim
      case "Secundario":
         return sealedDatabase.isSealedSecu
   }
}

export const handleGetDataAlumno = async (
   userState,
   nDniAlumno,
   dispatch
) => {
   const dataRes = await getMatriculaSingle(
      userState,
      nDniAlumno,
   )
   dataRes.data?.registro?.reverse()
   dataRes.data?.registroSalud?.reverse()
   dataRes.data?.observaciones?.reverse()
   dispatch(updateDataAlumno(dataRes.data))
}

export const handleLastName = (
   event,
   alumnosFullList,
   isFiltredStage1,
   filtredDatosAlumnoStage1,
   dispatch,
)=> {

   let newArray = []

   dispatch(updateApellidoFilter(event.target.value))

   if(event.target.value.length >= 3 && isFiltredStage1 === true){
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => dataFilter.apellido.indexOf(toOwnName(event.target.value)) > -1)
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2(newArray))
   }
   if(event.target.value.length >= 3 && isFiltredStage1 === false){
      newArray = alumnosFullList.filter((dataFilter) => dataFilter.apellido.indexOf(toOwnName(event.target.value)) > -1)
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2(newArray))
   }
   if(event.target.value.length === 0){
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2([]))
   }
}

export const handleFirstName = (
   event,
   alumnosFullList,
   isFiltredStage1,
   filtredDatosAlumnoStage1,
   dispatch,
)=> {

   let newArray = []

   dispatch(updateNombreFilter(event.target.value))

   if(event.target.value.length >= 3 && isFiltredStage1 === true){
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => dataFilter.nombre.indexOf(toOwnName(event.target.value)) > -1)
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2(newArray))
   }
   if(event.target.value.length >= 3 && isFiltredStage1 === false){
      newArray = alumnosFullList.filter((dataFilter) => dataFilter.nombre.indexOf(toOwnName(event.target.value)) > -1)
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2(newArray))
   }
   if(event.target.value.length === 0){
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2([]))
   }
}

export const handleNivelChange =(event,dispatch) => {
   dispatch(updateNivel(event.nativeEvent.target.value))
}

export const handleGradoChange =(event,dispatch) => {
   dispatch(updateGrado(event.nativeEvent.target.value))
}

export const handleDivisionChange =(event,dispatch) => {
   dispatch(updateDivision(event.nativeEvent.target.value))
}

export const handleEdad = (
   event,
   alumnosFullList,
   isFiltredStage1,
   filtredDatosAlumnoStage1,
   dispatch
)=> {

   let newArray = []

   dispatch(updateEdadFilter(event.target.value))

   if(event.target.value.length >= 1 && isFiltredStage1 === true){
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => ageCalculate(splitDate(dataFilter.fechaNacimiento,3)) == parseInt(event.target.value))
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2(newArray))
   }
   if(event.target.value.length >= 1 && isFiltredStage1 === false){
      newArray = alumnosFullList.filter((dataFilter) => ageCalculate(splitDate(dataFilter.fechaNacimiento,3)) == parseInt(event.target.value))
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2(newArray))
   }
   if(event.target.value.length === 0){
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2([]))
   }
}

export const handleEdad3006 = (
   event,
   alumnosFullList,
   isFiltredStage1,
   filtredDatosAlumnoStage1,
   dispatch
)=> {

   let newArray = []

   dispatch(udpateEdad3006Filter(event.target.value))

   if(event.target.value.length >= 1 && isFiltredStage1 === true){
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => ageCalculate3006(splitDate(dataFilter.fechaNacimiento,3)) == parseInt(event.target.value))
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2(newArray))
   }
   if(event.target.value.length >= 1 && isFiltredStage1 === false){
      newArray = alumnosFullList.filter((dataFilter) => ageCalculate3006(splitDate(dataFilter.fechaNacimiento,3)) == parseInt(event.target.value))
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2(newArray))
   }
   if(event.target.value.length === 0){
      dispatch(updateIsFiltredState2())
      dispatch(updateFiltredDatosStage2([]))
   }
}


export const handleEdit = (
   nDniAlumno,
   dispatch,
   userState,
) => {
   dispatch(updateAlumnoForEdit(nDniAlumno))
   handleGetDataAlumno(
      userState,
      nDniAlumno,
      dispatch
   )
   dispatch(show_ModalEditAlumno())
}

export const handleClickApplyFilter = (
   nivelState,
   gradoState,
   divisionState,
   alumnosFullList,
   dispatch
)=> {
   let newArray = []     
   switch(true){
      case nivelState !== 'Nivel' && gradoState === 'Grado/A??o' && divisionState === 'Division':
         newArray = alumnosFullList.filter((dataFilter) => dataFilter.nivel === nivelState)
         dispatch(updateIsFiltredState1())
         dispatch(updateFiltredDatosStage1(newArray))
         break
      case nivelState !== 'Nivel' && gradoState !== 'Grado/A??o' && divisionState === 'Division':
         newArray = alumnosFullList.filter((dataFilter) => dataFilter.nivel === nivelState && dataFilter.grado === parseInt(gradoState))
         dispatch(updateIsFiltredState1())
         dispatch(updateFiltredDatosStage1(newArray))
         break
      case nivelState !== 'Nivel' && gradoState !== 'Grado/A??o' && divisionState !== 'Division':
         newArray = alumnosFullList.filter((dataFilter) => dataFilter.nivel === nivelState && dataFilter.grado === parseInt(gradoState) && dataFilter.division === divisionState)
         dispatch(updateIsFiltredState1())
         dispatch(updateFiltredDatosStage1(newArray))
         break
   }
}

export const handleClickLimpiarFiltros = (
   matriculaRef,
   dispatch
)=> {
   dispatch(resetState())
   matriculaRef.current[0].options.selectedIndex = 0
   matriculaRef.current[1].options.selectedIndex = 0
   matriculaRef.current[2].options.selectedIndex = 0
}

export const handleClickLimpiarFiltrosStage1 = (
   matriculaRef,
   dispatch
)=> {
   dispatch(resetState())
}

export const toFirstUpperCase = (string) => { 
   let stringToLower = string.toLowerCase()
   if(stringToLower.length > 0){
      return stringToLower[0].toUpperCase() + stringToLower.slice(1)
   }else{
      return 'Sin datos'
   }
}

export const toOwnName = (string) => {

   let splitString = string.split(' ')
   let returnString = ''
   let spaceString = ''
   splitString.map((dataMap,index)=> {
      if(index === splitString.length - 1){
         spaceString = ''
      }else{
         spaceString = ' '
      }
      if(dataMap.length > 0){
         returnString = returnString + toFirstUpperCase(dataMap) + spaceString
      }else {
         splitString.splice(index,1)
      }
   })
   return returnString
}

export const cleanEmptyStringArray = (dataArray) => {
   let returnArray=[]
   dataArray.map((dataMap,index)=>{
      if(dataMap !== 'Sin Datos'){
         returnArray = [...returnArray,dataMap]
      }
   })
   return returnArray
}

export const changeEntireDataBaseToLowerCase = (data,token) => {
   let updatedData = {}
   let id = ""
   data.map((dataMap,index)=> {
      Object.keys(dataMap).map((dataMapKeys,indexKeys)=> {
         switch(dataMapKeys){
            case 'apellido':
               updatedData = {...updatedData ,[dataMapKeys]: toOwnName(dataMap[dataMapKeys]) }
               break
            case 'apellidoTutor':
               updatedData = {...updatedData ,[dataMapKeys]: toOwnName(dataMap[dataMapKeys]) }
               break
            case 'nombre':
               updatedData = {...updatedData ,[dataMapKeys]: toOwnName(dataMap[dataMapKeys]) }
               break
            case 'localidad':
               updatedData = {...updatedData ,[dataMapKeys]: toOwnName(dataMap[dataMapKeys]) }
               break
            case 'lugarNacimiento':
               updatedData = {...updatedData ,[dataMapKeys]: toOwnName(dataMap[dataMapKeys]) }
               break
            case 'lugarNacimiento':
               updatedData = {...updatedData ,[dataMapKeys]: toOwnName(dataMap[dataMapKeys]) }
               break
            case 'provincia':
               updatedData = {...updatedData ,[dataMapKeys]: toOwnName(dataMap[dataMapKeys]) }
               break
            case 'provinciaNacimiento':
               updatedData = {...updatedData ,[dataMapKeys]: toOwnName(dataMap[dataMapKeys]) }
               break
            case 'tipo':
               break
            case 'grado':
               break
            case 'observaciones':
               updatedData = {...updatedData,[dataMapKeys]: cleanEmptyStringArray(dataMap[dataMapKeys])}
               break
            case 'registro':
               updatedData = {...updatedData,[dataMapKeys]: cleanEmptyStringArray(dataMap[dataMapKeys])}
               break
            case 'registroSalud':
               updatedData = {...updatedData,[dataMapKeys]: cleanEmptyStringArray(dataMap[dataMapKeys])}
               break
            case '_id':
               id = dataMap[dataMapKeys]
               break
            default:
            updatedData = {...updatedData ,[dataMapKeys]: toFirstUpperCase(dataMap[dataMapKeys]) }
            break

         }
         postUpdateWholeDB(token,updatedData,updateWholeDB,id)
      })   
   }) 
}

