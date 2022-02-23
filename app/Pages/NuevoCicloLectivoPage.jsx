import {
   Container,
   Row
} from 'react-bootstrap'

import Header from '../Components/Header.jsx'
import Menu from '../Components/Menu.jsx'
import NuevoCicloLectivo from '../Components/NuevoCicloLectivo.jsx'

import { colors } from '../Helpers/styleColors.js'

const NuevoCicloLectivoPage = () => {
   return (
      <Container 
         fluid
         style={{color:colors.darken,background:colors.background}} 
      >
         <Row>
            <Header/>
         </Row>
         <Row>
            <Menu/>
         </Row>
         <Row> 
            <NuevoCicloLectivo/>
         </Row>
      </Container>
   )
}

export default NuevoCicloLectivoPage
