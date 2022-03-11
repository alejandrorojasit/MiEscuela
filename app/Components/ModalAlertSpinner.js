import {
   Modal,
} from 'react-bootstrap'

import LoadingSpinner from './LoadingSpinner'

const ModalAlertSpinner = ({stateShow,message}) => { 

   const {Header,Body,Footer} = Modal
   return ( 
      <Modal
         show={stateShow}
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
