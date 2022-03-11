import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'

import {
   Container,
   Col,
   Row
} from 'react-bootstrap'

import AdminOptions from '../Components/AdminOptions'

const AdminPannelPage = () => {
   return(
      <Container 
      >
         <Row>
         </Row>
         <Row>
            <Menu/>
         </Row>
         <Row>
            <AdminOptions/>
         </Row>
         <Row>
         </Row>
      </Container>

   )
}

export default AdminPannelPage
