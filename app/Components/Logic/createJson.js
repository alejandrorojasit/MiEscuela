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
} from '../helpers/HardCodeData'

export function createJson (){
   let jsonData = {
      ...jsonData,
      Nivel,
      Sexo,
      Vacunas,
      Division,
      Grado,
      datosRatificacion,
      datosRatificacion2,
      Role,
      ModelPdf,
      Denominacion
   }
}
