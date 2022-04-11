import {Popover} from 'react-bootstrap'
const {Header,Body}  =  Popover

export const DniPopOver = (
         <Popover id='popover-dni'>
            <Header>Ayuda</Header>
            <Body>'El Dni debe ser ingresado utilizando puntos.'</Body>
         </Popover>
) 
   
export const TelFijoPopOver = (
         <Popover id='popover-telFijo'>
            <Header>Ayuda</Header>
            <Body>'El numero de telefono debe contener 6 digitos.'</Body>
         </Popover>
)

export const TelCelularPopOver = (
         <Popover id='popover-telCelular'>
            <Header>Ayuda</Header>
            <Body>'El numero de telefono debe ser ingresado sin el 0 que antepone la caracteristica y sin el 15 que lo pospone.'</Body>
         </Popover>
)
