import {
   Button,
   Row,
   Col,
   Form,
} from 'react-bootstrap'

import {
   handleUpdateData,
   handleSwitchEdit,
} from './Logic/modaleditalumnoLogic.js' 


const TabDatosSalud = ({
   dataAlumno,
   setSwitchEdit,
   switchEdit,
   modalEditRef,
   fechaNacimiento,
   updatedData,
   setShowModalUpdate,
   setUpdatedData,
   context,
}) => { 

   const {vacunas}  = context.stateHardCodeData.hardCodeData
   return ( 
      <>
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
                  </Row>
                  <Row>
                     <Row>
                        <Col
                           md={4}
                           className='mt-2'
                        >
                           <h6>Otras:</h6>
                        </Col>
                        <Row>
                           <Col>
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
                     </Row> 
                  </Row>
               </Row>
            </Col>
            <Col
               className='mt-2 border'
            >
               <h6>Registro historico de salud:</h6>       
            </Col>
         </Row>
         <Row>
            <Col
               className='mt-2 d-flex justify-content-end'
            >
               {switchEdit ?
                  <Button
                     variant='outline-primary'
                     size='sm'
                     onClick={() => handleSwitchEdit(setSwitchEdit)}
                  >Editar</Button>
                  :
                  <Button
                     variant='outline-primary'
                     size='sm'
                     onClick={() => handleUpdateData(modalEditRef,fechaNacimiento,dataAlumno,setSwitchEdit,updatedData,setShowModalUpdate,setUpdatedData)}
                  >Actualizar</Button>
               }
            </Col>
            <Col
               className='mt-2 d-flex justify-content-end'
            >
               <Button
                  variant='outline-primary'
                  size='sm'
               >Añadir Registro</Button>
            </Col>
         </Row>
      </>
   )
}

export default TabDatosSalud
