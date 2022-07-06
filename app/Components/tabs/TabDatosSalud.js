import {
   Container,
   Button,
   Row,
   Col,
   Form,
   Table,
} from 'react-bootstrap'

import {
   checkIsSealed
} from '../logic/matriculaLogic'

import {
   handleUpdateData,
   handleSwitchEdit,
} from '../logic/modaleditalumnoLogic.js' 

import {colors} from '../../helpers/styleColors.js'

import { DecodeToken } from '../logic/tokenhandler.js'

import {useSelector,useDispatch} from 'react-redux'

import {
   show_ModalEditRegistroSalud,
   updateSwitchEdit,
} from '../../redux/actions/modalEditAlumno.action'

const TabDatosSalud = ({
   modalEditRef,
}) => { 

   const dispatch = useDispatch()

   const {vacunas} = useSelector(state => state.hardCodeDataReducer.hardCodeData)
   const userState = useSelector(state => state.authReducer)

   const {
      dataAlumno
   } = useSelector(state => state.matriculaReducer)

   const {
      switchEdit,
      fechaNacimiento,
      fechaIngreso,
      fechaEgreso,
      updatedData,
   } = useSelector(state => state.modalEditAlumnoReducer)

   const sealedDatabase = useSelector(state => state.sealedDatabaseReducer)

   return ( 
      <Container
         className='border border-success p-3 mt-4'
      >
         <Row>
            <Col 
            >
               <Row
                  className='mt-2'
               >
                  <Col>
                     <h6>Vacunas al dia:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.vacunasAlDia}
                        aria-label="vacunasAlDia"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[34] = element}
                     >
                        <option 
                           value={dataAlumno.vacunasAlDia}
                        >
                           {dataAlumno.vacunasAlDia}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.vacunasAlDia ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>
                  </Col>
                  <Col>
                     <h6>Certificado de Salud:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.certSalud}
                        aria-label="certSalud"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[32] = element}
                     >
                        <option 
                           value={dataAlumno.certSalud}
                        >
                           {dataAlumno.certSalud}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.certSalud ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>
                  </Col>
                  <Col>
                     <h6>Certificado buco dental:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.certBucoDental}
                        aria-label="certBucoDental"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[33] = element}
                     >
                        <option 
                           value={dataAlumno.certBucoDental}
                        >
                           {dataAlumno.certBucoDental}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.certBucoDental ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>
                  </Col>
               </Row>
               <Row
                  className='mt-2'
               >
                  <Col>
                     <h6>Antivariolica:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.antivariolica}
                        aria-label="antivariolica"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[35] = element}
                     >

                        <option 
                           value={dataAlumno.antivariolica}
                        >
                           {dataAlumno.antivariolica}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.antivariolica ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>
                  </Col>
                  <Col>
                     <h6>BCG:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.bcg}
                        aria-label="bcg"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[36] = element}
                     >
                        <option 
                           value={dataAlumno.bcg}
                        >
                           {dataAlumno.bcg}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.bcg ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>

                  </Col>
                  <Col>
                     <h6>Triple:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.triple}
                        aria-label="triple"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[37] = element}
                     >
                        <option 
                           value={dataAlumno.triple}
                        >
                           {dataAlumno.triple}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.triple ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>
                  </Col>
               </Row>
               <Row
                  className='mt-2'
               >
                  <Col>
                     <h6>Doble:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.doble}
                        aria-label="doble"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[38] = element}
                     >
                        <option 
                           value={dataAlumno.doble}
                        >
                           {dataAlumno.doble}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.doble ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>
                  </Col>
                  <Col>
                     <h6>Sabin:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.sabin}
                        aria-label="sabin"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[39] = element}
                     >
                        <option 
                           value={dataAlumno.sabin}
                        >
                           {dataAlumno.sabin}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.sabin ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>
                  </Col>
                  <Col>
                     <h6>Anti sarampion:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.antiSarampion}
                        aria-label="antiSarampion"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[40] = element}
                     >
                        <option 
                           value={dataAlumno.antiSarampion}
                        >
                           {dataAlumno.antiSarampion}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.antiSarampion ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>
                  </Col>
               </Row>
               <Row
                  className='mt-2'
               >

                  <Col>
                     <h6>Examen visual:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.examenVisual}
                        aria-label="examenVisual"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[31] = element}
                     >
                        <option 
                           value={dataAlumno.examenVisual}
                        >
                           {dataAlumno.examenVisual}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.examenVisual ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>     
                  </Col>

                  <Col>
                     <h6>Otras:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.otras1}
                        aria-label="otras1"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[41] = element}
                     >
                        <option 
                           value={dataAlumno?.otras1}
                        >
                           {dataAlumno?.otras1}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno?.otras1 ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select> 
                  </Col>
                  <Col> 
                     <h6>Otras:</h6>
                     <Form.Select
                        placeholder={dataAlumno?.otras2}
                        aria-label="otras2"
                        disabled={switchEdit}
                        ref={(element) => modalEditRef.current[42] = element}
                     >
                        <option 
                           value={dataAlumno?.otras2}
                        >
                           {dataAlumno.otras2}
                        </option>
                        {vacunas.map((dataMap)=> 
                           dataMap !== dataAlumno.otras2 ? 
                              <option 
                                 key={dataMap} 
                                 value={dataMap}
                              >
                                 {dataMap}
                              </option>
                              :
                           null
                        )}
                     </Form.Select>
                  </Col>
               </Row>
               <Row>
            <Col
               className='mt-3 d-flex justify-content-end'
            >
               {
                     DecodeToken(userState).usuario.permissions.editarMatricula &&  !checkIsSealed(sealedDatabase,dataAlumno.nivel)?
                     switchEdit ?
                        <Button
                           variant='outline-success'
                           size='sm'
                           onClick={() => dispatch(updateSwitchEdit())}
                        >Editar</Button>
                        :
                        <Button
                           variant='outline-success'
                           size='sm'
                           onClick={() => {
                              handleUpdateData(
                                 modalEditRef,
                                 fechaNacimiento,
                                 dataAlumno,
                                 fechaIngreso,
                                 fechaEgreso,
                                 dispatch
                              )
                           }}
                        >Actualizar</Button>
                        :
                     null
               }
            </Col>         
               </Row>
            </Col>
            <Col
               className='mt-2'
            >
               <h6>Registro historico de salud:</h6>       
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
                           Fecha:
                        </th>
                        <th>
                           Detalle:
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {dataAlumno.registroSalud?.map((dataMap,index)=>
                     <tr
                        key={index}
                     >
                        <td>
                           {dataMap?.usuario}
                        </td>
                        <td>
                           {dataMap?.fecha}
                        </td>
                        <td>
                           <Row
                              key={index}
                              style={{marginLeft:10}
                              }
                           >
                              {dataMap.data}    
                           </Row>
                        </td>
                     </tr>
                     )}
                  </tbody>
               </Table>
            </Col>
         </Row>
         <Row>
            
            <Col
               className='mt-1 d-flex justify-content-end'
            >
               {
                  DecodeToken(userState).usuario.permissions.añadirRegistroSalud && !checkIsSealed(sealedDatabase,dataAlumno.nivel)?
                     <Button
                        variant='outline-success'
                        size='sm'
                        onClick={()=> dispatch(show_ModalEditRegistroSalud())}
                     >Añadir Registro</Button>
                     :
                     null
               }
            </Col>
         </Row>
      </Container>
   )
}

export default TabDatosSalud
