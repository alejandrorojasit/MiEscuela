import axios from 'axios'
import { postFetchNuevoAlumno } from '../../hooks/postFetch'
import { nuevoAlumnoUrl } from '../../helpers/Urls'
import { findLastFile } from './findLastFile'

import {
   getCurrentYear
} from '../../hooks/getFetch'

const baseApiUrl = 'https://apis.datos.gob.ar/georef/api/'



export const handleCallBack = (boolean) => {
   
}

export const getDataArg = async (apiUrl) => {
   const dataArg = {}
   try{
      const dataRes = await axios.get(
         `${baseApiUrl}${apiUrl}`
      )
      dataArg.provincias = dataRes
   }
   catch(err){
      return(err.response)
   }
   return dataArg 

}

export const handleClick = async (
   userState,
   dataAlumno
) => {
   const nroLegajo = await findLastFile(
      userState
   )
   dataAlumno = {
      ...dataAlumno,
      nroLegajo,
      tipo           : 'D.N.I',
      estado         : 'Activo',
      cuil           : '',
      registroSalud  : [],
      registro       : [],
      observaciones  : [],
      egreso         : 'Sin datos',
      examenVisual   : 'No',
      certSalud      : 'No',
      certBucoDental : 'No',
      vacunasAlDia   : 'No',
      antivariolica  : 'No',
      bcg            : 'No',
      triple         : 'No',
      doble          : 'No',
      sabin          : 'No',
      antiSarampion  : 'No',
      otras1         : 'No',
      otras2         : 'No',
   }
   const res = await postFetchNuevoAlumno(
      userState,
      nuevoAlumnoUrl,
      dataAlumno
   )
   if(res.status === 200){
      return res
   }
}

