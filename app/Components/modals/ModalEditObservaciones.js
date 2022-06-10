import {
   Modal,
   FormControl,
   Button,
   Col
} from 'react-bootstrap'

import {
   handleClickAñadir
} from '../logic/modalEditObservacionesLogic'

import {updateObservacionesUrl} from '../../helpers/Urls.js'

import {useSelector,useDispatch} from 'react-redux'

import { 
   show_ModalEditObservaciones ,
   updateNuevaObservacion,
} from '../../redux/actions/modalEditAlumno.action'

const modalEditObservaciones = ({
}) => {


   const dispatch = useDispatch()

   const {
      showModalEditObservaciones,
      nuevaObservacion,
   } = useSelector(state => state.modalEditAlumnoReducer)
   
   const {
      dataAlumno,
      selectedAlumnoForEdit,
   } = useSelector(state => state.matriculaReducer)

   const userState = useSelector(state => state.authReducer)

   return (
      <Modal 
         show={showModalEditObservaciones} 
         onHide={()=> dispatch(show_ModalEditObservaciones())}
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
               onChange={(event) => dispatch(
                  updateNuevaObservacion(event.target.value) 
               )}
            />
         </Modal.Body>
         <Modal.Footer>
            <Button
               className='mt-2'
               variant='outline-primary'
               size='sm'
               onClick={() => {
                  handleClickAñadir (
                     userState,
                     nuevaObservacion,
                     dataAlumno._id,
                     updateObservacionesUrl,
                     selectedAlumnoForEdit,
                     dispatch
                  )
                  dispatch(show_ModalEditObservaciones())
               }}
            >
               Añadir
            </Button>
         </Modal.Footer>
      </Modal>
   )
}
export default modalEditObservaciones
