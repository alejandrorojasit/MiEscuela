import {Modal,Form,FormControl,Button,Col} from 'react-bootstrap'
import {handleClose,handleChange,handleClickAñadir} from './Logic/modalEditObservacionesLogic'
import {updateObservacionesUrl} from '../Helpers/Urls.js'
import { handleGetDataAlumno } from './Logic/matriculaLogic'

const modalEditObservaciones = ({
   showModalEditObservaciones,
   setShowModalEditObservaciones,
   setNuevaObservacion,
   nuevaObservacionState,
   dataAlumno,
   context,
   selectedAlumnoForEdit,
   setDataAlumno,
}) => {

   return (
      <Modal 
         show={showModalEditObservaciones} 
         onHide={()=> handleClose(setShowModalEditObservaciones)}
      >
         <Modal.Header 
            closeButton
         >
            <Col
            className='d-flex justify-content-center'
            >
         <h6>Nueva Observacion</h6>
         </Col>
         </Modal.Header
         >
         <Modal.Body>
            <FormControl
               as='textarea'
               rows={3}
               aria-label='nuevaObservacion'
               onChange={(event) => handleChange(event,setNuevaObservacion)}
            />
         </Modal.Body>
         <Modal.Footer>
            <Button
               className='mt-2'
               variant='outline-primary'
               size='sm'
               onClick={() => {
                  handleClickAñadir (nuevaObservacionState,dataAlumno._id,context,updateObservacionesUrl)
                  handleGetDataAlumno(
                     context,
                     selectedAlumnoForEdit,
                     setDataAlumno,
                  )
                  setShowModalEditObservaciones(false)
               }}
            >
               Añadir
            </Button>
         </Modal.Footer>
      </Modal>
   )
}
export default modalEditObservaciones
