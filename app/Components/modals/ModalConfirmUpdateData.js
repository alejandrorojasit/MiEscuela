import {
   Modal,
   Button,
   Table,
   Col,
   Row,
} from 'react-bootstrap'

import {
   handleClickAccept,
   createDataRegistro,
} from '../logic/modalupdateLogic.js'

import {
   useSelector,
   useDispatch
} from 'react-redux'

import {updateAlumnoUrl} from '../../helpers/Urls'

const ModalUpdate = ({
}) => { 

   const dispatch = useDispatch()

   const userState = useSelector(state => state.authReducer)

   const {
      dataAlumno,
      selectedAlumnoForEdit,
   } = useSelector(state => state.matriculaReducer)

   const {
      updatedData,
      showModalUpdate
   } = useSelector(state => state.modalEditAlumnoReducer)

   let dataRegistro = createDataRegistro (
      dataAlumno,
      updatedData,
      userState.user
   )

   return ( 
      <Modal
         show={showModalUpdate}
         onHide={() => dispatch(show_ModalUpdate())}
      >
         <Modal.Header
         >
            <h6>Datos a actualizar</h6>
         </Modal.Header>  
         <Modal.Body
         >
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>#</th> 
                     <th>Encabezado:</th>
                     <th>Dato anterior:</th>
                     <th>Dato nuevo:</th>
                  </tr>
               </thead>
               <tbody>
                  {Object.keys(updatedData).map((dataMap,index)=>
                  <tr
                     key={index}
                  >
                     <th>{index}</th>
                     <th>{dataMap}</th>
                     <th>{dataAlumno[dataMap]}</th>
                     <th>{Object.values(updatedData)[index]}</th>
                  </tr> 
            )}
               </tbody>
            </Table>
         </Modal.Body> 
         <Modal.Footer
         >
            <Row
               className='mt-2'
            >
               <Col>
                  <Button 
                     variant='outline-success'
                     size='sm'
                     onClick={() => {
                        handleClickAccept(
                           updatedData,
                           userState,
                           updateAlumnoUrl,
                           dataAlumno._id,
                           dataRegistro,
                           selectedAlumnoForEdit,
                           dispatch
                        )
                     }}
                  >
                     Aceptar
                  </Button>
               </Col>
               <Col>
                  <Button
                     variant='outline-success'
                     size='sm'
                     onClick={() => dispatch(show_ModalUpdate())}
                  >
                     Cancelar
                  </Button> 
               </Col>               

            </Row>
         </Modal.Footer>
      </Modal>
   )
}

export default ModalUpdate

