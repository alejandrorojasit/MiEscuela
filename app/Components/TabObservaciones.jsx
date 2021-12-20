import {
   Button,
   Row,
   Col,
   Table,
   Form,
} from 'react-bootstrap'

import {colors} from '../Helpers/styleColors'

import { DecodeToken } from './Logic/tokenhandler'

import useAuth from '../Context/Store/useAuth.jsx'

const TabObservaciones = ({
   dataAlumno,
   setShowModalEditObservaciones,
   showModalEditObservaciones,
}) => { 

   const context  = useAuth()
   const filtredObservaciones = []
   return ( 
      <>
         <Row>
            <Col
               className='mt-2 d-flex justify-content-center'
            >
               {DecodeToken(context).usuario.permissions.añadirObservaciones ?
                  <Button
                     variant='outline-success'
                     size='sm'
                     onClick={() => setShowModalEditObservaciones(true)}
                  >Añadir Observacion</Button> 
                  :
                     null
               }
            </Col> 
            <Col
               className='mt-2 d-flex justify-content-center'
            >
               <Form.Select
                  aria-label='Filtro' 
               >
                  <option>Filtrar</option>
                  {Object.keys(DecodeToken(context).usuario.permissions).map((dataMap,index)=>{
                     switch(true){
                        case dataMap === 'filterPreceptoria' && DecodeToken(context).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {context.stateHardCodeData.hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                        case dataMap === 'filterCoordinacionAdministrativa' && DecodeToken(context).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {context.stateHardCodeData.hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                        case dataMap === 'filterCoordinacionPedagogica' && DecodeToken(context).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {context.stateHardCodeData.hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                        case dataMap === 'filterTutoria' && DecodeToken(context).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {context.stateHardCodeData.hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                        case dataMap === 'filterSecretariaAdministrativa' && DecodeToken(context).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {context.stateHardCodeData.hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                        case dataMap === 'filterPsicopedagogia' && DecodeToken(context).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {context.stateHardCodeData.hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                     }
                  }
                  )}
               </Form.Select>
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
                           Puesto:
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
                     {
                        dataAlumno.observaciones?.filter(dataFilter => 
                              dataFilter.puesto === 'Auxiliar Sec. Administrativo/a' && DecodeToken(context).usuario.permissions.filterSecretariaAdministrativa
                           ||
                              dataFilter.puesto === 'Coordinacion Pedagogica Nivel Inicial' && DecodeToken(context).usuario.permissions.filterCoordinacionPedagogica
                           ||
                              dataFilter.puesto === 'Coordinacion Pedagogica Nivel Primario' && DecodeToken(context).usuario.permissions.filterCoordinacionPedagogica
                           ||
                              dataFilter.puesto === 'Coordinacion Pedagogica Nivel Secundario' && DecodeToken(context).usuario.permissions.filterCoordinacionPedagogica
                           ||
                              dataFilter.puesto === 'Coordinacion Administrativa Nivel Primario' && DecodeToken(context).usuario.permissions.filterCoordinacionAdministrativa
                           ||
                              dataFilter.puesto === 'Coordinacion Administrativa Nivel Secundario' && DecodeToken(context).usuario.permissions.filterCoordinacionAdministrativa
                           ||
                              dataFilter.puesto === 'Preceptor/a' && DecodeToken(context).usuario.permissions.filterPreceptoria
                        ).map((dataMap,index) =>
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
                                 {dataMap?.puesto}
                              </td>
                              <td>
                                 {dataMap?.fecha}
                              </td>
                              <td>
                                 {dataMap?.observacion}
                              </td>
                           </tr>
                        )
                     }
                     {/*<tr
                        key={index}
                     >
                        <td>
                           {index}
                        </td>
                        <td>
                           {dataMap?.user}
                        </td>
                        <td>
                           {dataMap?.puesto}
                        </td>
                        <td>
                           {dataMap?.fecha}
                        </td>
                        <td>
                           {dataMap?.observacion}
                        </td>
                     </tr>*/} 
                  </tbody>
               </Table>
            </Col>
         </Row>
      </>
   )
}

export default TabObservaciones
