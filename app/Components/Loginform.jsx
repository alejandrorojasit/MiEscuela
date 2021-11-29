import {useEffect} from 'react'

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
      background:colors.light30,
   },
   button: {
      marginTop: 20,
   },
      lottieAnimation : {
      height: 350,
   },
   titleFont : {
      fontFamily: 'Schoolbell',
      fontSize: 50,
      marginTop: 10,
   },
   image:{
      height:350,
   },
   headerLogInForm:{
      display:'flex', 
      justifyContent:'center',
      background:colors.base,
      width:'100vw',
      padding:10,
      fontFamily:'Schoolbell',
   }
}

const Loginform = ({
   usuario,
   password,
   setUsuario,
   setPassword,
   context,
}) => {
      useEffect (() => {
      WebFont.load({
         google: {
            families:['Schoolbell']
         }
      })
   },[])

   return (
      <Container 
         style={style.form}
      >
         <Row>
            <Col
               style={style.headerLogInForm}
            > 
                  <h1>Mi Escuela</h1>
            </Col>
         </Row>
         <Row
               style={{marginTop:50}}
         >
            <Col
               className='d-flex justify-content-center'
            >
               <Image 
                  className='p-2'
                  src={LogoEscuela} 
                  style={style.image}
               />
            </Col>
            <Col
               className='mt-4'
            >
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
                     >
                        La contraseña es la misma que utiliza para iniciar sesion en la maquina.
                     </Form.Text>
                  </Form.Group>
                  <Button 
                     variant='success'
                     type='button' 
                     style={style.button} 
                     className='textLigth'
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
               <Lottie 
                  animationData={HeaderAnimation}
                  style={style.lottieAnimation}
               />
            </Col>
         </Row>
      </Container>
   )
}

export default Loginform
