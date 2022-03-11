import {
   useRef,
   useState,
   useEffect
} from 'react'

import {
   Container,
   Col,
   Row,
   Form,
   Button,
} from 'react-bootstrap'

import {dniCheck} from './Logic/datosGeneralesLogic'
import {yearsDatePicker,monthsDatePicker} from './Logic/customHeaderDatePicker'
import {getDataArg} from './Logic/nuevoIngresoLogic'
import DatePicker,{registerLocale,setDefaultLocale} from 'react-datepicker'
import useAuth from '../Context/Store/useAuth'

import es from 'date-fns/locale/es'

registerLocale('es',es)

const NuevoIngresoForm = () => { 

   const date = new Date()
   let arrayOfProvincias = []
   let arrayOfMunicipiosAlumno = []
   let arrayOfMunicipiosTutor = []
   let arrayOfCallesTutor = []
   let arrayOfMunicipiosTutor2 = []
   let arrayOfCallesTutor2 = []

   const {Group,Label,Control,Text,Select} = Form

   const nuevoIngresoRef = useRef([])

   const context = useAuth()

   const [isInvalid,setIsInvalid] = useState(true)
   const [isValid,setIsValid] = useState(false)

   const [year,setYear] = useState('2004')
   const [month,setMoth] = useState('0')
   const [fechaNacimiento,setFechaNacimiento] = useState('')

   const [dataAlumno,setDataAlumno] = useState({})
   const [dataGeoRef,setDataGeoRef] =  useState({
      arrayOfProvinciasArg:[],
      municipiosAlumno:[],
      provinciasAlumno:[],
      municipiosTutor:[],
      provinciasTutor:[],
      calleTutor:[],
      municipiosTutor2:[],
      provinciasTutor2:[],
      calleTutor2:[]
   })

   useEffect(()=>{
      getDataArg('provincias').then((res)=>
         {
            res.provincias.data.provincias.forEach((element) => arrayOfProvincias.push(element.nombre) )
            setDataGeoRef({...dataGeoRef,arrayOfProvinciasArg:arrayOfProvincias})
         }
      ) 
   },[])

   return ( 
      <>
         <Container
            fluid
            className={'border border-success p-4'}
         >
            <Row>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Nombre:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese nombre de alumno'
                           name='nombre'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Apellido:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese Apellido de alumno'
                           name='apellido'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Sexo:
                        </Label>
                        <Select
                           value={dataAlumno.sexo}
                           onChange={(value)=> setDataAlumno({...dataAlumno,sexo:value.target.value})}
                        >
                           <option>
                              Sexo
                           </option>
                           {context.stateHardCodeData.hardCodeData.sexo.map((element)=> 
                           <option
                              key={element}
                              value={element}
                           >
                              {element} 
                           </option>
                           )}
                        </Select>
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Documento:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese Documento'
                           isInvalid={isInvalid}
                           isValid={isValid}
                           ref={(element) => nuevoIngresoRef.current[2] = element}
                           onChange={(element) => {
                              dniCheck(nuevoIngresoRef,setIsValid,setIsInvalid,false)
                              setDataAlumno({...dataAlumno,dni:element.target.value})
                           }

                           }
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Fecha de Nacimiento:
                        </Label>
                        <Control
                           selected={fechaNacimiento}
                           type='text'
                           locale='es'
                           placeholder='Seleccione fecha de nacimiento'
                           as={DatePicker}
                           onChange={(value)=> {
                              setFechaNacimiento(new Date(year,month,value.getDate().toString()))
                           }}
                           dateFormat='dd/MM/yyyy'
                           renderCustomHeader={({
                           }) => (
                              <div
                                 style={{
                                    margin: 10,
                                    display: "flex",
                                    justifyContent: "center",
                                 }}
                              >
                                 <Select
                                    size='sm'
                                    onChange={({target: {value}}) => setYear(value)}
                                 >
                                    <option
                                       value={'Año'}
                                    >
                                       Año
                                    </option>
                                    {yearsDatePicker.map((element) =>
                                    <option
                                       key={element}
                                       value={element}
                                    >
                                       {element}
                                    </option>
                                    )}
                                 </Select>
                                 <Select
                                    size='sm'
                                    onChange={(value) => setMoth((value.target.selectedIndex).toString())}
                                 >
                                    <option
                                       value={'Mes'}
                                    >
                                       Mes
                                    </option>
                                    {monthsDatePicker.map((element)=>
                                    <option
                                       key={element}
                                       value={element}
                                    >
                                       {element} 
                                    </option>
                                    )} 
                                 </Select>
                              </div>
                           )}
                        />
                     </Group>
                  </Form>     
               </Col>
            </Row>
            <Row
               className='mt-2'
            >
               <Col>
                  <Form>   
                     <Group>
                        <Label> 
                           Nivel:
                        </Label>
                        <Select
                           value={dataAlumno.nivel}
                           onChange={(value)=> setDataAlumno({...dataAlumno,nivel:value.target.value})}
                        >
                           <option>
                              Nivel
                           </option>
                           {context.stateHardCodeData.hardCodeData.nivel.map((element)=> 
                           <option
                              key={element}
                              value={element}
                           >
                              {element} 
                           </option>
                           )}
                        </Select>
                     </Group>
                  </Form>
               </Col>
               <Col>
                  <Form>   
                     <Group>
                        <Label> 
                           Grado/Año:
                        </Label>
                        <Select
                           value={dataAlumno.grado}
                           onChange={(value)=> setDataAlumno({...dataAlumno,grado:value.target.value})}
                        >
                           <option>
                              Grado/Año
                           </option>
                           {context.stateHardCodeData.hardCodeData.grado.map((element)=> 
                           <option
                              key={element}
                              value={element}
                           >
                              {element} 
                           </option>
                           )}
                        </Select>
                     </Group>
                  </Form>
               </Col>
               <Col>
                  <Form>   
                     <Group>
                        <Label> 
                           Division:
                        </Label>
                        <Select
                           value={dataAlumno.division}
                           onChange={(value)=> setDataAlumno({...dataAlumno,division:value.target.value})}
                        >
                           <option>
                              Division
                           </option>
                           {context.stateHardCodeData.hardCodeData.division.map((element)=> 
                           <option
                              key={element}
                              value={element}
                           >
                              {element} 
                           </option>
                           )}
                        </Select>
                     </Group>
                  </Form>
               </Col>
               <Col>
                  <Form>   
                     <Group>
                        <Label> 
                           Denominacion:
                        </Label>
                        <Select
                           value={dataAlumno.denominacion}
                           onChange={(value)=> setDataAlumno({...dataAlumno,denominacion:value.target.value})}
                        >
                           <option>
                              Denominacion
                           </option>
                           {context.stateHardCodeData.hardCodeData.denominacion.map((element)=> 
                           <option
                              key={element}
                              value={element}
                           >
                              {element} 
                           </option>
                           )}
                        </Select>
                     </Group>
                  </Form>
               </Col>
            </Row>
            <Row
               className={'mt-2'}
            >
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Nacionalidad:
                        </Label>
                        <Select
                           value={dataAlumno.nacionalidad}
                           onChange={(value)=> {
                              setDataAlumno({...dataAlumno,nacionalidad:value.target.value})
                              value.target.value === 'Argentina' ?
                                 setDataGeoRef({...dataGeoRef,provinciasAlumno:arrayOfProvincias})
                                 :
                                 null
                           }}                         
                        >
                           <option>
                              Nacionalidad
                           </option>
                           {context.stateHardCodeData.hardCodeData.paises.map((element)=> 
                           <option
                              key={element}
                              value={element}
                           >
                              {element} 
                           </option>
                           )}
                        </Select>
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Provincia de nacimiento:
                        </Label>
                        {
                           dataAlumno.nacionalidad === 'Argentina' ?
                              <Select
                                 value={dataAlumno.provinciaNacimiento}
                                 onChange={(value) => {
                                    setDataAlumno({...dataAlumno,provinciaNacimiento:value.target.value})
                                    getDataArg(`municipios?provincia=${value.target.value}&max=100&campos=nombre`).then((res) => 
                                       {
                                          res.provincias.data.municipios.forEach(element => arrayOfMunicipiosAlumno.push(element.nombre))
                                          setDataGeoRef({...dataGeoRef,municipiosAlumno:arrayOfMunicipiosAlumno})
                                       }
                                    )
                                 } 
                                 }
                              >
                                 <option>     
                                    Provincia
                                 </option>
                                 {dataGeoRef.arrayOfProvinciasArg.sort().map((element) => 
                                 <option
                                    key={element}
                                 >
                                    {element}
                                 </option>
                                 )
                                 }                              
                              </Select>
                              :
                              <Control
                                 type='text'
                                 placeholder='Ingrese provincia de nacimiento de alumno'
                              />        
                        }
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Lugar de nacimiento:
                        </Label>
                        {
                           dataGeoRef.municipiosAlumno.length > 0 ? 
                              <Select
                                 value={dataAlumno.lugarNacimiento}
                                 onChange={(value) => {
                                    setDataAlumno({...dataAlumno,lugarNacimiento:value.target.value})
                                 }}
                              >
                                 <option>     
                                    Lugar nacimiento
                                 </option>
                                 {
                                    dataGeoRef.municipiosAlumno.sort().map((element) => 
                                       <option
                                          key={element}
                                       >
                                          {element}
                                       </option>
                                    )
                                 }                              
                              </Select>
                              :
                              <Control
                                 type='text'
                                 placeholder='Ingrese lugar de nacimiento de alumno'
                                 onChange={((value) => setDataAlumno({...dataAlumno,lugarNacimiento:value.target.value}))}
                              />
                        }
                     </Group>
                  </Form>     
               </Col>
            </Row>
         </Container>
         <Container
            className={'mt-2 border border-success p-4'}
         >
            <Row
            >         
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Nombre tutor:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese nombre de tutor'
                           name='nombreTutor'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Apellido tutor:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese apellido de tutor'
                           name='apellidoTutor'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Relacion tutor:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese relacion de tutor'
                           name='relacionTutor'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           DNI tutor:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese DNI de tutor'
                           name='dniTutor'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
            </Row>
            <Row
               className={'mt-2'}
            >
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Tel Fijo:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese Tel Fijo'
                           name='telFijo'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>  
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Tel Celular:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese Tel celular'
                           name='telCeluar'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
            </Row>
            <Row
               className={'mt-2'}
            >
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Provincia:
                        </Label>
                        <Select
                           value={dataAlumno.provinciaTutor}
                           onChange={(value) => {
                              setDataAlumno({...dataAlumno,provincia:value.target.value})
                              getDataArg(`municipios?provincia=${value.target.value}&max=100&campos=nombre`).then((res) => 
                                 {
                                    res.provincias.data.municipios.forEach(element => arrayOfMunicipiosTutor.push(element.nombre))
                                    setDataGeoRef({...dataGeoRef,municipiosTutor:arrayOfMunicipiosTutor})
                                 }
                              )

                           }}
                        >
                           <option>     
                              Provincia
                           </option>
                           {dataGeoRef.arrayOfProvinciasArg.sort().map((element) => 
                           <option
                              key={element}
                           >
                              {element}
                           </option>
                           )
                           }                              

                        </Select>
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Localidad:
                        </Label>
                        <Select
                           value={dataAlumno.municipiosTutor}
                           onChange={(value)=>{
                              setDataAlumno({...dataAlumno,localidad:value.target.value})
                              getDataArg(`calles?provincia=${dataAlumno.provincia}&localidad_censal=${value.target.value}&max=1000&campos=nombre`).then((res)=>
                                 {
                                    res.provincias.data.calles.forEach(element => arrayOfCallesTutor.push(element.nombre))
                                    setDataGeoRef({...dataGeoRef,calleTutor:arrayOfCallesTutor})
                                 }
                              )
                           }
                           } 
                        > 
                           <option> 
                              Municipio
                           </option>
                           {
                              dataGeoRef.municipiosTutor.sort().map((element,index) => 
                                 <option
                                    key={element}
                                 >
                                    {element}                            
                                 </option>
                              ) 
                           }
                        </Select>
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Calle:
                        </Label>
                        {
                           dataGeoRef.calleTutor.length > 0 ?
                              <Select
                                 value={dataAlumno.calle}
                                 onChange={(value)=>{
                                    setDataAlumno({...dataAlumno,calle:value.target.value})

                                 }
                                 } 
                              > 
                                 <option> 
                                    Calle
                                 </option>
                                 {
                                    dataGeoRef.calleTutor.sort().map((element,index) => 
                                       <option
                                          key={index}
                                       >
                                          {element}                            
                                       </option>
                                    ) 
                                 }
                              </Select>
                              :
                              <Control
                                 type='text'
                                 placeholder='Calle'
                                 name='calle'
                                 onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}

                              />
                        }
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Nro:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Nro de calle'
                           name='nro'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Barrio:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese barrio del tutor'
                           name='barrio'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>  
            </Row>
         </Container>
         <Container
            className={'mt-2 border border-success p-4 mb-4'}
         >
            <Row
            >         
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Nombre tutor:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese nombre de tutor'
                           name='nombreTutor2'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Apellido tutor:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese apellido de tutor'
                           name='apellidoTutor2'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Relacion tutor:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese relacion de tutor'
                           name='relacionTutor2'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           DNI tutor:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese DNI de tutor'
                           name='dniTutor2'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
            </Row>
            <Row
               className={'mt-2'}
            >
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Tel Fijo:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese Tel Fijo'
                           name='telFijo2'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>  
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Tel Celular:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese Tel celular'
                           name='telCeluar2'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
            </Row>
            <Row
               className={'mt-2'}
            >
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Provincia:
                        </Label>
                        <Select
                           value={dataAlumno.provinciaTutor}
                           onChange={(value) => {
                              setDataAlumno({...dataAlumno,provincia2:value.target.value})
                              getDataArg(`municipios?provincia=${value.target.value}&max=100&campos=nombre`).then((res) => 
                                 {
                                    res.provincias.data.municipios.forEach(element => arrayOfMunicipiosTutor2.push(element.nombre))
                                    setDataGeoRef({...dataGeoRef,municipiosTutor2:arrayOfMunicipiosTutor2})
                                 }
                              )

                           }}
                        >
                           <option>     
                              Provincia
                           </option>
                           {dataGeoRef.arrayOfProvinciasArg.sort().map((element) => 
                           <option
                              key={element}
                           >
                              {element}
                           </option>
                           )
                           }                              

                        </Select>
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Localidad:
                        </Label>
                        <Select
                           value={dataAlumno.municipiosTutor}
                           onChange={(value)=>{
                              setDataAlumno({...dataAlumno,localidad2:value.target.value})
                              getDataArg(`calles?provincia=${dataAlumno.provincia2}&localidad_censal=${value.target.value}&max=1000&campos=nombre`).then((res)=>
                                 {
                                    res.provincias.data.calles.forEach(element => arrayOfCallesTutor2.push(element.nombre))
                                    setDataGeoRef({...dataGeoRef,calleTutor2:arrayOfCallesTutor2})
                                 }
                              )
                           }
                           } 
                        > 
                           <option> 
                              Municipio
                           </option>
                           {
                              dataGeoRef.municipiosTutor2.sort().map((element,index) => 
                                 <option
                                    key={element}
                                 >
                                    {element}                            
                                 </option>
                              ) 
                           }
                        </Select>
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Calle:
                        </Label>
                        {
                           dataGeoRef.calleTutor2.length > 0 ?
                              <Select
                                 value={dataAlumno.calle2}
                                 onChange={(value)=>{
                                    setDataAlumno({...dataAlumno,calle2:value.target.value})
                                 }
                                 } 
                              > 
                                 <option> 
                                    Calle
                                 </option>
                                 {
                                    dataGeoRef.calleTutor2.sort().map((element,index) => 
                                       <option
                                          key={index}
                                       >
                                          {element}                            
                                       </option>
                                    ) 
                                 }
                              </Select>
                              :
                              <Control
                                 type='text'
                                 placeholder='Calle'
                                 name='nro2'
                                 onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.vale})}
                              />
                        }

                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Nro:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Nro de calle'
                           name='nro2'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>
               <Col>
                  <Form>
                     <Group>
                        <Label>
                           Barrio:
                        </Label>
                        <Control
                           type='text'
                           placeholder='Ingrese barrio del tutor'
                           name='barrio2'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Group>
                  </Form>     
               </Col>  
            </Row>
         </Container>
      </>
   )
}

export default NuevoIngresoForm
