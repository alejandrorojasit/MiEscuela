import { useState } from 'react';

import {
   Container,
   Row,
   Col,
   Form,
   Button,

} from 'react-bootstrap'

import { postFetchNuevaDenominacion } from '../Hooks/postFetch';
import { nuevaDenominacionUrl } from '../Helpers/Urls';
import useAuth from '../Context/Store/useAuth'
import { getHardCodeData } from '../Hooks/getFetch'; 
import {setHardCodeData} from '../Context/Actions/hardCodeData.action'

const NuevaDenominacionForm = () => { 

   const context = useAuth()
   const [ denominacion,setDenominacion ] = useState(''); 
   const {Group,Label,Control,Text,Select} = Form

   return ( 
      <Container
         fluid
         className={'border border-success p-4'}
      >    
         <Row> 
            <Col>
               <Label>
                     Ingrese denominacion:
               </Label>
               <Control
                  type='text'
                  placeholder='Ingrese denominacion'
                  name='denominacion'
                  onChange={(element)=> setDenominacion(element.target.value)}
                  value={denominacion}
               >
                     
               </Control>
            </Col>
            <Col
            >
               <Button
                  style={{position:'relative',top:'30px'}}
                  size='sm'
                  variant='outline-success'
                  onClick={() => postFetchNuevaDenominacion(context.stateUser.token,nuevaDenominacionUrl,denominacion).then( res => {
                     if(res.status === 200){
                        getHardCodeData(context.stateUser.token)
                           .then( res => {
                              context.dispatchHardCodeData(setHardCodeData(res.data[0]))
                              setDenominacion('')
                           })
                     } 
                  }) }
               >
                     Aceptar
               </Button>
            </Col>
         </Row>
      </Container>
   )
}

export default NuevaDenominacionForm
