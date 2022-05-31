import {
   Button,
   Modal,
   Col,
   FormControl,
} from 'react-bootstrap'

import {
   handleClickAñadir,
} from '../logic/modalAñadirRegistroSaludLogic'

import {
   updateRegistroSaludUrl
} from '../../helpers/Urls.js'

import {
   show_ModalEditRegistroSalud,
   updateNuevoRegistroSalud,
} from '../../redux/actions/modalEditAlumno.action'

import {
   useSelector,
   useDispatch,
} from 'react-redux'

const ModalEditRegistroSalud = ({
}) => { 

   const userState = useSelector(state => state.authReducer)
   const {dataAlumno} = useSelector(state => state.matriculaReducer)
   const {
      showModalEditRegistroSalud,
      nuevoRegistroSalud,
   } = useSelector(state=> state.modalEditAlumnoReducer)
   const dispatch =  useDispatch()

   return ( 
      <Modal
         show={showModalEditRegistroSalud}
         onHide={()=> dispatch(show_ModalEditRegistroSalud())}
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
               onChange={(event) => dispatch(updateNuevoRegistroSalud(event.target.value))}
            />
         </Modal.Body>
         <Modal.Footer>
            <Button
               className='mt-2'
               variant='outline-primary'
               size='sm'
               onClick={() => {
                  handleClickAñadir (
                     nuevoRegistroSalud,
                     dataAlumno._id,
                     userState,
                     updateRegistroSaludUrl,
                     dispatch
                  )
                 dispatch(show_ModalEditRegistroSalud()) 
               }}
            >
               Añadir
            </Button>
         </Modal.Footer>
      </Modal>
   )
}

export default ModalEditRegistroSalud
