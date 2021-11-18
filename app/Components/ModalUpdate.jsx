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
} from './Logic/modalupdateLogic.js'

import useAuth from '../Context/Store/useAuth.jsx'

import {updateAlumnoUrl} from '../Helpers/Urls'

const ModalUpdate = ({
   showModalUpdate,
   updatedData,
   setShowModalUpdate,
   dataAlumno,
   alumnoEditModal,
   setAlumnoEditModal,
   setSwitchEdit,
   setSelectedAlumnoForEdit,
}) => { 


const context = useAuth()

let dataRegistro = createDataRegistro(dataAlumno,updatedData,context.stateUser.user)

      return ( 
         <Modal
            show={showModalUpdate}
            onHide={() => handleShow(setShowModalUpdate)}
         >
         <Modal.Header>
            <h6>Datos a actualizar</h6>
         </Modal.Header>  
            <Modal.Body>
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
            <Modal.Footer>
               <Row
                  className='mt-2'
               >
                  <Col>
                     <Button 
                        variant='outline-primary'
                        onClick={() => handleClickAccept(updatedData,context.stateUser.token,updateAlumnoUrl,dataAlumno._id,dataRegistro,setAlumnoEditModal,setShowModalUpdate,setSwitchEdit,setSelectedAlumnoForEdit)}
                     >
                        Aceptar
                     </Button>
                  </Col>
                  <Col>
                     <Button
                        variant='outline-primary'
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

