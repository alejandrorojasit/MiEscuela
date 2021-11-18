import React from 'react'

import {
   Navbar,
   Nav,
   NavDropdown
} from 'react-bootstrap'

import useAuth from '../Context/Store/useAuth.jsx'
import {logoutUser} from '../Context/Actions/autentication.action.js'

import {DecodeToken} from './Logic/tokenhandler'

import {Link} from 'react-router-dom'

const Menu = () => {

   const context = useAuth()
   return (
      <Navbar 
         bg='dark' 
         variant='dark'
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
               <Nav.Link 
                  as={Link} 
                  to='/Matricula'
               >
                  Matricula
               </Nav.Link>
               <NavDropdown 
                  title='Generar'
               >
                  <NavDropdown.Item 
                     as={Link} 
                     to='/RatificacionInscripcion'
                  >
                     Ratificacion de Inscripcion
                  </NavDropdown.Item>
               </NavDropdown>
            </Nav>
            {
               DecodeToken(1).usuario.role === 'admin' ? 
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
