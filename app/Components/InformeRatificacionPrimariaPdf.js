import {
   PDFViewer,
   Text,
   Page,
   Document,
   View,
   StyleSheet
} from '@react-pdf/renderer'

import {
   splitDate,
   ageCalculate
} from './Logic/dateHandler.js'


const styles = StyleSheet.create ({
   container:{
      display:'flex',
      height:'50vh',
      flexDirection:'column',
   },
   body: {
      border:1,
      margin:'auto',
      marginTop:12,
      height: '47vh',
      width:'95vw',
      marginBottom:0,
   },
   header:{
      height:'3vh',
      width:'95vw',
      border: 1,
   },
   contentBody:{
      height:'47vh',
      width:'95vw',
      flexDirection:'row',
      justifyContent:'space-between',
      textAlign:'center',
      flexWrap:'wrap',
   },
   marginTop:{
      flexDirection:'row',
      justifyContent:'space-between',
      textAlign:'center',
      flexWrap:'wrap',
   },
   marginTop2:{
      flexDirection:'column',
      justifyContent:'flex-start',
      textAlign:'left',
   },
   headerText1:{
      fontSize:13,
      margin:'auto',
   },
   headertText2:{
      fontSize:10,
      margin:'auto',
   },
   contentBodyText1:{
      margin:1,
      fontSize:11,
      borderBottom:1,
      borderBottomStyle:'dotted',

   },
   contentBodyText2:{
      margin:1,
      fontSize:9,
   },
   footer:{
      alignSelf:'auto',
      backgroundColor:'lightgray',
      height:'4vh',
      textAlign:'center',
   }
})

