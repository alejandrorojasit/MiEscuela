import {
   Row,
   Table,
} from 'react-bootstrap'

const TabRegistroModificaciones = ({
   dataAlumno,
}) => { 
   return ( 
      <
      >
         <Table
            striped
            bordered
            hover
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
                     >
                        {dataMap}    
                     </Row>
                     )}
                  </td>
               </tr>
               )}
            </tbody>
         </Table>
      </>
   )
}

export default TabRegistroModificaciones
