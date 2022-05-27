import {
   Modal,
} from 'react-bootstrap'

import {useSelector} from 'react-redux'

import LoadingSpinner from '../spinners/LoadingSpinner'

const ModalAlertSpinner = ({message}) => { 

   const modalAlertState = useSelector(state => state.modalAlertSpinnerReducer)

   const {Header,Body,Footer} = Modal
   return ( 
      <Modal
         show={modalAlertState.show}
      >
         <Header
            className='d-flex justify-content-center'
         >      
            <h6>Por favor espere...</h6>      
         </Header>
         <Body>
            <LoadingSpinner/>
         </Body>
         <Footer
            className='d-flex justify-content-center'
         >
               {message}
         </Footer>
      </Modal>
   )
}

export default ModalAlertSpinner
