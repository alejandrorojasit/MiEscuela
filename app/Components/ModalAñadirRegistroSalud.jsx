import {
   Button,
   Modal,
   Col,
   Row,
   FormControl,
} from 'react-bootstrap'

import {
   handleClickAñadir,
} from './Logic/modalAñadirRegistroSaludLogic'

import {
   handleGetDataAlumno,
} from './Logic/matriculaLogic'

import {
   updateRegistroSaludUrl
} from '../Helpers/Urls.js'

const ModalAñadirRegistroSalud = ({
   setShowModalAñadirRegistroSalud,
   showModalAñadirRegistroSalud,
   nuevoRegistroSalud,
   setNuevoRegistroSalud,
   dataAlumno,
   selectedAlumnoForEdit,
   setDataAlumno,
   context,
}) => { 

   return ( 
      <Modal
         show={showModalAñadirRegistroSalud}
         onHide={()=> setShowModalAñadirRegistroSalud(false)}
      >
         <Modal.Header
            closeButton
         >
            <Col
               className='d-flex justify-content-center'
            >
               <h6>Añadir Registro Salud:</h6>
            </Col>
         </Modal.Header>
         <Modal.Body>
            <FormControl
               as='textarea'
               rows={3}
               aria-label='nuevaObservacion'
               onChange={(event) => setNuevoRegistroSalud(event.target.value)}
            />
         </Modal.Body>
         <Modal.Footer>
            <Button
               className='mt-2'
               variant='outline-primary'
               size='sm'
               onClick={() => {
                  handleClickAñadir (nuevoRegistroSalud,dataAlumno._id,context,updateRegistroSaludUrl,setDataAlumno,selectedAlumnoForEdit)
                  setShowModalAñadirRegistroSalud(false)
               }}
            >
               Añadir
            </Button>
         </Modal.Footer>
      </Modal>
   )
}

export default ModalAñadirRegistroSalud
