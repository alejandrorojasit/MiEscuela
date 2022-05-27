import {
   Row,
   Col,
   Table,
   CloseButton,
} from 'react-bootstrap'

import {
   handleDelete,
   conditionalButtonReder,
} from '../logic/ratificacionLogic'

const TableRatificacion = ({
   setFiltredDatosAlumnoStage1,
   filtredDatosAlumnoStage1,
   selectedItems,
   setShowModalPdfSelection,
}) => { 
   return ( 
      <> 
         <Row 
            className='mt-2 p-1 border border-success'
         >
            <Col 
               className='d-flex justify-content-center'
            >
               Cantidad de registros:
            </Col>
            <Col 
               className='d-flex justify-content-center'
            >
               {
                  filtredDatosAlumnoStage1.length 
               }
            </Col>
         </Row>
         <Row>
            <Col 
               className='d-flex justify-content-end mt-2'
            >
               {conditionalButtonReder(selectedItems,filtredDatosAlumnoStage1,setShowModalPdfSelection)}
            </Col>     
         </Row>
         <Row
            className='mt-2 p-1 border border-success'
         >
            <Col
               className='mt-2'
            >
               <Table 
                  bordered 
                  striped 
                  hover 
                  size="sm"
               >
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                     </tr>
                  </thead>
                  <tbody>
                     {filtredDatosAlumnoStage1.map(
                        (data) =>
                           <tr 
                              key={data.nDniAlumno}
                           >
                              <th>
                                 <CloseButton 
                                    onClick={()=> handleDelete(
                                       data.nDniAlumno,
                                       setFiltredDatosAlumnoStage1,
                                       filtredDatosAlumnoStage1
                                    )}
                                 />
                              </th>
                              <th>{data.nombre}</th>
                              <th>{data.apellido}</th>
                              <th>{data.nDniAlumno}</th>
                           </tr>
                     )}   
                  </tbody>
               </Table>
            </Col>

         </Row>

      </>
   )
}

export default TableRatificacion

