import {
   useState,
   useRef,
   useEffect,
} from 'react'

import {Modal} from 'react-bootstrap'

import {
   handleShow,
} from './Logic/modaleditalumnoLogic.js'

import {
   Col,
   Tabs,
   Tab,
} from 'react-bootstrap'

import {createISODate} from './Logic/dateHandler'

import TabDatosGenerales from './TabDatosGenerales'
import TabDatosContacto from './TabDatosContacto'
import TabDatosSalud from './TabDatosSalud'
import TabObservaciones from './TabObservaciones'
import TabRegistroModificaciones from './TabRegistroModificaciones'

import useAuth from '../Context/Store/useAuth'

import {colors} from '../Helpers/styleColors.js'

import {DecodeToken} from './Logic/tokenhandler'

const ModalEditAlumno = ({
   alumnoEditModal,
   setAlumnoEditModal,
   setShowModalUpdate,
   setUpdatedData,
   dataAlumno,
   setDataAlumno,
   setSelectedAlumnoForEdit,
   switchEdit,
   setSwitchEdit,
   showModalEditObservaciones,
   setShowModalEditObservaciones,
   selectedAlumnoForEdit,
   setShowModalEditRegistroSalud,
}) => { 

   const [fechaNacimiento,setFechaNacimiento] = useState()
   const [fechaIngreso,setFechaIngreso] = useState('')
   const [fechaEgreso,setFechaEgreso] = useState('')
   const modalEditRef = useRef([])
   const context = useAuth()
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
         onHide={()=> handleShow(setAlumnoEditModal,setDataAlumno,setSelectedAlumnoForEdit)}
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
                     dataAlumno={dataAlumno}
                     switchEdit={switchEdit}
                     setSwitchEdit={setSwitchEdit}
                     modalEditRef={modalEditRef}
                     fechaNacimiento={fechaNacimiento}
                     setUpdatedData={setUpdatedData}
                     setShowModalUpdate={setShowModalUpdate}
                     setFechaNacimiento={setFechaNacimiento}
                     context={context}
                     setDataAlumno={setDataAlumno}
                     selectedAlumnoForEdit={selectedAlumnoForEdit}
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
                     dataAlumno={dataAlumno}
                     switchEdit={switchEdit}
                     setSwitchEdit={setSwitchEdit}
                     modalEditRef={modalEditRef}
                     setUpdatedData={setUpdatedData}
                     setShowModalUpdate={setShowModalUpdate}
                     fechaNacimiento={fechaNacimiento}
                     setFechaNacimiento={setFechaNacimiento}
                     context={context}
                     setDataAlumno={setDataAlumno}
                     selectedAlumnoForEdit={selectedAlumnoForEdit}
                     fechaIngreso={fechaIngreso}
                     fechaEgreso={fechaEgreso}
                  />
               </Tab>
               <Tab
                  eventKey='Datos de Salud'
                  title='Datos de Salud'
               >
                  <TabDatosSalud 
                     dataAlumno={dataAlumno}
                     switchEdit={switchEdit}
                     setSwitchEdit={setSwitchEdit}
                     modalEditRef={modalEditRef}
                     fechaNacimiento={fechaNacimiento}
                     setUpdatedData={setUpdatedData}
                     setShowModalUpdate={setShowModalUpdate}
                     setFechaNacimiento={setFechaNacimiento}
                     context={context}
                     setDataAlumno={setDataAlumno}
                     selectedAlumnoForEdit={selectedAlumnoForEdit}
                     setShowModalEditRegistroSalud={setShowModalEditRegistroSalud}
                     fechaIngreso={fechaIngreso}
                     fechaEgreso={fechaEgreso}
                  />
               </Tab>
            {
               DecodeToken(context).usuario.permissions.leerObservaciones ? 
                  <Tab
                     eventKey='Observaciones'
                     title='Observaciones'
                  >
                     <TabObservaciones
                        dataAlumno={dataAlumno}
                        setShowModalEditObservaciones={setShowModalEditObservaciones}
                        showModalEditObservaciones={showModalEditObservaciones}
                     />
                  </Tab>
                  :
                  null
            }
            {
               DecodeToken(context).usuario.permissions.leerRegistro ?
                  <Tab
                     eventKey='Registro modificaciones'
                     title='Registro modificaciones'
                  >
                     <TabRegistroModificaciones
                        dataAlumno={dataAlumno}
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
