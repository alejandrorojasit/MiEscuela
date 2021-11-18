import {
   Spinner,
   Col,
   Row,
   Container
} from 'react-bootstrap'

const LoadingSpinner = () => { 

      return ( 
            <Col
               className='d-flex justify-content-center align-items-center'
            >
               <Spinner
                  className='mt-2'
                  animation='border'
                  variant='primary'
               />   
            </Col>
                )
}

export default LoadingSpinner
