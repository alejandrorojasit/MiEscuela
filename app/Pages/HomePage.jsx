import {
   Container,
   Row
} from 'react-bootstrap'

import Header from '../Components/Header.jsx'
import Menu from '../Components/Menu.jsx'
import Footer from '../Components/Footer.jsx'




const HomePage = () => {
   return (
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
            <Footer/>
         </Row>
      </Container>
   )
}

export default HomePage