const Pdf = ({
   datosAlumno,
   selectedItems,
   filtredDatosAlumnoStage1,
   setIsRender,
}) => (

   <PDFViewer 
      style={{height:'90vh',width:'90vw'}}
   >
      <Document
         onRender={()=> setIsRender(false)}
      >
         <Page 
            size={'LEGAL'}
         >
            {filtredDatosAlumnoStage1.map((dato) => 
            <View 
               key={dato.nDniAlumno} 
               style={styles.container}
            >
               <View 
                  style={styles.body}
               >
                  <View 
                     style={styles.header}
                  >
                     <Text 
                        style={styles.headerText1}
                     >
                        RATIFICACIÓN INSCRIPCÍON PARA CICLO LECTIVO 2022
                     </Text>
                     <Text 
                        style={styles.headertText2}
                     >
                        ESCUELA PÚBLICA AUTOGESTIONADA Nº 9 "DR. HORACIO de la MOTA"
                     </Text>
                  </View>
                  <View 
                     style={styles.contentBody}
                  >
                     <Text 
                        style={[styles.contentBodyText1,{width:'30vw'}]}
                     >
                        Apellido/s
                     </Text>
                     <Text 
                        style={[styles.contentBodyText1,{width:'30vw'}]}
                     >
                        Nombre/s
                     </Text>
                     <Text 
                        style={[styles.contentBodyText1,{width:'30vw'}]}
                     >
                        Legajo Nº
                     </Text>
                     <Text 
                        style={[styles.contentBodyText1,{width:'30vw'}]}
                     >
                        {
                           selectedItems[0] === 'apellido' ? 
                              dato.apellido 
                              : 
                              ''
                        }
                     </Text>
                     <Text 
                        style={[styles.contentBodyText1,{width:'30vw'}]}
                     >
                        {
                           selectedItems[1] === 'nombre' ? 
                              dato.nombre 
                              : 
                              ''
                        }
                     </Text>
                     <Text 
                        style={[styles.contentBodyText1,{width:'30vw'}]}
                     >
                        {
                           selectedItems[2] === 'nroLegajo' ? 
                              dato.nroLegajo 
                              : 
                              ''
                        }
                     </Text>
                     <View 
                        style={styles.marginTop}
                     >
                        <Text 
                           style={[styles.contentBodyText1,{width:'10vw'}]}
                        >
                           Grado:
                        </Text>
                        <Text 
                           style={[styles.contentBodyText1,{width:'10vw'}]}
                        >
                           {
                              selectedItems[3] === 'grado' ? 
                                 dato.grado 
                                 : 
                                 ''
                           }
                        </Text>
                        <Text 
                           style={[styles.contentBodyText1,{width:'10vw'}]}
                        >
                           División:
                        </Text>
                        <Text 
                           style={[styles.contentBodyText1,{width:'10vw'}]}
                        >
                           {
                              selectedItems[4] === 'division' ? 
                                 dato.division 
                                 : 
                                 ''
                           }
                        </Text>
                        <Text 
                           style={[styles.contentBodyText1,{width:'20vw'}]}
                        >
                           Agrupamiento:
                        </Text>
                        <Text 
                           style={[styles.contentBodyText1,{width:'20vw'}]}
                        >
                           {
                              selectedItems[5] === 'denominacion' ? 
                                 dato.denominacion 
                                 : 
                                 ''
                           }
                        </Text>
                        <View 
                           style={styles.marginTop}
                        >
                           <Text 
                              style={[styles.contentBodyText1,{width:'15vw'}]}
                           >
                              Nacido en:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'15vw'}]}
                           >
                              {
                                 selectedItems[6] === 'lugarNacimiento' ? 
                                    dato.lugarNacimiento 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'15vw'}]}
                           >
                              Departamento:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'15vw'}]}
                           >
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'15vw'}]}
                           >
                              Provincia:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'15vw'}]}
                           >
                              {
                                 selectedItems[7] === 'provincia' ? 
                                    dato.provincia 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'11vw'}]}
                           >
                              El día:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'11vw'}]}
                           >
                              {
                                 selectedItems[8] === 'fechaNacimiento' ? 
                                    splitDate(dato.fechaNacimiento,0) 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'11vw'}]}
                           >
                              Mes:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'11vw'}]}
                           >
                              {
                                 selectedItems[8] === 'fechaNacimiento' ? 
                                    splitDate(dato.fechaNacimiento,1) 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'11vw'}]}
                           >
                              Año:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'11vw'}]}
                           >
                              {
                                 selectedItems[8] === 'fechaNacimiento' ? 
                                    splitDate(dato.fechaNacimiento,2) 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'11vw'}]}
                           >
                              Edad:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'11vw'}]}
                           >
                              {
                                 selectedItems[8] === 'fechaNacimiento' ? 
                                    ageCalculate(splitDate(dato.fechaNacimiento,3)) 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'15vw'}]}
                           >
                              Direccion: Calle
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'55vw'}]}
                           >
                              {
                                 selectedItems[9] === 'calle' ? 
                                    dato.calle 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'10vw'}]}
                           >
                              Nº:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'10vw'}]}
                           >
                              {
                                 selectedItems[10] === 'nro' ? 
                                    dato.nro 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'10vw'}]}
                           >
                              Barrio:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'40vw'}]}
                           >
                              {
                                 selectedItems[11] === 'barrio' ? 
                                    dato.barrio 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'10vw'}]}
                           >
                              Manzana:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'10vw'}]}
                           >
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'10vw'}]}
                           >
                              Casa Nº:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'10vw'}]}
                           >
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'9vw'}]}
                           >
                              Localidad
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'15vw',fontSize:9}]}
                           >
                              {
                                 selectedItems[14] === 'localidad' ? 
                                    dato.localidad 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'13vw'}]}
                           >
                              Teléfonos: Fijo:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'20vw'}]}
                           >
                              {
                                 selectedItems[15] === 'telFijo' ? 
                                    dato.telFijo 
                                    : 
                                    ''
                              }
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'8vw'}]}
                           >
                              Celular:
                           </Text>
                           <Text 
                              style={[styles.contentBodyText1,{width:'25vw'}]}
                           >
                              {
                                 selectedItems[16] === 'telCelular' ? 
                                    dato.telCelular 
                                    : 
                                    ''
                              }
                           </Text>
                           <View 
                              style={[styles.marginTop]}
                           >
                              <Text 
                                 style={[styles.contentBodyText1,{width:'25vw'}]}
                              >
                                 Nombre y Apellido del Tutor:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'65vw'}]}
                              >
                                 {
                                    selectedItems[17] === 'nombreTutor' ? 
                                       `${dato.nombreTutor} ${dato.apellidoTutor}` 
                                       : 
                                       ''
                                 }
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'25vw'}]}
                              >
                                 DNI:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'65vw'}]}
                              >{
                                 selectedItems[19] === 'dniTutor' ? 
                                    dato.dniTutor 
                                    : 
                                    ''
                                 }
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'25vw'}]}
                              >
                                 Relación de Parentesco:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'65vw'}]}
                              >
                                 {
                                    selectedItems[20] === 'realacionTutor' ? 
                                       dato.realacionTutor 
                                       : 
                                       ''
                                 }
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'25vw'}]}
                              >
                                 Tel:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'20vw',textAlign:'left'}]}
                              >
                                 Fijo:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'45vw',textAlign:'left'}]}
                              >
                                 Celular:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'25vw',paddingTop:12}]}
                              >
                                 Firma:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'65vw',paddingTop:12}]}
                              >
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'25vw',marginTop:10}]}
                              >
                                 Nombre y Apellido del Tutor:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'65vw',marginTop:10}]}
                              >
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'25vw'}]}
                              >
                                 DNI:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'65vw'}]}
                              >
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'25vw'}]}
                              >
                                 Relación de Parentesco:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'65vw'}]}
                              >
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'25vw'}]}
                              >
                                 Tel:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'20vw',textAlign:'left'}]}
                              >
                                 Fijo:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'45vw',textAlign:'left'}]}
                              >
                                 Celular:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'25vw',paddingTop:12}]}
                              >
                                 Firma:
                              </Text>
                              <Text 
                                 style={[styles.contentBodyText1,{width:'65vw',paddingTop:12}]}
                              >
                              </Text>
                              <View 
                                 style={styles.marginTop2}
                              >
                                 <Text 
                                    style={[styles.contentBodyText2,{textDecoration:'underline',fontWeight:700}]}
                                 >
                                    Adjuntar
                                 </Text>
                                 <Text 
                                    style={styles.contentBodyText2}
                                 >
                                    Fotocopia de Libreta Salud con Apto Físico con control médico acorde a la edad.
                                 </Text>
                                 <Text 
                                    style={styles.contentBodyText2}
                                 >
                                    Fotocopia de Control Bucodental (en el caso de que figure en el control médico no es necesario el certificado)
                                 </Text>
                                 <Text 
                                    style={styles.contentBodyText2}
                                 >
                                    Fotocopia de Vacunas Completas
                                 </Text>
                                 <Text 
                                    style={styles.contentBodyText2}
                                 >
                                    Fotocopia de DNI actualizado del Alumno y Tutor
                                 </Text>
                                 <Text 
                                    style={[styles.contentBodyText2,{textDecoration:'underline',fontWeight:700}]}
                                 >
                                    (Traer todo en un folio)
                                 </Text>
                                 <Text 
                                    style={[styles.contentBodyText2,{textAlign:'justify'}]}
                                 >
                                    En mi carácter de Tutor del Alumno: 
                                    {
                                       selectedItems[0] === 'apellido' && selectedItems[1] === 'nombre' ? 
                                          `${dato.nombre} ${dato.apellido}` 
                                          : 
                                          '....................................................................................'
                                    }
                                    , DNI: 
                                    {
                                       selectedItems[21] === 'nDniAlumno' ? 
                                          dato.nDniAlumno 
                                          : 
                                          '...................................................................................................' 
                                    }
                                    , me comprometo a favorecer el cumplimiento del "Acuerdo Institucional de Convivenvia" del Establecimiento.
                                 </Text>
                                 <View 
                                    style={styles.footer}
                                 >
                                    <Text 
                                       style={[styles.contentBodyText2,{paddingTop:20}]}
                                    >
                                       Firma:.......................................... 
                                       Aclaración:............................................................................................. 
                                       DNI:..................................................
                                    </Text>
                                 </View>
                              </View>
                           </View>
                        </View>
                     </View>
                  </View>
               </View>
            </View>
            )}
         </Page>
      </Document>
   </PDFViewer>
)
export default Pdf
