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
   OverlayTrigger,
   Popover
} from 'react-bootstrap'

import {dniCheck,celularCheck,telFijoCheck} from './Logic/datosGeneralesLogic'
import {yearsDatePicker,monthsDatePicker} from './Logic/customHeaderDatePicker'
import {getDataArg,handleClick} from './Logic/nuevoIngresoLogic'
import DatePicker,{registerLocale,setDefaultLocale} from 'react-datepicker'
import useAuth from '../Context/Store/useAuth'
import {DniPopOver,TelFijoPopOver,TelCelularPopOver} from './PopsOvers/PopOver'
import { findLastFile } from './Logic/findLastFile'
import ModalAlert from './ModalAlert'

import es from 'date-fns/locale/es'

registerLocale('es',es)

const NuevoIngresoForm = () => { 

   const handleSubmit = (event) => {
      const form = event.currentTarget
      event.preventDefault()
      event.stopPropagation()
      if(form.checkValidity() === true){
         handleClick(context.stateUser.token,dataAlumno)
         setMessage('Alumno añadido con exito.Recuerde que por cualquier modificacion sobre el legajo o para cambiar el estado de las vacunas debe dirigirse a matricula general y luego buscar el alumno. ')
         setStateShow(true)
         setDataAlumno({})
      }else{
         setMessage('Hay campos sin definir, por favor verifique la informacion.')
         setStateShow(true)
      }
   }

   const handleCallBack = (option) => {
   }

   const date = new Date()
   let arrayOfProvincias = []
   let arrayOfMunicipiosAlumno = []
   let arrayOfMunicipiosTutor = []
   let arrayOfCallesTutor = []
   let arrayOfMunicipiosTutor2 = []
   let arrayOfCallesTutor2 = []

   const initialStateDataAlumno = {
      nombre:'',
      apellido:'',
   }

   const {Group,Label,Control,Text,Select} = Form

   const nuevoIngresoRef = useRef([])

   const context = useAuth()

   const [isInvalidDniAlumno,setIsInvalidDniAlumno] = useState(true)
   const [isValidDniAlumno,setIsValidDniAlumno] = useState(false)

   const [isInvalidDniTutor1, setIsInvalidDniTutor1] = useState(true)
   const [ isValidDniTutor1,setIsValidDniTutor1 ] = useState(false);

   const [isInvalidDniTutor2, setIsInvalidDniTutor2] = useState(true)
   const [ isValidDniTutor2,setIsValidDniTutor2 ] = useState(false);

   const [ isValidCelularTutor1,setIsValidCelularTutor1 ] = useState(false);
   const [ isInvalidCelularTutor1,setIsInvalidCelularTutor1 ] = useState(true);

   const [ isValidCelularTutor2,setIsValidCelularTutor2 ] = useState(false);
   const [ isInvalidCelularTutor2,setIsInvalidCelularTutor2 ] = useState(true);

   const [ isValidTelFijoTutor1,setIsValidTelFijoTutor1 ] = useState(false); 
   const [ isInvalidTelFijoTutor1,setIsInvalidTelFijoTutor1 ] = useState(true);

   const [ isValidTelFijoTutor2,setIsValidTelFijoTutor2 ] = useState(false); 
   const [ isInvalidTelFijoTutor2,setIsInvalidTelFijoTutor2 ] = useState(true);

   const [year,setYear] = useState('2004')
   const [month,setMoth] = useState('0')
   const [fechaNacimiento,setFechaNacimiento] = useState('')

   const [ fechaIngreso,setFechaIngreso ] = useState('');

   const [ stateShow,setStateShow ] = useState(false);
   const [ message,setMessage ] = useState('');

   const [dataAlumno,setDataAlumno] = useState(initialStateDataAlumno)
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
         <ModalAlert
            stateShow={stateShow}
            setStateShow={setStateShow}
            message={message}
            callBack={handleCallBack}
         />
         <Form onSubmit={handleSubmit} noValidate autoComplete='new-password' >
            <Container
               fluid
               className={'border border-success p-4'}
            >
               <Row>
                  <Col>
                     <Label>
                        Nombre:
                     </Label>
                     <Control
                        value={dataAlumno.nombre}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese nombre de alumno'
                        name='nombre'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>
                  <Col>
                     <Label>
                        Apellido:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese Apellido de alumno'
                        name='apellido'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>
                  <Col>
                     <Label>
                        Sexo:
                     </Label>
                     <Select
                        autoComplete='new-password'
                        required
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
                  </Col>
                  <Col>
                     <Label>
                        Documento:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={DniPopOver}>
                        <Control
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese Documento'
                           isInvalid={isInvalidDniAlumno}
                           isValid={isValidDniAlumno}
                           ref={(element) => nuevoIngresoRef.current[2] = element}
                           onChange={(element) => {
                              dniCheck(nuevoIngresoRef,2,setIsValidDniAlumno,setIsInvalidDniAlumno,false)
                              setDataAlumno({...dataAlumno,nDniAlumno:element.target.value})
                           }
                           }
                        />      
                     </OverlayTrigger>
                  </Col>
                  <Col>
                     <Label>
                        Fecha de Nacimiento:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        selected={fechaNacimiento}
                        type='text'
                        locale='es'
                        placeholder='Seleccione fecha de nacimiento'
                        as={DatePicker}
                        onChange={(value)=> {
                           setFechaNacimiento(new Date(year,month,value.getDate().toString()))
                           setDataAlumno({...dataAlumno,fechaNacimiento:`${value.getDate().toString()}/${month + 1}/${year}`})
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
                                 onChange={(value) => setMoth((value.target.selectedIndex - 1))}
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
                  </Col>
               </Row>
               <Row
                  className='mt-2'
               >
                  <Col>
                     <Label> 
                        Nivel:
                     </Label>
                     <Select
                        autoComplete='new-password'
                        required
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
                  </Col>
                  <Col>
                     <Label> 
                        Grado/Año:
                     </Label>
                     <Select
                        autoComplete='new-password'
                        required
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
                  </Col>
                  <Col>
                     <Label> 
                        Division:
                     </Label>
                     <Select
                        autoComplete='new-password'
                        required
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
                  </Col>
                  <Col>
                     <Label> 
                        Denominacion:
                     </Label>
                     <Select
                        autoComplete='new-password'
                        required
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
                  </Col>
                  <Col>
                     <Label>  
                        Fecha de ingreso:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        as={DatePicker} 
                        dateFormat='dd/MM/yyyy'
                        selected={fechaIngreso}
                        type='text'
                        locale='es'
                        placeholder='Seleccione fecha de nacimiento'
                        onChange={(date) => {
                           setFechaIngreso(date)
                           setDataAlumno({...dataAlumno,ingreso:date.toLocaleDateString()})
                        }}
                     />
                  </Col>
               </Row>
               <Row
                  className={'mt-2'}
               >
                  <Col>
                     <Label>
                        Nacionalidad:
                     </Label>
                     <Select
                        autoComplete='new-password'
                        required
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
                  </Col>
                  <Col>
                     <Label>
                        Provincia de nacimiento:
                     </Label>
                     {
                        dataAlumno.nacionalidad === 'Argentina' ?
                           <Select
                              autoComplete='new-password'
                              required
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
                              autoComplete='new-password'
                              type='text'
                              required
                              placeholder='Ingrese provincia de nacimiento de alumno'
                           />        
                     }
                  </Col>
                  <Col>
                     <Label>
                        Lugar de nacimiento:
                     </Label>
                     {
                        dataGeoRef.municipiosAlumno.length > 0 ? 
                           <Select
                              autoComplete='new-password'
                              required
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
                              autoComplete='new-password'
                              required
                              type='text'
                              placeholder='Ingrese lugar de nacimiento de alumno'
                              onChange={((value) => setDataAlumno({...dataAlumno,lugarNacimiento:value.target.value}))}
                           />
                     }
                  </Col>
                  <Row
                     className='mt-2'
                  >
                     <Col>
                        <Label>
                           Email alumno:
                        </Label>
                        <Control
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese email alumno'
                           name='email'
                           onChange={(element) => setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Col>
                  </Row>
               </Row>
            </Container>
            <Container
               className={'mt-2 border border-success p-4'}
            >
               <Row
               >         
                  <Col>
                     <Label>
                        Nombre tutor:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese nombre de tutor'
                        name='nombreTutor'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>
                  <Col>
                     <Label>
                        Apellido tutor:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese apellido de tutor'
                        name='apellidoTutor'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>
                  <Col>
                     <Label>
                        Relacion tutor:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese relacion de tutor'
                        name='relacionTutor'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>
                  <Col>
                     <Label>
                        DNI tutor:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={DniPopOver} >
                        <Control
                           required
                           autoComplete='new-password'
                           type='text'
                           isValid={isValidDniTutor1}
                           isInvalid={isInvalidDniTutor1}
                           placeholder='Ingrese DNI de tutor'
                           ref={(element) => nuevoIngresoRef.current[3] = element}
                           name='dniTutor'
                           onChange={(element)=> {
                              dniCheck(nuevoIngresoRef,3,setIsValidDniTutor1,setIsInvalidDniTutor1,true)
                              setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})
                           }}
                        />
                     </OverlayTrigger>
                  </Col>
               </Row>
               <Row
                  className={'mt-2'}
               >
                  <Col>
                     <Label>  
                        Profesion Tutor:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese Profesion'
                        name='profesionTutor'
                        onChange={(element) => {
                           setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})
                        }}
                     />
                  </Col>
                  <Col>
                     <Label>
                        Tel Fijo:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={TelFijoPopOver}>
                        <Control
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese Tel Fijo'
                           name='telFijo'
                           isValid={isValidTelFijoTutor1}
                           isInvalid={isInvalidTelFijoTutor1}
                           onChange={(element)=> {
                              telFijoCheck(element.target.value,setIsValidTelFijoTutor1,setIsInvalidTelFijoTutor1)
                              setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})
                           }}
                        />
                     </OverlayTrigger>
                  </Col>  
                  <Col>
                     <Label>
                        Tel Celular:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={TelCelularPopOver}>
                        <Control
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese Tel celular'
                           name='telCeluar'
                           isValid={isValidCelularTutor1}
                           isInvalid={isInvalidCelularTutor1}
                           onChange={(element)=> {
                              celularCheck(element.target.value,setIsValidCelularTutor1,setIsInvalidCelularTutor1)
                              setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})
                           }}
                        />
                     </OverlayTrigger>
                  </Col>
               </Row>
               <Row
                  className={'mt-2'}
               >
                  <Col>
                     <Label>
                        Provincia:
                     </Label>
                     <Select
                        autoComplete='new-password'
                        required
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
                  </Col>
                  <Col>
                     <Label>
                        Localidad:
                     </Label>
                     <Select
                        autoComplete='new-password'
                        required
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
                  </Col>
                  <Col>
                     <Label>
                        Calle:
                     </Label>
                     {
                        dataGeoRef.calleTutor.length > 0 ?
                           <Select
                              autoComplete='new-password'
                              required
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
                              autoComplete='new-password'
                              required
                              type='text'
                              placeholder='Calle'
                              name='calle'
                              onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}

                           />
                     }
                  </Col>
                  <Col>
                     <Label>
                        Nro:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Nro de calle'
                        name='nro'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>
                  <Col>
                     <Label>
                        Barrio:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese barrio del tutor'
                        name='barrio'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>  
                  <Row
                     className='mt-2'
                  >
                     <Col>
                        <Label>
                           Email tutor:
                        </Label>
                        <Control
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese email tutor'
                           name='emailTutor'
                           onChange={(element) => setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Col>      
                  </Row>

               </Row>
            </Container>
            <Container
               className={'mt-2 border border-success p-4 mb-2'}
            >
               <Row
               >         
                  <Col>
                     <Label>
                        Nombre tutor:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese nombre de tutor'
                        name='nombreTutor2'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>
                  <Col>
                     <Label>
                        Apellido tutor:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese apellido de tutor'
                        name='apellidoTutor2'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>
                  <Col>
                     <Label>
                        Relacion tutor:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese relacion de tutor'
                        name='relacionTutor2'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>
                  <Col>
                     <Label>
                        DNI tutor:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={DniPopOver}>
                        <Control
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese DNI de tutor'
                           name='dniTutor2'
                           isValid={isValidDniTutor2}
                           isInvalid={isInvalidDniTutor2}
                           ref={(element) => nuevoIngresoRef.current[4] = element}
                           onChange={(element)=> {
                              dniCheck(nuevoIngresoRef,4,setIsValidDniTutor2,setIsInvalidDniTutor2,true)
                              setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})
                           }}
                        />
                     </OverlayTrigger>
                  </Col>
               </Row>
               <Row
                  className={'mt-2'}
               >
                  <Col>
                     <Label>  
                        Profesion Tutor:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese Profesion'
                        name='profesionTutor2'
                        onChange={(element) => {
                           setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})
                        }}
                     />
                  </Col>
                  <Col>
                     <Label>
                        Tel Fijo:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={TelFijoPopOver}>
                        <Control
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese Tel Fijo'
                           name='telFijo2'
                           isValid={isValidTelFijoTutor2}
                           isInvalid={isInvalidTelFijoTutor2}
                           onChange={(element)=> {
                              telFijoCheck(element.target.value,setIsValidTelFijoTutor2,setIsInvalidTelFijoTutor2)
                              setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})
                           }}
                        />      
                     </OverlayTrigger>
                  </Col>  
                  <Col>
                     <Label>
                        Tel Celular:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={TelCelularPopOver}>
                        <Control
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese Tel celular'
                           name='telCeluar2'
                           isValid={isValidCelularTutor2}
                           isInvalid={isInvalidCelularTutor2}
                           onChange={(element)=> {
                              celularCheck(element.target.value,setIsValidCelularTutor2,setIsInvalidCelularTutor2) 
                              setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})
                           }}
                        />      
                     </OverlayTrigger>

                  </Col>
               </Row>
               <Row
                  className={'mt-2'}
               >
                  <Col>
                     <Label>
                        Provincia:
                     </Label>
                     <Select
                        autoComplete='new-password'
                        required
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
                  </Col>
                  <Col>
                     <Label>
                        Localidad:
                     </Label>
                     <Select
                        autoComplete='new-password'
                        required
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
                  </Col>
                  <Col>
                     <Label>
                        Calle:
                     </Label>
                     {
                        dataGeoRef.calleTutor2.length > 0 ?
                           <Select
                              autoComplete='new-password'
                              required
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
                              autoComplete='new-password'
                              required
                              type='text'
                              placeholder='Calle'
                              name='nro2'
                              onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.vale})}
                           />
                     }

                  </Col>
                  <Col>
                     <Label>
                        Nro:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Nro de calle'
                        name='nro2'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>
                  <Col>
                     <Label>
                        Barrio:
                     </Label>
                     <Control
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese barrio del tutor'
                        name='barrio2'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                     />
                  </Col>  
                  <Row
                     className='mt-2'
                  >
                     <Col>
                        <Label>
                           Email tutor:
                        </Label>
                        <Control
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese email tutor'
                           name='emailTutor2'
                           onChange={(element) => setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                     </Col>      
                  </Row>
               </Row>
            </Container>
            <Container
               fluid
               className={'border border-success p-2 mb-2'}
            >
               <Row>
                  <Col
                     className={'d-flex justify-content-end'}
                  >
                     <Button
                        size='sm'
                        variant='outline-success'
                        type='submit'
                     >
                        Aceptar
                     </Button>      
                  </Col>
               </Row>              
            </Container>
         </Form>
      </>
   )
}

export default NuevoIngresoForm
