import { useState,useEffect } from 'react'

import {
   Container,
   Button,
   Row,
   Col,
   Table,
   Form,
} from 'react-bootstrap'

import {colors} from '../../helpers/styleColors'

import { DecodeToken } from '../logic/tokenhandler'

import { handleFilter } from '../logic/tabObservacionesLogic'

import {useSelector,useDispatch} from 'react-redux'

import {
   show_ModalEditObservaciones
} from '../../redux/actions/modalEditAlumno.action'

import {
   checkIsSealed
} from '../logic/matriculaLogic'

const TabObservaciones = ({
}) => { 

   const dispatch = useDispatch()

   const userState  = useSelector(state => state.authReducer)

   const {
      dataAlumno
   } = useSelector(state => state.matriculaReducer)

   const hardCodeData =  useSelector(state => state.hardCodeDataReducer.hardCodeData)

   const sealedDatabase =  useSelector(state => state.sealedDatabaseReducer)

   const [filtredData,setFiltredData] = useState([]) 

   useEffect(()=>{
      setFiltredData(dataAlumno?.observaciones)
   },[dataAlumno])

   return ( 
      <Container
         className='border border-success p-3 mt-4'
      >
         <Row>
            <Col
               className='mt-2 d-flex justify-content-start'
            >
               {
               DecodeToken(userState).usuario.permissions.añadirObservaciones && !checkIsSealed(sealedDatabase,dataAlumno.nivel)?
                  <Button
                     variant='outline-success'
                     size='sm'
                     onClick={() => dispatch(show_ModalEditObservaciones())}
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
                  onChange={(event)=>setFiltredData(handleFilter(event,dataAlumno))}
               >
                  <option>Filtrar</option>
                  {Object.keys(DecodeToken(userState).usuario.permissions).map((dataMap,index)=>{
                     switch(true){
                        case dataMap === 'filterPreceptoria' && DecodeToken(userState).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                        case dataMap === 'filterCoordinacionAdministrativa' && DecodeToken(userState).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                        case dataMap === 'filterCoordinacionPedagogica' && DecodeToken(userState).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                        case dataMap === 'filterTutoria' && DecodeToken(userState).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                        case dataMap === 'filterSecretariaAdministrativa' && DecodeToken(userState).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {hardCodeData.filtroObservaciones[dataMap]}
                              </option>
                           )
                        case dataMap === 'filterPsicopedagogia' && DecodeToken(userState).usuario.permissions[dataMap]:
                           return(
                              <option 
                                 value={dataMap} 
                                 key={dataMap}
                              >
                                 {hardCodeData.filtroObservaciones[dataMap]}
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
               className='mt-2'
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
                     filtredData?.filter(dataFilter => 
                        dataFilter.puesto === 'Auxiliar Sec. Administrativo/a' && DecodeToken(userState).usuario.permissions.filterSecretariaAdministrativa
                           ||
                           dataFilter.puesto === 'Coordinacion Pedagogica Nivel Inicial' && DecodeToken(userState).usuario.permissions.filterCoordinacionPedagogica
                           ||
                           dataFilter.puesto === 'Coordinacion Pedagogica Nivel Primario' && DecodeToken(userState).usuario.permissions.filterCoordinacionPedagogica
                           ||
                           dataFilter.puesto === 'Coordinacion Pedagogica Nivel Secundario' && DecodeToken(userState).usuario.permissions.filterCoordinacionPedagogica
                           ||
                           dataFilter.puesto === 'Coordinacion Administrativa Nivel Primario' && DecodeToken(userState).usuario.permissions.filterCoordinacionAdministrativa
                           ||
                           dataFilter.puesto === 'Coordinacion Administrativa Nivel Secundario' && DecodeToken(userState).usuario.permissions.filterCoordinacionAdministrativa
                           ||
                           dataFilter.puesto === 'Preceptor/a' && DecodeToken(userState).usuario.permissions.filterPreceptoria
                           || dataFilter.puesto === 'Psicopedagoga/o' && DecodeToken(userState).usuario.permissions.filterPsicopedagogia
                           || dataFilter.puesto === 'Tutora Nivel Secundario' && DecodeToken(userState).usuario.permissions.filterTutoria

                           || dataFilter.puesto === 'Auxiliar N. Inicial' && DecodeToken(userState).usuario.permissions.filterSecretariaAdministrativa
                           || dataFilter.puesto === 'E.T.I.' && DecodeToken(userState).usuario.permissions.filterPsicopedagogia 
                     ).map((dataMap,index) =>
                        <tr
                           key={index}
                        >
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
                  </tbody>
               </Table>
            </Col>
         </Row>
      </Container>
   )
}

export default TabObservaciones
