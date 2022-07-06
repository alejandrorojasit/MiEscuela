import {
   useRef,
   useEffect,
} from 'react'

import {Modal} from 'react-bootstrap'

import {
   checkIsSealed
} from '../logic/matriculaLogic'

import {
   handleShow,
} from '../logic/modaleditalumnoLogic.js'

import {
   Container,
   Col,
   Tabs,
   Tab,
   Row,
   Button
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

import {
   updateFechaIngreso,
   updateFechaEgreso,
   updateFechaNacimiento,
} from '../../redux/actions/modalEditAlumno.action'

const ModalEditAlumno = ({
}) => { 

   const modalEditRef = useRef([])

   const userState = useSelector(state => state.authReducer)

   const {dataAlumno} = useSelector(state => state.matriculaReducer)

   const {showModalEditAlumno} = useSelector(state => state.modalEditAlumnoReducer)

   const sealedDatabase = useSelector(state => state.sealedDatabaseReducer)

   const {
      switchEdit
   } = useSelector(state => state.matriculaReducer)

   const dispatch =  useDispatch()

   useEffect (()=> {
      if(dataAlumno.fechaNacimiento !== undefined ){
         dispatch(updateFechaNacimiento(createISODate(dataAlumno.fechaNacimiento))
         )
      }
      if(dataAlumno.egreso === 'Sin datos' || dataAlumno.egreso === ''){
         dispatch(updateFechaEgreso(''))
      }else{
         dispatch(updateFechaEgreso(createISODate(dataAlumno.egreso))
         )
      }
      if(dataAlumno.ingreso === 'Sin datos' || dataAlumno.ingreso === ''){
         dispatch(updateFechaIngreso(''))
      }else{
         dispatch(updateFechaIngreso(createISODate(dataAlumno.ingreso))
         )
      }
   },[dataAlumno])


   return ( 
      <Modal 
         style={{color:colors.darken}}
         fullscreen={true}
         show={showModalEditAlumno} 
         onHide={()=> handleShow(
            dispatch)}
      >
         <Modal.Header 
            closeButton
         >
            <Col
               className='d-flex justify-content-center'
            >
               <h4>
                  {dataAlumno?.nombre} {dataAlumno?.apellido}
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
                     modalEditRef={modalEditRef}
                     />
               </Tab>
               <Tab
                  eventKey='Datos de Contacto'
                  title='Datos de Contacto'
               >
                  <TabDatosContacto
                     modalEditRef={modalEditRef}
                     />
               </Tab>
               <Tab
                  eventKey='Datos de Salud'
                  title='Datos de Salud'
               >
                  <TabDatosSalud 
                     modalEditRef={modalEditRef}
                     />
               </Tab>
               {
               DecodeToken(userState).usuario.permissions.leerObservaciones ? 
                  <Tab
                     eventKey='Observaciones'
                     title='Observaciones'
                  >
                     <TabObservaciones
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
      </Modal>
   )
}

export default ModalEditAlumno
