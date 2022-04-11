import {
   Container,
   Col,
   Row,
   Form,
   Button,
   Image
} from 'react-bootstrap'

import {handleChangeUser,handleChangePassowrd,handleClick} from './Logic/loginformLogic'
import Lottie from 'lottie-react'
import HeaderAnimation from '../Assets/Header/Header.json'
import WebFont from 'webfontloader'
import LogoEscuela from '../Assets/jpg/LogoEPAt.png'
import {colors} from '../Helpers/styleColors'

const style = {
   form: {
      height: '100vh',
      color:colors.darken,

   },
   button: {
      marginTop: 20,
   },
   lottieAnimation : {
   },
   titleFont : {
      fontFamily: 'Schoolbell',
      fontSize: 50,
      marginTop: 10,
   },
   image:{
   },
   headerLogInForm:{
      display:'flex', 
      justifyContent:'center',
      background:colors.analogus[0],
      width:'100vw',
      padding:10,
      fontFamily:'Schoolbell',
      color:colors.darken
   }
}

const LoginForm = ({
   usuario,
   password,
   setUsuario,
   setPassword,
   context,
   setShowModalAlertSpinner
}) => {



   return (
      <Container 
         style={style.form}
      >
         <Row
            style={{height:'100vh'}}
         >
            <Col
               style={{display:'flex',height:'25vw',alignContent:'center',justifyContent:'center',margin:'auto'}}
            >
               <Image 
                  className='p-2'
                  src={LogoEscuela} 
                  style={style.image}
                  fluid
               />
            </Col>
            <Col
               style={{display:'flex',margin:'auto'}}
            >
               <Form
               > 
                  <Form.Group>
                     <Form.Label>Usuario</Form.Label>
                     <Form.Control 
                        placeholder='Ingrese Usuario' 
                        type='text' 
                        onChange={(event) => handleChangeUser(
                           event,
                           setUsuario
                        )}
                     />
                     <Form.Text 
                     >
                        El nombre de usuario es el mismo que utiliza para iniciar sesion en la maquina.
                     </Form.Text>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Contraseña</Form.Label>
                     <Form.Control 
                        onKeyPress={(event) => {
                           if(event.code === 'Enter'){
                              handleClick(
                                 usuario,
                                 password,
                                 context,
                                 setShowModalAlertSpinner
                              )
                        }
                        }}
                        placeholder='Ingrese Contraseña' 
                        type='password' 
                        onChange={(event) => handleChangePassowrd(
                           event,
                           setPassword
                        )}
                     />
                     <Form.Text 
                     >
                        La contraseña es la misma que utiliza para iniciar sesion en la maquina.
                     </Form.Text>
                  </Form.Group>
                  <Button 
                     variant='outline-success'
                     type='button' 
                     style={style.button} 
                     className='textLigth'
                     onClick={()=>{
                        handleClick(
                           usuario,
                           password,
                           context,
                           setShowModalAlertSpinner
                        )
                     } 
                     }
                  >
                     Ingresar
                  </Button>
               </Form>
            </Col>
            <Col
               style={{display:'flex',margin:'auto',height:'25vw',justifyContent:'center'}}
            >
               <Lottie 
                  animationData={HeaderAnimation}
                  style={style.lottieAnimation}
               />
            </Col>
         </Row>
      </Container>
   )
}

export default LoginForm
