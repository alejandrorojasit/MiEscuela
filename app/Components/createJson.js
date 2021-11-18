import {
   Nivel,
   Sexo,
   Vacunas,
   Division,
   Grado,
   datosRatificacion,
   datosRatificacion2,
   Role,
   ModelPdf,
   Denominacion,
} from '../Helpers/HardCodeData'

export function createJson (){
   let jsonData = {

   }
   jsonData = {...jsonData , Nivel,Sexo,Vacunas,Division,Grado,datosRatificacion,datosRatificacion2,Role,ModelPdf,Denominacion}

   console.log(jsonData)
}
