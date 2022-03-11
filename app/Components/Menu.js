import {
   Navbar,
   Nav,
   NavDropdown,
   Image
} from 'react-bootstrap'

import useAuth from '../Context/Store/useAuth'
import {logOutCurrentUser} from '../Context/Actions/autentication.action.js'
import {DecodeToken} from './Logic/tokenhandler'
import {Link} from 'react-router-dom'
import LogoEPAt from '../Assets/jpg/LogoEPAt.png'

const Menu = () => {
   const context = useAuth()
   return (
      <Navbar 
      >
         <Navbar.Brand>
            <Image
               src={LogoEPAt}
               style={{height:60}}
            />
         </Navbar.Brand>
         <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
         />
         <Navbar.Collapse 
            id="basic-navbar-nav"
         >
            <Nav 
               className="me-auto"
            >
               <Nav.Link 
                  as={Link}
                  to='/'
               >Inicio</Nav.Link>
               {
                  DecodeToken(context)?.usuario?.permissions?.leerMatricula || DecodeToken(context)?.usuario?.permissions?.editarMatricula ?
                     <NavDropdown
                        title='Administracion'
                     >
                        <NavDropdown.Item 
                           as={Link} 
                           to='/NuevoCicloLectivo'
                        >
                           Nuevo Ciclo Lectivo
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                           as={Link} 
                           to='/Matricula'
                        >
                           Fin de Ciclo Lectivo
                        </NavDropdown.Item>
                     </NavDropdown>
                     :
                     null
               }

               {
                  DecodeToken(context)?.usuario?.permissions?.leerMatricula || DecodeToken(context)?.usuario?.permissions?.editarMatricula ?
                     <NavDropdown
                        title='Matricula'
                     >
                        <NavDropdown.Item 
                           as={Link} 
                           to='/Matricula'
                        >
                           Matricula General
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                           as={Link} 
                           to='/NuevoIngreso'
                        >
                           Nuevo Ingreso
                        </NavDropdown.Item>
                     </NavDropdown>
                     :
                     null
               }
               <NavDropdown 
                  title='Generar'
               >
                  {
                     DecodeToken(context)?.usuario?.permissions?.ratificacionInscripcion ?
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
               DecodeToken(context)?.usuario?.role === 'Administrador Informatico' ? 
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
                  onClick={() => context.dispatch(logOutCurrentUser())}
               >
                  Salir
               </Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default Menu
