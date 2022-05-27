import {
   Modal,
   Button,
   Table,
   Col,
   Row,
} from 'react-bootstrap'

import {
   handleShow,
   handleClickAccept,
   createDataRegistro,
} from '../logic/modalupdateLogic.js'

import useAuth from '../../context/store/useAuth'
import {useSelector} from 'react-redux'

import {updateAlumnoUrl} from '../../helpers/Urls'

const ModalUpdate = ({
   showModalUpdate,
   updatedData,
   setShowModalUpdate,
   dataAlumno,
   alumnoEditModal,
   setAlumnoEditModal,
   setSwitchEdit,
   setSelectedAlumnoForEdit,
   selectedAlumnoForEdit,
   setDataAlumno,
}) => { 

   const context = useSelector(state => state.authReducer)

   let dataRegistro = createDataRegistro (
      dataAlumno,
      updatedData,
      context.user
   )

   return ( 
      <Modal
         show={showModalUpdate}
         onHide={() => handleShow(setShowModalUpdate)}
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
                           context,
                           updateAlumnoUrl,
                           dataAlumno._id,
                           dataRegistro,
                           setAlumnoEditModal,
                           setShowModalUpdate,
                           setSwitchEdit,
                           setSelectedAlumnoForEdit,
                           selectedAlumnoForEdit,
                           setDataAlumno
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
                     onClick={() => handleShow(setShowModalUpdate)}
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

