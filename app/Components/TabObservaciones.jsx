import {
   Button,
   Row,
   Col,
   Table,
} from 'react-bootstrap'

import {colors} from '../Helpers/styleColors'

const TabObservaciones = ({
   dataAlumno,
   setShowModalEditObservaciones,
   showModalEditObservaciones,
}) => { 
   return ( 
      <>
         <Row>
            <Col
               className='mt-2 d-flex justify-content-center'
            >
               <Button
                  variant='outline-success'
                  size='sm'
                  onClick={() => setShowModalEditObservaciones(true)}
               >Añadir Observacion</Button> 
            </Col> 
         </Row>
         <Row>
            <Col
               className='mt-2 border'
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
                           Observacion:
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {dataAlumno.observaciones?.map((dataMap,index)=>
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
                           {dataMap?.observacion}
                        </td>
                     </tr>
                     )}
                  </tbody>
               </Table>
            </Col>
         </Row>
      </>
   )
}

export default TabObservaciones
