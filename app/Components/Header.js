import {useEffect} from 'react'

import {Container,
   Row,
   Col,
   Image
} from 'react-bootstrap'

import Lottie from 'lottie-react'
import HeaderAnimation from '../assets/header/Header.json'
import WebFont from 'webfontloader'
import LogoEscuela from '../assets/jpg/LogoEPAt.png'
import {colors} from '../helpers/styleColors'

const style = {

   lottieAnimation : {
      height: 80,
   },
   titleFont : {
      fontFamily: 'Schoolbell',
      fontSize: 50,
      marginTop: 10,
      color:colors.darken
   },
   header:{
      backgroundColor: colors.analogus[0],
   }
}

const Header = () => {

   useEffect (() => {
      WebFont.load({
         google: {
            families:['Schoolbell']
         }
      })
   },[])

   return (
      <Container 
         style={style.header} 
         fluid
      >
         <Row>
            <Col 
               className='d-flex justify-content-center'
            >
               <Image 
                  className='p-2'
                  src={LogoEscuela} 
                  style={{height:80}}
               />
            </Col>
            <Col
               className='d-flex justify-content-center'
            >
               <h1 
                  style={style.titleFont}
               >
                  Mi Escuela
               </h1>
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

export default Header
