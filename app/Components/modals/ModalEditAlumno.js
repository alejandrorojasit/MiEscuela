import {
   useState,
   useRef,
   useEffect,
} from 'react'

import {Modal} from 'react-bootstrap'

import {
   handleShow,
} from '../logic/modaleditalumnoLogic.js'

import {
   Col,
   Tabs,
   Tab,
} from 'react-bootstrap'

import {createISODate} from '../logic/dateHandler'

import TabDatosGenerales from '../tabs/TabDatosGenerales'
import TabDatosContacto from '../tabs/TabDatosContacto'
import TabDatosSalud from '../tabs/TabDatosSalud'
import TabObservaciones from '../tabs/TabObservaciones'
import TabRegistroModificaciones from '../tabs/TabRegistroModificaciones'

import {useSelector,useDispatch} from 'react-redux'

import {colors} from '../../helpers/styleColors.js'

import {DecodeToken} from '../logic/tokenhandler'

const ModalEditAlumno = ({
   alumnoEditModal,
   setAlumnoEditModal,
   setShowModalUpdate,
   setUpdatedData,
   switchEdit,
   setSwitchEdit,
   showModalEditObservaciones,
   setShowModalEditObservaciones,
   setShowModalEditRegistroSalud,
}) => { 

   const [fechaNacimiento,setFechaNacimiento] = useState()
   const [fechaIngreso,setFechaIngreso] = useState('')
   const [fechaEgreso,setFechaEgreso] = useState('')
   const modalEditRef = useRef([])

   const userState = useSelector(state => state.authReducer)
   const dataAlumno = useSelector(state => state.matriculaReducer)
   const dispatch =  useDispatch()
   
   useEffect (()=> {
      if(dataAlumno.fechaNacimiento !== undefined ){
         setFechaNacimiento(createISODate(dataAlumno.fechaNacimiento))
      }
      if(dataAlumno.egreso === 'Sin datos'){
         setFechaEgreso('')
      }else{
         setFechaEgreso(createISODate(dataAlumno.egreso))
      }
      if(dataAlumno.ingreso === 'Sin datos'){
         setFechaIngreso('')
      }else{
         setFechaIngreso(createISODate(dataAlumno.ingreso))
      }
   },[dataAlumno])

   return ( 
      <Modal 
         style={{color:colors.darken}}
         fullscreen={true}
         show={alumnoEditModal} 
         onHide={()=> handleShow(
            setAlumnoEditModal,
            dispatch)}
      >
         <Modal.Header 
            closeButton
         >
            <Col
               className='d-flex justify-content-center'
            >
               <h4>
                  {dataAlumno.nombre} {dataAlumno.apellido}
               </h4>      
            </Col>
         </Modal.Header>
         <Modal.Body
         >
            <Tabs
            >
               <Tab
                  eventKey='Datos Generales'
                  title='Datos Generales'
               >
                  <TabDatosGenerales
                     switchEdit={switchEdit}
                     setSwitchEdit={setSwitchEdit}
                     modalEditRef={modalEditRef}
                     fechaNacimiento={fechaNacimiento}
                     setUpdatedData={setUpdatedData}
                     setShowModalUpdate={setShowModalUpdate}
                     setFechaNacimiento={setFechaNacimiento}
                     fechaIngreso={fechaIngreso}
                     setFechaIngreso={setFechaIngreso}
                     fechaEgreso={fechaEgreso}
                     setFechaEgreso={setFechaEgreso}
                  />
               </Tab>
               <Tab
                  eventKey='Datos de Contacto'
                  title='Datos de Contacto'
               >
                  <TabDatosContacto
                     switchEdit={switchEdit}
                     setSwitchEdit={setSwitchEdit}
                     modalEditRef={modalEditRef}
                     setUpdatedData={setUpdatedData}
                     setShowModalUpdate={setShowModalUpdate}
                     fechaNacimiento={fechaNacimiento}
                     setFechaNacimiento={setFechaNacimiento}
                     fechaIngreso={fechaIngreso}
                     fechaEgreso={fechaEgreso}
                  />
               </Tab>
               <Tab
                  eventKey='Datos de Salud'
                  title='Datos de Salud'
               >
                  <TabDatosSalud 
                     switchEdit={switchEdit}
                     setSwitchEdit={setSwitchEdit}
                     modalEditRef={modalEditRef}
                     fechaNacimiento={fechaNacimiento}
                     setUpdatedData={setUpdatedData}
                     setShowModalUpdate={setShowModalUpdate}
                     setFechaNacimiento={setFechaNacimiento}
                     setShowModalEditRegistroSalud={setShowModalEditRegistroSalud}
                     fechaIngreso={fechaIngreso}
                     fechaEgreso={fechaEgreso}
                  />
               </Tab>
            {
               DecodeToken(userState).usuario.permissions.leerObservaciones ? 
                  <Tab
                     eventKey='Observaciones'
                     title='Observaciones'
                  >
                     <TabObservaciones
                        setShowModalEditObservaciones={setShowModalEditObservaciones}
                        showModalEditObservaciones={showModalEditObservaciones}
                     />
                  </Tab>
                  :
                  null
            }
            {
               DecodeToken(userState).usuario.permissions.leerRegistro ?
                  <Tab
                     eventKey='Registro modificaciones'
                     title='Registro modificaciones'
                  >
                     <TabRegistroModificaciones
                     />
                  </Tab>
                  :
                  null
            }
            </Tabs>
         </Modal.Body>
         <Modal.Footer>

         </Modal.Footer>
               </Modal>
   )
}

export default ModalEditAlumno
