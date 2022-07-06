import {
   Modal,
   Button
} from 'react-bootstrap'

import {
   useSelector,
   useDispatch,
} from 'react-redux'

import {
   modalAlert_updateStateShow,
} from '../../redux/actions/modalAlert.action'

import LoadingSpinner from '../spinners/LoadingSpinner'

const ModalAlert = ({
}) => { 

   const dispatch = useDispatch()

   const {
      model,
      message,
      stateShow,
      callBack,
   } = useSelector(state => state.modalAlertReducer)

   const conditionalRenderingButton = (model) => {
      switch(model){
         case "AcceptCancel":
            return (
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
            ) 
         case "Alert":
            return (
               <Button
                  variant='outline-success'
                  size='sm'
                  onClick={()=> handleAccept()}
               >
                  Aceptar 
               </Button>
            )
         case "Spinner":
         return (
            <LoadingSpinner/>
            )
      }
   }

   const handleCancel = () => {
      dispatch(modalAlert_updateStateShow())
      callBack(false)
   }

   const handleAccept = () => {
      dispatch(modalAlert_updateStateShow())
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
            conditionalRenderingButton(model)
         }
         </Modal.Footer>
      </Modal>
   )
}

export default ModalAlert
