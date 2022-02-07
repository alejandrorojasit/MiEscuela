export const handleFilter = (event,data) => {
   let filteredData = []
   switch(event.target.value){
      case  'filterSecretariaAdministrativa':
      filteredData = data.observaciones?.filter(dataFilter => 
      dataFilter.puesto === 'Auxiliar Sec. Administrativo/a'
   )
         return filteredData
      default:
         return data.observaciones
   }
}


