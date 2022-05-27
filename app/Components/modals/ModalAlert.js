import {Modal,Button} from 'react-bootstrap'

const ModalAlert = ({stateShow,setStateShow,message,type,callBack}) => { 

   const handleCancel = () => {
      setStateShow(false)
      callBack(false)
   }

   const handleAccept = () => {
      setStateShow(false)
      callBack(true)
   }
   return ( 
      <Modal
         show={stateShow}
      >
         <Modal.Header
            className='d-flex justify-content-center'
         >
            <h6>Mensaje de alerta</h6>
         </Modal.Header>
         <Modal.Body>
            {message}
         </Modal.Body>
         <Modal.Footer>
            {
               type === 'AcceptCancel' ?
                  <>
                     <Button
                        variant='outline-success'
                        size='sm'
                        onClick={()=> handleAccept()}
                     >
                        Aceptar 
                     </Button>
                     <Button
                        variant='outline-success'
                        size='sm'
                        onClick={()=> handleCancel()}
                     >
                        Cancelar 
                     </Button>
                  </>
                  :
                  <>
                     <Button
                        variant='outline-success'
                        size='sm'
                        onClick={()=> handleAccept()}
                     >
                        Aceptar 
                     </Button>
                  </>
            }
         </Modal.Footer>
      </Modal>
   )
}

export default ModalAlert
