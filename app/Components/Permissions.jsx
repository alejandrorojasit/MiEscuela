import {
   Row,
   Col,
   Form,
} from 'react-bootstrap'

import {DecodeToken} from './Logic/tokenhandler'

const permissions = ({context,switchAsistencia,setReRender,reRender,addUserRef,switchCalificacionesLeer,setSwitchAsistencia,setSwitchCalificacionesLeer,switchCalificacionesEditar,setSwitchCalificacionesEditar}) => { 
     
   return ( 
      <Col>
         <h6>Privilegios:</h6>
         {
            Object.values(context?.stateHardCodeData?.hardCodeData?.permisosUsuario).map((dataMap,index)=> 
               <Form.Check
                  key={dataMap}
                  type='checkbox'
                  label={dataMap}
                  ref={(element)=> {addUserRef.current[Object.keys(context?.stateHardCodeData?.hardCodeData?.permisosUsuario)[index]] = element?.checked}}

                  onChange={()=>setReRender(!reRender)}
               />
            )
         }
         <h6>Generar Informes:</h6>
         {
            Object.values(context?.stateHardCodeData?.hardCodeData?.generarReportes).map((dataMap,index)=>
               <Form.Check
                  key={dataMap}
                  type='checkbox'
                  label={dataMap}
                  ref={(element)=> {addUserRef.current[Object.keys(context?.stateHardCodeData?.hardCodeData?.generarReportes)[index]]=element?.checked}}
                  onChange={()=>setReRender(!reRender)}
               />
            )
         }
         <h6>Asistencia:</h6>
         <Form.Check
            type='checkbox'
            label='Tomar Asistencia'
            ref={(element)=> {addUserRef.current.tomarAsistencia=element?.checked}}
            onChange={()=>setSwitchAsistencia(!switchAsistencia)}
         />
         <Row>
            <Col
               className='border border-success m-1'
            >
               <h6>Inicial:</h6>
               <Row>
                  <Col>
                     Sala 4:
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='A'
                        ref={(element)=> {addUserRef.current.asisInicial4a = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchAsistencia}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current.asisInicial4b = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchAsistencia}
                     />              
                  </Col>
               </Row>
               <Row>
                  <Col>
                     Sala 5:
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='A'
                        ref={(element)=> {addUserRef.current.asisInicial5a = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchAsistencia}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current.asisInicial5b = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchAsistencia}
                     />              
                  </Col>
               </Row>

            </Col>
            <Col
               className='border border-success m-1'
            > 
               <h6>Primario:</h6>
               {
                  context?.stateHardCodeData?.hardCodeData?.grado?.map((dataMap)=>
                     <Row
                        key={dataMap}
                     >
                        <Col>
                           {dataMap}:
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='A'
                              ref={(element)=> {addUserRef.current[`asisPrimario${dataMap}a`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchAsistencia}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`asisPrimario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchAsistencia}
                           />              
                        </Col>
                     </Row>
                  )
               }
            </Col>
            <Col
               className='border border-success m-1'
            >
               <h6>Secundario:</h6>
               {
                  context?.stateHardCodeData?.hardCodeData?.grado?.map((dataMap)=>
                     <Row
                        key={dataMap}
                     >
                        <Col>
                           {dataMap}:
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='A'
                              ref={(element)=> {addUserRef.current[`asisSecundario${dataMap}a`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchAsistencia}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`asisSecundario${dataMap}a`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchAsistencia}
                           />              
                        </Col>
                     </Row>
                  )
               }

            </Col>      
         </Row>
         <h6>Calificaciones:</h6>
         <Row>
            <Col>
               <Form.Check
                  type='checkbox'
                  label='Leer Calificaciones'
                  ref={(element)=> {addUserRef.current.leerCalificaciones = element?.checked}}
                  onChange={(element)=>{
                        console.log(element.target.checked)
                        setSwitchCalificacionesLeer(!element.target.checked)
                  }
                  }
               />         
            </Col>
            <Col> 

            </Col>
         </Row>
         <Row>
            <Col
               className='border border-success m-1'
            >
               <h6>Inicial:</h6>
               <Row>
                  <Col>
                     Sala 4:
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='A'
                        ref={(element)=> {addUserRef.current[`caliInicial4a`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesLeer}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current[`caliInicial4b`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesLeer}
                     />              
                  </Col>
               </Row>
               <Row>
                  <Col>
                     Sala 5:
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='A'
                        ref={(element)=> {addUserRef.current[`caliInicial5a`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesLeer}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current[`caliInicial5b`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesLeer}
                     />              
                  </Col>
               </Row>

            </Col>
            <Col
               className='border border-success m-1'
            > 
               <h6>Primario:</h6>
               {
                  context?.stateHardCodeData?.hardCodeData?.grado?.map((dataMap)=>
                     <Row
                        key={dataMap}
                     >
                        <Col>
                           {dataMap}:
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='A'
                              ref={(element)=> {addUserRef.current[`caliPrimario${dataMap}a`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesLeer}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`caliPrimario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesLeer}
                           />              
                        </Col>
                     </Row>
                  )
               }
            </Col>
            <Col
               className='border border-success m-1'
            >
               <h6>Secundario:</h6>
               {
                  context?.stateHardCodeData?.hardCodeData?.grado?.map((dataMap)=>
                     <Row
                        key={dataMap}
                     >
                        <Col>
                           {dataMap}:
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='A'
                              ref={(element)=> {addUserRef.current[`caliSecundario${dataMap}a`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesLeer}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`caliSecundario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesLeer}
                           />              
                        </Col>
                     </Row>
                  )
               }
            </Col>      
            <Row>
               <Col>
               <Form.Check
                  type='checkbox'
                  label='Editar Calificaciones'
                  ref={(element)=> {addUserRef.current.editarCalificaciones = element?.checked}}
                  onChange={(element)=>
                        setSwitchCalificacionesEditar(!element.target.checked)
                  }
               />      
               </Col>
            </Row>
         </Row>
         <Row>
            <Col
               className='border border-success m-1'
            >
               <h6>Inicial:</h6>
               <Row>
                  <Col>
                     Sala 4:
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='A'
                        ref={(element)=> {addUserRef.current[`caliInicial4a`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesEditar}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current[`caliInicial4b`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesEditar}
                     />              
                  </Col>
               </Row>
               <Row>
                  <Col>
                     Sala 5:
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='A'
                        ref={(element)=> {addUserRef.current[`caliInicial5a`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesEditar}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current[`caliInicial5b`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesEditar}
                     />              
                  </Col>
               </Row>

            </Col>
            <Col
               className='border border-success m-1'
            > 
               <h6>Primario:</h6>
               {
                  context?.stateHardCodeData?.hardCodeData?.grado?.map((dataMap)=>
                     <Row
                        key={dataMap}
                     >
                        <Col>
                           {dataMap}:
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='A'
                              ref={(element)=> {addUserRef.current[`caliPrimario${dataMap}a`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesEditar}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`caliPrimario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesEditar}
                           />              
                        </Col>
                     </Row>
                  )
               }
            </Col>
            <Col
               className='border border-success m-1'
            >
               <h6>Secundario:</h6>
               {
                  context?.stateHardCodeData?.hardCodeData?.grado?.map((dataMap)=>
                     <Row
                        key={dataMap}
                     >
                        <Col>
                           {dataMap}:
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='A'
                              ref={(element)=> {addUserRef.current[`caliSecundario${dataMap}a`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesEditar}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`caliSecundario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesEditar}
                           />              
                        </Col>
                     </Row>
                  )
               }
            </Col>
         </Row>
      </Col>

   )
}

export default permissions
