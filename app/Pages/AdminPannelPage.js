import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import {
   Container,
   Col,
   Row
} from 'react-bootstrap'

import AdminOptions from '../components/AdminOptions'

const AdminPannelPage = () => {
   return(
      <Container 
         style={{fontFamily:'Droid Sans'}}
         fluid
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
