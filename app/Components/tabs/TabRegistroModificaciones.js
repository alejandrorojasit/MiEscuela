import {
   Container,
   Row,
   Table,
} from 'react-bootstrap'

import {colors} from '../../helpers/styleColors.js'

import {
   useSelector
} from 'react-redux'

const TabRegistroModificaciones = ({
}) => { 

   const {
      dataAlumno
   } = useSelector(state => state.matriculaReducer)

   return ( 
      <Container
        className='border border-success p-3 mt-4' 
      >
         <Table
            striped
            bordered
            hover
            style={{color:colors.darken}}
         >
            <thead>
               <tr>
                  <th>
                     #
                  </th>
                  <th>
                     Usuario:
                  </th>
                  <th>
                     Fecha:
                  </th>
                  <th>
                     Cambios realizados:
                  </th>
               </tr>
            </thead>
            <tbody>
               {dataAlumno.registro?.map((dataMap,index)=>
               <tr
                  key={index}
               >
                  <td>
                     {index}
                  </td>
                  <td>
                     {dataMap?.user}
                  </td>
                  <td>
                     {dataMap?.fecha}
                  </td>
                  <td>
                     {dataMap?.cambios?.map((dataMap,index)=>
                     <Row
                        key={index}
                        style={{marginLeft:10}
                        }
                     >
                        {dataMap}    
                     </Row>
                     )}
                  </td>
               </tr>
               )}
            </tbody>
         </Table>
      </Container>
   )
}

export default TabRegistroModificaciones
