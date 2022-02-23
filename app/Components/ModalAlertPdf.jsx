import {Modal} from 'react-bootstrap'

import LoadingSpinner from './LoadingSpinner.jsx'

const modalAlert = ({
   selectedItems,
   showModalPdf,
   setShowModalPdf,
   filtredDatosAlumnoStage1,
   isRender,
   setIsRender,
}) => {

   const handleClose = () => isRender(false)

   return (
      <Modal 
         show={isRender} 
         onHide={handleClose}
      >
         <Modal.Header 
            closeButton
         >
         <h6>Generando pdf por favor espere...</h6>
         </Modal.Header>
         <Modal.Body>
            <LoadingSpinner/>
         </Modal.Body>
      </Modal>
   )
}
export default modalAlert
