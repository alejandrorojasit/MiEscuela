import {
   Modal,
   Form,
   Button,
} from 'react-bootstrap'

import {
   handleChangeModel,
   handleAcceptModel,
} from './Logic/ratificacionLogic'

const ModalModelPdfSelecion = ({
   showModalPdfSelection,
   setShowModalPdfSelection,
   modelo,
   setModelo,
   showModalItemsToPrint,
   setShowModalItemsToPrint,
   context
}) => {

   const handleClose = () => setShowModalPdfSelection(false)
   const modelPdf = context.stateHardCodeData.hardCodeData.modelPdf
   return (
      <Modal 
         show={showModalPdfSelection} 
         onHide={handleClose}
      >
         <Modal.Header 
            closeButton
         >
         <h6>Seleccione modelo de PDF</h6>
         </Modal.Header>
         <Modal.Body>
            <Form.Select 
                  aria-label='Modelo' 
                  onChange={(event) => handleChangeModel(
                     event,
                     setModelo
                  )} 
               >
                  <option>Modelo</option>
                  {modelPdf.map((dataMap)=>
                  <option 
                     value={dataMap} 
                     key={dataMap}
                  >
                     {dataMap}
                  </option>
                  )}
               </Form.Select>
         </Modal.Body>
         <Modal.Footer>
            <Button 
               variant='outline-primary'
               size='sm'
               onClick={() => {handleAcceptModel(setShowModalPdfSelection,setShowModalItemsToPrint)}}
            >
            Aceptar
         </Button>
         </Modal.Footer>
      </Modal>
   )
}
export default ModalModelPdfSelecion
