import {
   Button,
   Modal,
   Col,
   Row,
   FormControl,
} from 'react-bootstrap'

import {
   handleClickAñadir,
} from '../logic/modalAñadirRegistroSaludLogic'

import {
   handleGetDataAlumno,
} from '../logic/matriculaLogic'

import {
   updateRegistroSaludUrl
} from '../../helpers/Urls.js'

import {
   useSelector,
   useDispatch,
} from 'react-redux'

const ModalEditRegistroSalud = ({
   setShowModalEditRegistroSalud,
   showModalEditRegistroSalud,
   nuevoRegistroSalud,
   setNuevoRegistroSalud,
}) => { 

   const userState = useSelector(state => state.authReducer)
   const {dataAlumno} = useSelector(state => state.matriculaReducer)
   const dispatch =  useDispatch()

   return ( 
      <Modal
         show={showModalEditRegistroSalud}
         onHide={()=> setShowModalEditRegistroSalud(false)}
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
                  handleClickAñadir (
                     nuevoRegistroSalud,
                     dataAlumno._id,
                     userState,
                     updateRegistroSaludUrl,
                     dispatch
                  )
                  setShowModalEditRegistroSalud(false)
               }}
            >
               Añadir
            </Button>
         </Modal.Footer>
      </Modal>
   )
}

export default ModalEditRegistroSalud
