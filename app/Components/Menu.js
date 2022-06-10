import {
   Navbar,
   Nav,
   NavDropdown,
   Image
} from 'react-bootstrap'

import {logOutCurrentUser} from '../redux/actions/autentication.action.js'
import {DecodeToken} from './logic/tokenhandler'
import {Link} from 'react-router-dom'
import LogoEPAt from '../assets/jpg/LogoEPAt.png'
import {useSelector,useDispatch} from 'react-redux'

const Menu = () => {
   const userState = useSelector(state => state.authReducer)
   const hardCodeData = useSelector(state => state.hardCodeDataReducer)
   const {alumnosFullList} = useSelector(state => state.matriculaReducer)
   const dispatch = useDispatch()
   return (
      <>
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
               {/*
DecodeToken(userState)?.usuario?.permissions?.leerMatricula || DecodeToken(userState)?.usuario?.permissions?.editarMatricula ?
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
*/}
               {
               DecodeToken(userState)?.usuario?.permissions?.leerMatricula || DecodeToken(userState)?.usuario?.permissions?.editarMatricula ?
                  <NavDropdown
                     title='Matricula'
                     disabled={hardCodeData.length === 0 | alumnosFullList.length === 0}
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
                     <NavDropdown.Item 
                        as={Link} 
                        to='/NuevaDenominacion'
                     >
                        Nueva Denominacion
                     </NavDropdown.Item>

                  </NavDropdown>
                  :
                  null
            }
               {/*
<NavDropdown 
title='Generar'
>
{
DecodeToken(userState)?.usuario?.permissions?.ratificacionInscripcion ?
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

*/}
            </Nav>
            {
            DecodeToken(userState)?.usuario?.role === 'Administrador Informatico' ? 
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
                  onClick={() => dispatch(logOutCurrentUser())}
               >
                  Salir
               </Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
      </>
   )
}

export default Menu
