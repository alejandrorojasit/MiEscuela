import {Modal} from 'react-bootstrap'

const modalEditObservaciones = ({
}) => {


   return (
      <Modal 
         show={showModalEditObservaciones} 
         onHide={handleClose}
      >
         <Modal.Header 
            closeButton
         >
         <h6></h6>
         </Modal.Header>
         <Modal.Body>
            <LoadingSpinner/>
         </Modal.Body>
      </Modal>
   )
}
export default modalEditObservaciones
