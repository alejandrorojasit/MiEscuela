import {
   Container,
   Col,
   Row,
   Form,
   Button
} from 'react-bootstrap'

import {handleChangeUser,handleChangePassowrd,handleClick} from './Logic/loginformLogic'


const style = {
   form: {
      marginTop: 20,
   },
   button: {
      marginTop: 20,
   }
}

const Loginform = ({
   usuario,
   password,
   setUsuario,
   setPassword,
   context,
}) => {
   
   return (
      <Container 
         style={style.form}
      >
         <Row>
            <Col>
            </Col>
            <Col>
               <Form> 
                  <Form.Group>
                     <Form.Label>Usuario</Form.Label>
                     <Form.Control 
                        placeholder='Ingerse Usuario' 
                        type='text' 
                        onChange={(event) => handleChangeUser(
                        event,
                        setUsuario
                        )}
                     />
                     <Form.Text 
                        className='text-muted'
                     >
                        El nombre de usuario es el mismo que utiliza para iniciar sesion en la maquina.
                     </Form.Text>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Contraseña</Form.Label>
                     <Form.Control 
                        placeholder='Ingerse Contraseña' 
                        type='password' 
                        onChange={(event) => handleChangePassowrd(
                        event,
                        setPassword
                        )}
                     />
                     <Form.Text 
                        className='text-muted'
                     >
                        La contraseña es la misma que utiliza para iniciar sesion en la maquina.
                     </Form.Text>
                  </Form.Group>
                  <Button 
                     variant='primary' 
                     type='button' 
                     style={style.button} 
                     onClick={()=> handleClick(
                     usuario,
                     password,
                     context
                     )}
                  >
                     Ingresar
                  </Button>
               </Form>
            </Col>
            <Col>
            </Col>
         </Row>
      </Container>
   )
}

export default Loginform
