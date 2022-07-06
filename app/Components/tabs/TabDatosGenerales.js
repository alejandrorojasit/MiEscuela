import {useState} from 'react'
import {
   Button,
   Row,
   Col,
   FormControl,
   Form,
   Container,
} from 'react-bootstrap'

import {
   handleChangeCalendar,
   handleUpdateData,
} from '../logic/modaleditalumnoLogic.js' 

import {
   ageCalculate,
   ageCalculate3006,
   splitDate
} from '../logic/dateHandler'

import {
   checkIsSealed
} from '../logic/matriculaLogic'

import {DecodeToken} from '../logic/tokenhandler'

import DatePicker,{registerLocale} from 'react-datepicker'

import {dniCheck,cuilCheck} from '../logic/datosGeneralesLogic'

import "react-datepicker/dist/react-datepicker.css"

import es from 'date-fns/locale/es'

import {useSelector,useDispatch} from 'react-redux'

import {
   updateFechaIngreso,
   updateFechaEgreso,
   updateSwitchEdit,
} from '../../redux/actions/modalEditAlumno.action'

const TabDatosGenerales = ({
   modalEditRef,
}) => { 

   registerLocale('es',es)

   const dispatch = useDispatch()

   const {
      dataAlumno
   } = useSelector(state => state.matriculaReducer)

   const {
      switchEdit,
      fechaNacimiento,
      fechaIngreso,
      fechaEgreso,
      updatedData
   } = useSelector(state => state.modalEditAlumnoReducer)

   const {
      nivel,
      grado,
      division,
      sexo,
      estado,
      denominacion,
      tipoDNI
   } = useSelector(state => state.hardCodeDataReducer.hardCodeData)

   const sealedDatabase = useSelector(state => state.sealedDatabaseReducer)

   const userState =  useSelector(state => state.authReducer)

   const [isValid,setIsValid] = useState(true)
   const [isInvalid,setIsInvalid] = useState(false)

   return ( 
      <Container
         className='border border-success p-3 mt-4'
      > 
         <Row
               className='mt-2'
         >
            <Col
            >
               <h6>Tipo:</h6>
               <Form.Select
                  placeholder={dataAlumno?.tipo}
                  aria-label="tipo"
                  disabled={switchEdit}
                  ref={(element) => modalEditRef.current[3] = element}
               >
                  <option 
                     value={dataAlumno?.tipo}
                  >
                     {dataAlumno?.tipo}
                  </option>
                  {tipoDNI.map((dataMap)=> 
                     dataMap !== dataAlumno?.tipo ? 
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
            <Col
               className='mt-2'
            >
               <h6>Nº Documento:</h6>
               <FormControl
                  defaultValue={dataAlumno.nDniAlumno}
                  aria-label='nDniAlumno'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[2] = element}
                  onChange={() => dniCheck(modalEditRef,2,setIsValid,setIsInvalid,false)}
                  isValid={isValid}
                  isInvalid={isInvalid}
               /> 
            </Col>
            
            <Col
               className='mt-2'
            >
               <h6>Fecha Nacimiento:</h6>
               <FormControl 
                  as={DatePicker}
                  selected={fechaNacimiento}
                  locale='es'
                  onChange={(value) => handleChangeCalendar(value,dispatch)}
                  dateFormat='dd/MM/yyyy'
                  readOnly={switchEdit}
               />
            </Col>
            <Col
               className='mt-2'
            >
               <h6>Nº Legajo:</h6>
               <FormControl
                  defaultValue={dataAlumno.nroLegajo}
                  aria-label='nroLegajo'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[13] = element}

               /> 
            </Col>
            <Col
               className='mt-2'
            >
               <h6>CUIL:</h6>
               <FormControl
                  defaultValue={cuilCheck(dataAlumno.sexo,dataAlumno.nDniAlumno)}
                  aria-label='CUIL'
                  readOnly={true}
                  ref={(element) => modalEditRef.current[12] = element}
               /> 
            </Col>
         </Row>
         <Row
            className='mt-2'
         >

            <Col>
               <h6>Nivel:</h6>
               <Form.Select
                  placeholder={dataAlumno?.nivel}
                  aria-label="nivel"
                  disabled={switchEdit}
                  ref={(element) => modalEditRef.current[21] = element}
               >
                  <option 
                     value={dataAlumno.nivel}
                  >
                     {dataAlumno.nivel}
                  </option>
                  {nivel.map((dataMap)=> 
                     dataMap !== dataAlumno.nivel ? 
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
               <h6>Grado:</h6>
               <Form.Select
                  placeholder={dataAlumno?.grado}
                  aria-label="grado"
                  disabled={switchEdit}
                  type='number'
                  ref={(element) => modalEditRef.current[22] = element}
               >
                  <option 
                     value={dataAlumno.grado}
                  >
                     {dataAlumno.grado}
                  </option>
                  {grado.map((dataMap)=> 
                     dataMap !== dataAlumno.grado ? 
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
               <h6>Division:</h6>
               <Form.Select
                  placeholder={dataAlumno?.division}
                  aria-label="division"
                  disabled={switchEdit}
                  ref={(element) => modalEditRef.current[23] = element}
               >
                  <option 
                     value={dataAlumno.division}
                  >
                     {dataAlumno.division}
                  </option>
                  {division.map((dataMap)=> 
                     dataMap !== dataAlumno.division ? 
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
               <h6>Denominacion:</h6>
                
               <Form.Select
                  placeholder={dataAlumno?.denominacion}
                  aria-label="denominacion"
                  disabled={switchEdit}
                  ref={(element) => modalEditRef.current[24] = element}
               >
                  <option 
                     value={dataAlumno.denominacion}
                  >
                     {dataAlumno.denominacion}
                  </option>
                  {denominacion.map((dataMap)=> 
                     dataMap !== dataAlumno.denominacion ? 
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
               <h6>Lugar de nacimiento:</h6>
               <FormControl
                  defaultValue={dataAlumno.lugarNacimiento}
                  aria-label='lugarNacimiento'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[8] = element}
               /> 
            </Col>
            <Col>
               <h6>Provincia de nacimiento:</h6>
               <FormControl
                  defaultValue={dataAlumno.provinciaNacimiento}
                  aria-label='provinciaNacimiento'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[10] = element}
               /> 
            </Col>
            <Col>
               <h6>Nacionalidad:</h6>
               <FormControl
                  defaultValue={dataAlumno.nacionalidad}
                  aria-label='nacionalidad'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[9] = element}
               /> 
            </Col>
         </Row>
         <Row
            className='mt-2'
         >
            <Col>
               <h6>Sexo:</h6>
               <Form.Select
                  placeholder={dataAlumno?.sexo}
                  aria-label="sexo"
                  disabled={switchEdit}
                  ref={(element) => modalEditRef.current[6] = element}
               >
                  <option 
                     value={dataAlumno.sexo}
                  >
                     {dataAlumno.sexo}
                  </option>
                  {sexo.map((dataMap)=> 
                     dataMap !== dataAlumno.sexo ? 
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
               <h6>Edad (Real):</h6>
               <FormControl
                  defaultValue={dataAlumno.fechaNacimiento ? 
                        ageCalculate(splitDate(dataAlumno.fechaNacimiento,3))
                        :
                        dataAlumno.fechaNacimiento
                  }
                  aria-label='Edad (Real)'
                  readOnly={true}
               /> 
            </Col>
            <Col>
               <h6>Edadal 30/06:</h6>
               <FormControl
                  defaultValue={dataAlumno.fechaNacimiento ? 
                        ageCalculate3006(splitDate(dataAlumno.fechaNacimiento,3))
                        :
                        dataAlumno.fechaNacimiento
                  }
                  aria-label='Edad al 30/06'
                  readOnly={true}
               /> 
            </Col>
         </Row>
         <Row
               className='mt-2'
         >
            <Col
            >
               <h6>Estado:</h6>
               <Form.Select
                  placeholder={dataAlumno?.estado}
                  aria-label="estado"
                  disabled={switchEdit}
                  ref={(element) => modalEditRef.current[1] = element}
               >
                  <option 
                     value={dataAlumno.estado}
                  >
                     {dataAlumno.estado}
                  </option>
                  {estado.map((dataMap)=> 
                     dataMap !== dataAlumno.estado ? 
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
               <h6>Ingreso:</h6>
               <FormControl
                  as={DatePicker}
                  selected={fechaIngreso}
                  locale='es'
                  onChange={(value) => dispatch(updateFechaIngreso(value))}
                  dateFormat='dd/MM/yyyy'
                  readOnly={switchEdit}

               />  
            </Col>
            <Col>
               <h6>Egreso:</h6>
               <FormControl
                  selected={fechaEgreso}
                  as={DatePicker}
                  locale='es'
                  onChange={(value) => dispatch(updateFechaEgreso(value))}
                  dateFormat='dd/MM/yyyy'
                  readOnly={switchEdit}
               />  
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
      </Container>
   )
}

export default TabDatosGenerales

