import {
   Navbar,
   Nav,
   NavDropdown
} from 'react-bootstrap'

import useAuth from '../Context/Store/useAuth.jsx'
import {logoutUser} from '../Context/Actions/autentication.action.js'

import {DecodeToken} from './Logic/tokenhandler'

import {Link} from 'react-router-dom'
import {colors} from '../Helpers/styleColors.js'

const Menu = () => {
   const context = useAuth()
   return (
      <Navbar 
         variant='dark'
         style={{background:colors.darken}} 
      >
         <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
         />
         <Navbar.Collapse 
            id="basic-navbar-nav"
         >
            <Nav 
               className="me-auto"
            >
               <Nav.Link >Inicio</Nav.Link>
               {
                  DecodeToken(context).usuario.permissions.leerMatricula || DecodeToken(context).usuario.permissions.editarMatricula ?
                     <Nav.Link 
                        as={Link} 
                        to='/Matricula'
                     >
                        Matricula
                     </Nav.Link>
                     :
                     null
               }
                              <NavDropdown 
                  title='Generar'
               >
                  {
                     DecodeToken(context).usuario.permissions.ratificacionInscripcion ?
                        <NavDropdown.Item 
                           as={Link} 
                           to='/RatificacionInscripcion'
                        >
                           Ratificacion de Inscripcion
                        </NavDropdown.Item>
                        :
                        null
                  }
               </NavDropdown>
            </Nav>
            {
               DecodeToken(context).usuario.role === 'Administrador Informatico' ? 
               <Nav>
                  <Nav.Link 
                     as={Link} 
                     to='/AdminPannel'
                  >
                     Adm.Panel
                  </Nav.Link>
               </Nav> 
               : 
                  null
            }
            <Nav 
               className = 'justify-content-end'
            >
               <Nav.Link  
                  onClick={() => logoutUser(context.dispatch)}
               >
                  Salir
               </Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default Menu
