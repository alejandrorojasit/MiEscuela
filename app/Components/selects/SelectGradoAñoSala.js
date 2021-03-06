import {
   Form
} from 'react-bootstrap'

import {
   handleGradoChange
} from '../logic/matriculaLogic'

import {
   colors
} from '../../helpers/styleColors'

import {
   useSelector,
   useDispatch
} from 'react-redux'

const SelectGradoAñoSala = ({
   matriculaRef
}) => { 

   const {Select} = Form

   const {
      nivel,
      grado,
      sala,
   } = useSelector(state => state.hardCodeDataReducer.hardCodeData)

   const {
      gradoState
   } = useSelector(state => state.selectFormStagesReducer)

   const dispatch = useDispatch()

   return ( 
      <>
         {
         nivel !== 'Inicial' ?
            <Select
               style={{color:colors.darken}}
               aria-label='Grado/Año'
               onChange={(event) => handleGradoChange(
                  event,
                  dispatch
               )}
               value={gradoState}
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
                  dispatch
               )}
               value={gradoState}
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
