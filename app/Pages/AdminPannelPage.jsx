import Header from '../Components/header.jsx'
import Menu from '../Components/menu.jsx'
import Footer from '../Components/footer.jsx'

import {
   Container,
   Col,
   Row
} from 'react-bootstrap'

import AdminOptions from '../Components/AdminOptions.jsx'

const AdminPannelPage = () => {
   return(
      <Container 
         fluid
      >
         <Row>
            <Header/>
         </Row>
         <Row>
            <Menu/>
         </Row>
         <Row>
            <AdminOptions/>
         </Row>
         <Row>
            <Footer/>
         </Row>
      </Container>

   )
}

export default AdminPannelPage
