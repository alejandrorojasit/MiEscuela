import {
   putFinCicloLectivo
} from '../../hooks/postFetch'

import {
   modalAlert_updateCallBack,
   modalAlert_updateModel,
   modalAlert_updateMessage,
   modalAlert_updateStateShow,
} from '../../redux/actions/modalAlert.action'

import {
   getSealedDatabaseSingle
} from '../../hooks/getFetch'

import {
   sealedDatabase_updateWholeState
} from '../../redux/actions/sealedDatabase.action'

const handlePut = async (
   userState,
   finDeCicloLectivoUrl,
   dataPut,
   dispatch,
) => {
   const res = await putFinCicloLectivo (
      userState,
      finDeCicloLectivoUrl,
      dataPut
   )
   if (res.status === 200){
      const sealedDatabaseData =  await getSealedDatabaseSingle(userState)     
      dispatch(sealedDatabase_updateWholeState(sealedDatabaseData.data))
   }
}

export const handleFinCicloLectivo = async (
   userState,
   finDeCicloLectivoUrl,
   role,
   sealedDatabase,
   dispatch,
) => {
   let dataPut = {}
   switch(true){
      case role === "Coordinacion Administrativa Nivel Primario" && !sealedDatabase.isSealedIniPrim :
         dataPut = {
            currentYear: userState.currentYear,
            forSeal : {isSealedIniPrim:true} 
         } 
         break
      case role === "Coordinacion Administrativa Nivel Secundario" && !sealedDatabase.isSealedSecu :
         dataPut = {
            currentYear: userState.currentYear,
            forSeal: {isSealedSecu:true}
         }
         break
      default:
      dispatch(modalAlert_updateMessage('La base de datos ya esta sellada para su nivel.')) 
      dispatch(modalAlert_updateCallBack(()=>{}))
      dispatch(modalAlert_updateStateShow())
   }

   if(Object.keys(dataPut).length > 0){
      dispatch(modalAlert_updateMessage('¿Esta segur@ que desea sellar la base de datos? Una vez realizada esta accion, la matricula quedara sellada y no se podran realizar cambios sobre ella.'))
      dispatch(modalAlert_updateModel('AcceptCancel'))
      dispatch(modalAlert_updateCallBack((value)=> {
         if(value){
            handlePut(
               userState,
               finDeCicloLectivoUrl,
               dataPut,
               dispatch,
            )
         }
      }))
      dispatch(modalAlert_updateStateShow())
   }
}
