import {
   useRef,
   useState,
} from 'react'

import {
   Col,
   Row,
   Form,
   Button,
   OverlayTrigger,
} from 'react-bootstrap'

import {
   dniCheck,
   celularCheck,
   telFijoCheck
} from '../logic/datosGeneralesLogic'

import {
   yearsDatePicker,
   monthsDatePicker
} from '../logic/customHeaderDatePicker'

import {
   handleClick,
   handleCallBack
} from '../logic/nuevoIngresoLogic'

import 
DatePicker,
{
   registerLocale,
} from 'react-datepicker'

import {
   getFetchMunicipiosArg,
   getFetchCallesArg,
} from '../../hooks/getFetch'

import 
   ModalAlert
 from '../modals/ModalAlert'

import {useSelector} from 'react-redux'

import {
   DniPopOver,
   TelFijoPopOver,
   TelCelularPopOver
} from '../popsOvers/PopOver'

import es from 'date-fns/locale/es'

import {
   toFirstUpperCase,
   toOwnName
} from '../logic/matriculaLogic'

registerLocale('es',es)

const NuevoIngresoForm = () => { 

   const handleSubmit = async (event) => {

      const form = event.currentTarget

      event.preventDefault()

      event.stopPropagation()

      if(form.checkValidity() === true){

         const res = await handleClick(
            context.token,
            dataAlumno
         )

         if(res.status === 200){
            setMessage('Alumno añadido con exito')
            setStateShow(true)
            setDataAlumno(initialStateDataAlumno)
            setIsInvalidDniAlumno(true)
            setIsInvalidDniTutor1(true)
            setIsInvalidDniTutor2(true)
            setIsInvalidCelularTutor1(true)
            setIsInvalidCelularTutor2(true)
            setIsInvalidTelFijoTutor1(true)
            setIsInvalidTelFijoTutor2(true)
         }
      }else{
         setMessage('Hay campos sin definir, por favor verifique la informacion.')
         setStateShow(true)
      }
   }

   let arrayOfProvincias = []

   const initialStateDataAlumno = {
      apellido:'',
      apellidoTutor:'',
      apellidoTutor2:'',
      barrio:'',
      barrio2:'',
      calle:'',
      calle2:'',
      denominacion:'Denominacion',
      division:'Division',
      dniTutor:'',
      dniTutor2:'',
      email:'',
      emailTutor:'',
      emailTutor2:'',
      fechaNacimiento:'',
      nDniAlumno:'',
      grado:'Grado/Año',
      ingreso:'',
      localidad:'Municipio',
      localidad2:'Municipio',
      lugarNacmiento:'',
      nacionalidad:'Nacionalidad',
      nivel:'Nivel',
      nombre:'',
      nombreTutor:'',
      nombreTutor2:'',
      nro:'',
      nro2:'',
      profesionTutor:'',
      profesionTutor2:'',
      provincia:'Provincia',
      provincia2:'Provincia',
      provinciaNacimiento:'',
      relacionTutor:'',
      relacionTutor2:'',
      sexo:'Sexo',
      telCelular:'',
      telCelular2:'',
      telFijo:'',
      telFijo2:'',
      lugarNacimiento:'Lugar nacimiento',
   }

   const {Label,Control,Select} = Form

   const nuevoIngresoRef = useRef([])

   const context = useSelector(state => state.authReducer)
   const hardCodeData = useSelector(state => state.hardCodeDataReducer.hardCodeData)

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
      arrayOfProvinciasArg:[
         "Buenos Aires",
         "Ciudad Autónoma de Buenos Aires",
         "Catamarca",
         "Chaco",
         "Chubut",
         "Córdoba",
         "Corrientes",
         "Entre Ríos",
         "Formosa",
         "Jujuy",
         "La Pampa",
         "La Rioja",
         "Mendoza",
         "Misiones",
         "Neuquén",
         "Río Negro",
         "Salta",
         "San Luis",
         "Santa Cruz",
         "Santa Fe",
         "Santiago del Estero",
         "Tierra del Fuego",
         "Tucumán"
      ],
      municipiosAlumno:[],
      provinciasAlumno:[],
      municipiosTutor:[],
      provinciasTutor:[],
      calleTutor:[],
      municipiosTutor2:[],
      provinciasTutor2:[],
      calleTutor2:[]
   })

   return ( 
      <>
         <ModalAlert
            stateShow={stateShow}  
            setStateShow={setStateShow}
            message={message}
            type='AcceptOnly'
            callBack={handleCallBack}
         />
         <Form 
            onSubmit={handleSubmit} 
            noValidate 
            autoComplete='new-password' 
            className='border border-success m-2 p-4'
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
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})}
                        />
                  </Col>
                  <Col>
                     <Label>
                        Apellido:
                     </Label>
                     <Control
                        value={dataAlumno.apellido}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese Apellido de alumno'
                        name='apellido'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})}
                        />
                  </Col>
                  <Col>
                     <Label>
                        Sexo:
                     </Label>
                     <Select
                        value={dataAlumno.sexo}
                        autoComplete='new-password'
                        required
                        onChange={(value)=> setDataAlumno({...dataAlumno,sexo:value.target.value})}
                     >
                        <option>
                           Sexo
                        </option>
                        {hardCodeData.sexo.map((element)=> 
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
                           value={dataAlumno.nDniAlumno}
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
                        value={dataAlumno.fechaNacimiento}
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
                        {hardCodeData.nivel.map((element)=> 
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
                        {hardCodeData.grado.map((element)=> 
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
                        {hardCodeData.division.map((element)=> 
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
                        {hardCodeData.denominacion.map((element)=> 
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
                        value={dataAlumno.ingreso}
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
                        {hardCodeData.paises.map((element)=> 
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
                              getFetchMunicipiosArg(context.token,value.target.value).then( res => setDataGeoRef({...dataGeoRef,municipiosAlumno: res.data}) )
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
                           value={dataAlumno.provinciaNacimiento}
                           autoComplete='new-password'
                           type='text'
                           required
                           placeholder='Ingrese provincia de nacimiento de alumno'
                           onChange={(element)=> setDataAlumno({...dataAlumno,provinciaNacimiento:toOwnName(element.target.value)})}
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
                                 key={element.id}
                              >
                                 {element.nombre}
                              </option>
                           )
                        }                              
                        </Select>
                        :
                        <Control
                           value={dataAlumno.lugarNacimiento}
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese lugar de nacimiento de alumno'
                           onChange={((element) => setDataAlumno({...dataAlumno,lugarNacimiento:toOwnName(element.target.value)}))}
                           />
                  }
                  </Col>
               </Row>
                  <Row
                     className='mt-2'
                  >
                     <Col>
                        <Label>
                           Email alumno:
                        </Label>
                        <Control
                           value={dataAlumno.email}
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese email alumno'
                           name='email'
                           onChange={(element) => setDataAlumno({...dataAlumno,[element.target.name]:element.target.value.toLowerCase()})}
                           />
                     </Col>
                  </Row>
               <Row
                  className='mt-2'
               >         
                  <Col>
                     <Label>
                        Nombre tutor:
                     </Label>
                     <Control
                        value={dataAlumno.nombreTutor}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese nombre de tutor'
                        name='nombreTutor'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})}
                        />
                  </Col>
                  <Col>
                     <Label>
                        Apellido tutor:
                     </Label>
                     <Control
                        value={dataAlumno.apellidoTutor}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese apellido de tutor'
                        name='apellidoTutor'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})}
                        />
                  </Col>
                  <Col>
                     <Label>
                        Relacion tutor:
                     </Label>
                     <Control
                        value={dataAlumno.relacionTutor}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese relacion de tutor'
                        name='relacionTutor'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toFirstUpperCase(element.target.value)})}
                        />
                  </Col>
                  <Col>
                     <Label>
                        DNI tutor:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={DniPopOver} >
                        <Control
                           value={dataAlumno.dniTutor}
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
                        value={dataAlumno.profesionTutor}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese Profesion'
                        name='profesionTutor'
                        onChange={(element) => {
                           setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})
                        }}
                        />
                  </Col>
                  <Col>
                     <Label>
                        Tel Fijo:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={TelFijoPopOver}>
                        <Control
                           value={dataAlumno.telFijo}
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
                           value={dataAlumno.telCelular}
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese Tel celular'
                           name='telCelular'
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
                        value={dataAlumno.provincia}
                        onChange={(value) => {
                           setDataAlumno({...dataAlumno,provincia:value.target.value})
                           getFetchMunicipiosArg(context.token,value.target.value).then( res => setDataGeoRef({...dataGeoRef,municipiosTutor:res.data}) )

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
                        value={dataAlumno.localidad}
                        onChange={(value)=>{
                           setDataAlumno({...dataAlumno,localidad:value.target.value})
                           getFetchCallesArg(context.token,value.target.value).then( res => setDataGeoRef({...dataGeoRef,calleTutor:res.data}) )
                        }
                     } 
                     > 
                        <option> 
                           Municipio
                        </option>
                        {
                        dataGeoRef.municipiosTutor.sort().map((element,index) => 
                           <option
                              key={element.id}
                           >
                              {element.nombre}                            
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
                           value={dataAlumno.calleTutor}
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
                                 key={element.id}
                              >
                                 {toOwnName(element.nombre)}                            
                              </option>
                           ) 
                        }
                        </Select>
                        :
                        <Control
                           value={dataAlumno.calle}
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Calle'
                           name='calle'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})}
                           />
                  }

                  </Col>
                  <Col>
                     <Label>
                        Nro:
                     </Label>
                     <Control
                        value={dataAlumno.nro}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Nro de calle'
                        name='nro'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:element.target.value})}
                        />
                  </Col>
                  <Col
               >
                     <Label>
                        Barrio:
                     </Label>
                     <Control
                        value={dataAlumno.barrio}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese barrio del tutor'
                        name='barrio'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})}
                        />
                  </Col>  
                  </Row>
                  <Row
                     className='mt-2'
                  >
                     <Col
                  >
                        <Label>
                           Email tutor:
                        </Label>
                        <Control
                           value={dataAlumno.emailTutor}
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese email tutor'
                           name='emailTutor'
                           onChange={(element) => setDataAlumno({...dataAlumno,[element.target.name]:element.target.value.toLowerCase()})}
                           />
                     </Col>      
                  </Row>
               <Row
                  className='mt-2'
               >         
                  <Col>
                     <Label>
                        Nombre tutor:
                     </Label>
                     <Control
                        value={dataAlumno.nombreTutor2}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese nombre de tutor'
                        name='nombreTutor2'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})}
                        />
                  </Col>
                  <Col>
                     <Label>
                        Apellido tutor:
                     </Label>
                     <Control
                        value={dataAlumno.apellidoTutor2}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese apellido de tutor'
                        name='apellidoTutor2'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})}
                        />
                  </Col>
                  <Col>
                     <Label>
                        Relacion tutor:
                     </Label>
                     <Control
                        value={dataAlumno.relacionTutor2}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese relacion de tutor'
                        name='relacionTutor2'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toFirstUpperCase(element.target.value)})}
                        />
                  </Col>
                  <Col>
                     <Label>
                        DNI tutor:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={DniPopOver}>
                        <Control
                           value={dataAlumno.dniTutor2}
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
                        value={dataAlumno.profesionTutor2}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese Profesion'
                        name='profesionTutor2'
                        onChange={(element) => {
                           setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})
                        }}
                        />
                  </Col>
                  <Col>
                     <Label>
                        Tel Fijo:
                     </Label>
                     <OverlayTrigger trigger='focus' placement='top' overlay={TelFijoPopOver}>
                        <Control
                           value={dataAlumno.telFijo2}
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
                           value={dataAlumno.telCelular2}
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese Tel celular'
                           name='telCelular2'
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
                        value={dataAlumno.provincia2}
                        onChange={(value) => {
                           setDataAlumno({...dataAlumno,provincia2:value.target.value})
                           getFetchMunicipiosArg(context.token,value.target.value).then( res => setDataGeoRef({...dataGeoRef,municipiosTutor2:res.data}) )
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
                        value={dataAlumno.localidad2}
                        onChange={(value)=>{
                           setDataAlumno({...dataAlumno,localidad2:value.target.value})
                           getFetchCallesArg(context.token,value.target.value).then(res => setDataGeoRef({...dataGeoRef,calleTutor2:res.data}))
                        }
                     } 
                     > 
                        <option> 
                           Municipio
                        </option>
                        {
                        dataGeoRef.municipiosTutor2.sort().map((element,index) => 
                           <option
                              key={element.id}
                           >
                              {element.nombre}                            
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
                                 key={element.id}
                              >
                                 {toOwnName(element.nombre)}                            
                              </option>
                           ) 
                        }
                        </Select>
                        :
                        <Control
                           value={dataAlumno.calle2}
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Calle'
                           name='calle2'
                           onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})}
                           />
                  }
                  </Col>
                  <Col>
                     <Label>
                        Nro:
                     </Label>
                     <Control
                        value={dataAlumno.nro2}
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
                        value={dataAlumno.barrio2}
                        autoComplete='new-password'
                        required
                        type='text'
                        placeholder='Ingrese barrio del tutor'
                        name='barrio2'
                        onChange={(element)=> setDataAlumno({...dataAlumno,[element.target.name]:toOwnName(element.target.value)})}
                        />
                  </Col>  
               </Row>
                  <Row
                     className='mt-2'
                  >
                     <Col>
                        <Label>
                           Email tutor:
                        </Label>
                        <Control
                           value={dataAlumno.emailTutor2}
                           autoComplete='new-password'
                           required
                           type='text'
                           placeholder='Ingrese email tutor'
                           name='emailTutor2'
                           onChange={(element) => setDataAlumno({...dataAlumno,[element.target.name]:element.target.value.toLowerCase()})}
                           />
                     </Col>      
                  </Row>
               <Row
                     className='mt-4'
               >
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
         </Form>
         </>
   )
}

export default NuevoIngresoForm
