import {
   Modal,
   Form,
   Button,
} from 'react-bootstrap'

import {
   handleChangeModel,
   handleAcceptModel,
} from './Logic/ratificacionLogic'

import {colors} from '../Helpers/styleColors'

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
         style={{color:colors.darken}}
      >
         <Modal.Header 
            closeButton
         >
         <h6>Seleccione modelo de PDF</h6>
         </Modal.Header>
         <Modal.Body
         >
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
         <Modal.Footer
         >
            <Button 
               variant='outline-success'
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
