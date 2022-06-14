import {useState} from 'react'

import {
   Container,
   Col,
   Row,
   Form,
   Button,
   Image
} from 'react-bootstrap'

import {
   handleChangeUser,
   handleChangePassowrd,
   handleClick
} from '../logic/loginformLogic'
import Lottie from 'lottie-react'
import HeaderAnimation from '../../assets/header/Header.json'
import LogoEscuela from '../../assets/jpg/LogoEPAt.png'
import {colors} from '../../helpers/styleColors'


import 
   ModalAlert
 from '../modals/ModalAlert'

import {useDispatch,useSelector} from 'react-redux'

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

const LoginForm = () => {

   const dispatch = useDispatch()
   const {user,password} = useSelector(state => state.logInFormReducer)

   const [stateShow,setStateShow] = useState(false)

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
               <ModalAlert
                  stateShow={stateShow} 
                  setStateShow={setStateShow}
                  message='Usuario o clave incorrecta. Por favor verifique los datos ingresados.'
                  type=''
                  callBack={()=>{}}
               />
               <Form
               > 
                  <Form.Group>
                     <Form.Label>Usuario</Form.Label>
                     <Form.Control 
                        placeholder='Ingrese Usuario' 
                        type='text' 
                        onChange={(event) => handleChangeUser(
                           event,
                           dispatch
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
                                 user,
                                 password,
                                 dispatch
                              )
                        }
                        }}
                        placeholder='Ingrese Contraseña' 
                        type='password' 
                        onChange={(event) => handleChangePassowrd(
                           event,
                           dispatch
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
                           user,
                           password,
                           dispatch,
                           setStateShow
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
