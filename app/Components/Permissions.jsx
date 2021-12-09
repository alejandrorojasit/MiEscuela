import {
   Row,
   Col,
   Form,
} from 'react-bootstrap'

import {DecodeToken} from './Logic/tokenhandler'

const permissions = ({context,
   switchAsistencia,
   setReRender,
   reRender,
   addUserRef,
   switchCalificacionesLeer,
   setSwitchAsistencia,
   setSwitchCalificacionesLeer,
   switchCalificacionesEditar,
   setSwitchCalificacionesEditar,
   isNewUser 
}) => { 
   let permissions = {} 
   isNewUser ?
      permissions = {}
      :
      permissions = DecodeToken(1).usuario.permissions     
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
                  defaultChecked={permissions[Object.keys(context?.stateHardCodeData?.hardCodeData?.permisosUsuario)[index]]}
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
                  defaultChecked={permissions[Object.keys(context?.stateHardCodeData?.hardCodeData?.generarReportes)[index]]}
               />
            )
         }
         <h6>Asistencia:</h6>
         <Form.Check
            type='checkbox'
            label='Tomar Asistencia'
            ref={(element)=> {addUserRef.current.tomarAsistencia=element?.checked}}
            onChange={()=>setSwitchAsistencia(!switchAsistencia)}
            defaultChecked={permissions.tomarAsistencia}
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
                        defaultChecked={permissions.asisInicial4a}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current.asisInicial4b = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchAsistencia}
                        defaultChecked={permissions.asisInicial4b}
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
                        defaultChecked={permissions.asisInicial5a}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current.asisInicial5b = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchAsistencia}
                        defaultChecked={permissions.asisInicial5b}
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
                              defaultChecked={permissions[`asisPrimario${dataMap}a`]}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`asisPrimario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchAsistencia}
                              defaultChecked={permissions[`asisPrimario${dataMap}b`]}
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
                              defaultChecked={permissions[`asisSecundario${dataMap}a`]}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`asisSecundario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchAsistencia}
                              defaultChecked={permissions[`asisSecundario${dataMap}b`]}
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
                  onChange={(element)=>
                        setSwitchCalificacionesLeer(!element.target.checked)
                  }
                  defaultChecked={permissions.leerCalificaciones}
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
                        ref={(element)=> {addUserRef.current[`caliLeerInicial4a`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesLeer}
                        defaultChecked={permissions[`caliLeerInicial4a`]}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current[`caliLeerInicial4b`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesLeer}
                        defaultChecked={permissions[`caliLeerInicial4b`]}
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
                        ref={(element)=> {addUserRef.current[`caliLeerInicial5a`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesLeer}
                        defaultChecked={permissions[`caliLeerInicial5a`]}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current[`caliLeerInicial5b`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesLeer}
                        defaultChecked={permissions[`caliLeerInicial5b`]}
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
                              ref={(element)=> {addUserRef.current[`caliLeerPrimario${dataMap}a`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesLeer}
                              defaultChecked={permissions[`caliLeerPrimario${dataMap}a`]}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`caliLeerPrimario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesLeer}
                              defaultChecked={permissions[`caliLeerPrimario${dataMap}b`]}
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
                              ref={(element)=> {addUserRef.current[`caliLeerSecundario${dataMap}a`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesLeer}
                              defaultChecked={permissions[`caliLeerSecundario${dataMap}a`]}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`caliLeerSecundario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesLeer}
                              defaultChecked={permissions[`caliLeerSecundario${dataMap}b`]}
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
                  defaultChecked={permissions.editarCalificaciones}
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
                        defaultChecked={permissions[`caliInicial4a`]}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current[`caliInicial4b`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesEditar}
                        defaultChecked={permissions[`caliInicial4b`]}
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
                        defaultChecked={permissions[`caliInicial5a`]}
                     />              
                  </Col>
                  <Col>
                     <Form.Check
                        type='checkbox'
                        label='B'
                        ref={(element)=> {addUserRef.current[`caliInicial5b`] = element?.checked}}
                        onChange={()=>setReRender(!reRender)}
                        disabled={switchCalificacionesEditar}
                        defaultChecked={permissions[`caliInicial5b`]}
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
                              defaultChecked={permissions[`caliPrimario${dataMap}a`]}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`caliPrimario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesEditar}
                              defaultChecked={permissions[`caliPrimario${dataMap}b`]}
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
                              defaultChecked={permissions[`caliSecundario${dataMap}a`]}
                           />              
                        </Col>
                        <Col>
                           <Form.Check
                              type='checkbox'
                              label='B'
                              ref={(element)=> {addUserRef.current[`caliSecundario${dataMap}b`] = element?.checked}}
                              onChange={()=>setReRender(!reRender)}
                              disabled={switchCalificacionesEditar}
                              defaultChecked={permissions[`caliSecundario${dataMap}b`]}
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
