import {
   Form
} from 'react-bootstrap'

import {
   handleGradoChange
} from './Logic/matriculaLogic'

import {
   colors
} from '../Helpers/styleColors'

const SelectGradoAñoSala = ({nivel,grado,sala,setGrado,matriculaRef}) => { 

   const {Select} = Form

   return ( 
      <>
         {
            nivel !== 'Inicial' ?
               <Select
                  style={{color:colors.darken}}
                  aria-label='Grado/Año'
                  onChange={(event) => handleGradoChange(
                     event,
                     setGrado
                  )}
                  ref={(element) => matriculaRef.current[1] = element}
               >
                  <option>Grado/Año</option>
                  {grado.map((dataMap)=>
                  <option 
                     value={dataMap} 
                     key={dataMap}
                  >
                     {dataMap}
                  </option>
                  )} 
               </Select>
               :
               <Select
                  style={{color:colors.darken}}
                  aria-label='Sala'
                  onChange={(event) => handleGradoChange(
                     event,
                     setGrado
                  )}
                  ref={(element) => matriculaRef.current[1] = element}
               >
                  <option>Sala</option>
                  {sala.map((dataMap)=>
                  <option 
                     value={dataMap} 
                     key={dataMap}
                  >
                     {dataMap}
                  </option>
                  )} 
               </Select>
            }
      </>
   )
}

export default SelectGradoAñoSala
