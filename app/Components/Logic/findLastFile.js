import { getMatriculaCompleta } from '../../Hooks/getFetch'

export const findLastFile = async (token) => {
   let lastNumber = ''
   const data = await getMatriculaCompleta(token)

   for(let i = 0;i < data.data.length;i++){
      if (data.data[i].nroLegajo !== 'Sin Datos' || data.data[i].nroLegajo !== undefined){
         if(lastNumber < parseInt(data.data[i].nroLegajo)){
         lastNumber = data.data[i].nroLegajo
      }
      } 
   }
   return parseInt(lastNumber) + 1
}
