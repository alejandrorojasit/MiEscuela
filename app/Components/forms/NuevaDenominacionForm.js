import { useState } from 'react';

import {
   Container,
   Row,
   Col,
   Form,
   Button,

} from 'react-bootstrap'

import { postFetchNuevaDenominacion } from '../../hooks/postFetch';
import { nuevaDenominacionUrl } from '../../helpers/Urls';
import { getHardCodeData } from '../../hooks/getFetch'; 
import {setHardCodeData} from '../../redux/actions/hardCodeData.action'
import {useSelector,useDispatch} from 'react-redux'

const NuevaDenominacionForm = () => { 

   const context = useSelector(state => state.authReducer)
   const dispatch = useDispatch()

   const [ denominacion,setDenominacion ] = useState(''); 
   const {Label,Control} = Form

   return ( 
      <Container>
         <Container
            className='border border-success p-3'
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
                  onClick={() => postFetchNuevaDenominacion(
                     context.token,
                     nuevaDenominacionUrl,
                     denominacion
                  ).then( res => {
                     if(res.status === 200){
                        getHardCodeData(context.token)
                           .then( res => {
                              dispatch(setHardCodeData(res.data[0]))
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
      </Container>
   )
}

export default NuevaDenominacionForm
