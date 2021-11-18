import {Document,Page,View,Text,StyleSheet,PDFViewer,Font,Image} from '@react-pdf/renderer'

import RobotoRegular from '../Assets/Fonts/Roboto/Roboto-Regular.ttf'
import RobotoBold from '../Assets/Fonts/Roboto/Roboto-Bold.ttf'

import Logo from '../Assets/jpg/LogoEPA.jpg'

Font.register({family: 'Roboto',fonts:[
   {src:RobotoRegular},
   {src:RobotoBold,fontStyle:'bold'}
]})

const styles = StyleSheet.create ({
   container:{
      display:'flex',
      width:'100vw',
      height:'100vh',
      fontFamily:'Roboto'

   } ,
   content:{
      flexDirection:'column',
      width:'95vw',
      height:'95vh',
      margin:'auto',
   },
   header:{
      width:'95vw',
      height:'8vh',
      textAlign:'center',
      fontSize:14,
      flexDirection:'row',
      fontStyle:'bold',
   },
   headerText:{
      marginTop:20,
   },
   headerTextUnderline:{
      marginTop:5,
      textDecoration:'underline',
      fontSize:9,
   },
   princialData:{
      fontSize:13,
      border:'2 solid black',
      width:'95vw',
      height:'6vh',
   },
   principalDataDirection:{
      margin:5,
      flexDirection:'row',
      justifyContent:'space-between',
   },
   secondaryData:{
      marginTop:10,
      fontSize:13,
      width:'95vw',
      height:'17vh',
   },
   secondaryDataDirection:{
      margin:3,
      flexDirection:'row',
      justifyContent:'space-between',
   },
   documentationTextTitle:{
      margintop:20,
      margin:5,
      fontSize:13,
      fontStyle:'bold',
      textAlign:'center'
   },
   documentationText:{
      fontSize:10,
      marginTop:10,
      fontStyle:'bold',
      textAlign:'center'
   },
   tableDirecion:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:5,
   },
   tableText:{
      fontSize:9,
      margin:'auto',
   },
   authorizationText:{
      fontSize:12,
      marginTop:10,
      textAlign:'justify',
      height:'22vh'
   },
   footerDirection:{
      flexDirection:'row',
   },
   footerText:{
      fontSize:10,
   },
   image:{
      marginLeft:200,
      width:60,
      height:60,
   }

})

const InformeRatificacionSecundariaPDf = ({
   datosAlumno,
   selectedItems,
   filtredDatosAlumnoStage1,
   setIsRender,
}) => {

   return (
      <PDFViewer style={{height:'100vh',width:'90vw'}}>
         <Document
            onRender={()=> setIsRender(false)}
         >
            <Page
               size={'LEGAL'}
            >
               {filtredDatosAlumnoStage1.map((dato)=>
               <View 
                  style={styles.container}
                  key={dato._id}
               >
                  <View style={styles.content}>
                     <View style={styles.header}>
                        <View>
                           <Text style={styles.headerText}>
                              INSCRIPCIÓN CICLO LECTIVO 2022
                           </Text>
                           <Text style={styles.headerTextUnderline}>
                              ESCUELA PÚBLICA AUTOGESTIONADA Nº 9 "DR. HORACIO DE LA MOTA"
                           </Text>
                        </View>
                        <View>
                           <Image
                              style={styles.image}
                              src={Logo}
                           />
                        </View>
                     </View>
                     <View style={styles.princialData}>
                        <View style={styles.principalDataDirection}>
                           <Text> 
                              Nombre y Apellido 
                           </Text>
                           <Text>
                              {
                                 selectedItems[1] === 'nombre' ? 
                                    dato.nombre 
                                    : 
                                    '...............................................'
                              } 
                           </Text>
                           <Text>
                              {
                                 selectedItems[0] === 'apellido' ? 
                                    dato.apellido 
                                    : 
                                    '...............................................'
                              } 
                           </Text>
                        </View>
                        <View style={styles.principalDataDirection}>
                           <Text>
                              CUIL:
                           </Text>
                           <Text>
                              {
                                 selectedItems[22] === 'cuil' ? 
                                    dato.cuil 
                                    : 
                                    '.....................'
                              }   
                           </Text>
                           <Text>
                              Leg Nº:
                           </Text>
                           <Text>
                              {
                                 selectedItems[2] === 'nroLegajo' ? 
                                    dato.nroLegajo 
                                    : 
                                    '.....................'
                              }   
                           </Text>
                           <Text>
                              Fecha de Nacimiento:
                           </Text>
                           <Text>
                              {
                                 selectedItems[8] === 'fechaNacimiento' ? 
                                    dato.fechaNacimiento 
                                    : 
                                    '......../......../........'
                              }   
                           </Text>
                        </View>
                     </View>
                     <View style={styles.secondaryData}>
                        <View style={styles.secondaryDataDirection}>
                           <Text>
                              Nacido en:
                           </Text>
                           <Text>
                              {
                                 selectedItems[6] === 'lugarNacimiento' ? 
                                    dato.lugarNacimiento 
                                    : 
                                    '................................'
                              }   
                           </Text>
                           <Text>
                              Departamento:
                           </Text>
                           <Text>
                              .....................................
                           </Text>
                           <Text>
                              Provincia:
                           </Text>
                           <Text>
                              {
                                 selectedItems[7] === 'provincia' ? 
                                    dato.provincia 
                                    : 
                                    '........................'
                              }   
                           </Text>
                        </View>
                        <View style={styles.secondaryDataDirection}>
                           <Text>
                              Dirección: Calle
                           </Text>
                           <Text>
                              {
                                 selectedItems[9] === 'calle' ? 
                                    dato.calle 
                                    : 
                                    '.....................'
                              }   
                           </Text>
                           <Text>
                              Nº:
                           </Text>
                           <Text>
                              {
                                 selectedItems[10] === 'nro' ? 
                                    dato.nro 
                                    : 
                                    '..........'
                              }
                           </Text>
                           <Text>
                              Barrio:
                           </Text>
                           <Text>
                              {
                                 selectedItems[11] === 'barrio' ? 
                                    dato.barrio 
                                    : 
                                    '........................'
                              }   
                           </Text>
                           <Text>
                              Manzana:
                           </Text>
                           <Text>
                              {
                                 selectedItems[12] === 'manzana' ? 
                                    dato.manzana 
                                    : 
                                    '..........'
                              }
                           </Text>
                           <Text>
                              Casa Nº:
                           </Text>
                           <Text>
                              {
                                 selectedItems[13] === 'casaN' ? 
                                    dato.casaN 
                                    : 
                                    '..........'
                              }   
                           </Text>
                        </View>
                        <View style={styles.secondaryDataDirection}>
                           <Text>
                              Localidad: 
                           </Text>
                           <Text>
                              {
                                 selectedItems[14] === 'localidad' ? 
                                    dato.localidad 
                                    : 
                                    '.................................'
                              }   
                           </Text>
                           <Text>
                              Teléfonos:  Fijo
                           </Text>
                           <Text>
                              {
                                 selectedItems[15] === 'telFijo' ? 
                                    dato.telFijo 
                                    : 
                                    '........................'
                              }
                           </Text>
                           <Text>
                              Celular:
                           </Text>
                           <Text>
                              {
                                 selectedItems[16] === 'telCelular' ? 
                                    dato.telCelular 
                                    :
                                    '0.........15.....................'
                              }   
                           </Text>
                        </View>
                        <View style={styles.secondaryDataDirection}>
                           <Text> 
                              Nombre y Apellido del Tutor:
                           </Text>
                           <Text>
                              {
                                 selectedItems[17] === 'nombreTutor' ? 
                                    dato.nombreTutor 
                                    : 
                                    '.................................'
                              } 
                           </Text>
                           <Text>
                              {
                                 selectedItems[18] === 'apellidoTutor' ? 
                                    dato.apellidoTutor
                                    : 
                                    '................................'
                              } 
                           </Text>
                           <Text>
                              CUIL:
                           </Text>
                           <Text>
                              {
                                 selectedItems[19] === 'dniTutor' ? 
                                    dato.dniTutor 
                                    :
                                    '...............................'
                              }   
                           </Text>
                        </View>
                        <View style={styles.secondaryDataDirection}>
                           <Text>
                              Relación de Parentesco:
                           </Text>
                           <Text>
                              {
                                 selectedItems[20] === 'relacionTutor' ? 
                                    dato.relacionTutor 
                                    : 
                                    '.......................................'
                              }
                           </Text>
                           <Text>
                              Firma:
                           </Text>
                           <Text>
                              ...................................................
                           </Text>  
                        </View>
                        <View style={styles.secondaryDataDirection}>
                           <Text> 
                              Nombre y Apellido del Tutor:
                           </Text>
                           <Text>
                              .................................
                           </Text>
                           <Text>
                              ................................
                           </Text>
                           <Text>
                              CUIL:
                           </Text>
                           <Text>
                              ...............................
                           </Text>
                        </View>
                        <View style={styles.secondaryDataDirection}>
                           <Text>
                              Relación de Parentesco:
                           </Text>
                           <Text>
                              .......................................
                           </Text>
                           <Text>
                              Firma:
                           </Text>
                           <Text>
                              ...................................................
                           </Text>  
                        </View>
                        <View style={styles.documentationTextTitle}>
                           <Text> 
                              Documentación Solicitada
                           </Text>
                        </View>
                        <View style={styles.tableDirecion}>
                           <View style={{width:'5vw',height:'3vh',border:'2 solid black'}}>
                           </View>
                           <View style={{width:'40vw',height:'3vh',border:'2 solid black'}}>
                              <Text style={[styles.tableText,{paddingLeft:2,paddingRight:2}]}>
                                 Fotocopia de Libreta Salud con Apto Físico con control
                                 médico acorde a la edad
                              </Text>
                           </View>      
                           <View style={{width:'5vw',height:'3vh',border:'2 solid black'}}>
                           </View>
                           <View style={{width:'40vw',height:'3vh',border:'2 solid black'}}>
                              <Text style={styles.tableText}> 
                                 Fotocopia de Vacunas Completas
                              </Text>
                           </View>
                        </View>
                        <View style={styles.tableDirecion}>
                           <View style={{width:'5vw',height:'3vh',border:'2 solid black'}}>
                           </View>
                           <View style={{width:'40vw',height:'3vh',border:'2 solid black'}}>
                              <Text style={styles.tableText}>
                                 Fotocopia de Control Bucodental
                              </Text>
                           </View>      
                           <View style={{width:'5vw',height:'3vh',border:'2 solid black'}}>
                           </View>
                           <View style={{width:'40vw',height:'3vh',border:'2 solid black'}}>
                              <Text style={styles.tableText}> 
                                 Fotocopia de DNI actualizado del Alumno y Tutor
                              </Text>
                           </View>
                        </View>
                        <View style={styles.documentationText}>
                           <Text> 
                              •	El/la alumno/a que no presentara certificado de Aptitud física no podrá realizar Educación física
                           </Text>
                           <Text>
                              •	La familia acepta el Acuerdo de Convivencia vigente en la Institución y que declara conocer.
                           </Text>
                        </View>
                        <View style={[styles.documentationText,{border:'2 solid black'}]}>
                           <Text> 
                              La familia se compromete a presentar la documentación en un plazo no mayor al 25/02/2022. Se deja constancia
                           </Text>
                        </View>
                        <View style={styles.secondaryDataDirection}>
                           <Text style={{marginTop:50,textAlign:'center'}}> 
                              Firma:..................................... Alclaración:.............................. DNI: ...............................
                           </Text>
                        </View>
                        <View style={{width:'95vw',borderBottom:'1 solid black',marginTop:10}}>
                        </View>
                        <View style={styles.authorizationText}> 
                           <Text> 
                              En mi carácter de Tutor, del/la Alumno/a <Text style={{fontStyle:'bold'}}>.........................................................	DNI............................. me comprometo</Text> a favorecer el cumplimiento, del “Acuerdo Institucional de Convivencia” del Establecimiento, que declaro conocer. Declaro que <Text style={{fontStyle:'bold'}}>AUTORIZO</Text> a la Escuela Pública Autogestionada Nª 9 – “Dr. Horacio de la Mota”, en el marco de todas las actividades pedagógicas y salidas recreativas, a que utilice total o parcialmente la imagen de mi representado/a, su voz y/o reacciones, a fin de que la misma sea divulgada y/o incorporada con fines publicitarios institucionales en medios de comunicación audiovisuales, radiales, gráficos, internet, vía pública y//o cualquier otro soporte conforma el plan de medios, siendo asimismo posible dicha utilización en el marco de otras campañas de interés público que se generen en lo sucesivo en el ámbito de esta escuela, con la facultad para que durante la emisión de la publicidad institucional, incluya y edite la imagen, y ejecute todo otro acto encaminado a la divulgación del contenido, sin restricciones ni límites temporales, así como de medios para su reproducción y/o difusión. Todo lo expresado en un todo de acuerdo con la normativa nacional vigente y la Convención de los Derechos del Niño.
                              Dejo constancia que por medio del presente documento cedo de manera gratuita el derecho a divulgar la imagen de mi apoderado en los términos del presente, no siendo plausible de aplicación el artículo 9° del convenio de trabajo de los actores de Publicidad
                           </Text>
                        </View>
                        <View style={styles.secondaryDataDirection}>
                           <Text style={{marginTop:20,textAlign:'center'}}> 
                              Firma:..................................... Alclaración:.............................. DNI: ...............................
                           </Text>
                        </View>
                        <View style={{width:'95vw',borderBottom:'1 solid black',marginTop:10}}>
                        </View>
                        <View style={styles.footerText}>
                           <Text style={{textDecoration:'underline',marginTop:5}}>
                              Para completar por la Escuela:
                           </Text>     
                           <Text style={{marginTop:5}}>
                              •	Fecha de presentación: ………/………/………
                           </Text>
                           <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:5}}>
                              <Text>
                                 •	¿Cumplimenta con la documentación requerida?:
                              </Text>      
                              <Text style={{marginLeft:5}}>
                                 SI
                              </Text>
                              <View style={{border:'1 solid black', width:15,height:15,marginLeft:5}}></View>
                              <Text style={{marginLeft:5}}>
                                 NO
                              </Text>
                              <View style={{border:'1 solid black', width:15,height:15,marginLeft:5}}></View>
                           </View>
                           <Text style={{marginTop:10}}> 
                              Observaciones: .............................................................................................................................................................
                           </Text>
                           <Text style={{marginTop:20}}>
                              Recibió: Firma ......................................... Aclaración :...................................................................................................
                           </Text>
                           <View style={{width:'95vw',borderBottom:'1 solid black'}}>
                           </View>
                        </View>
                     </View>
                  </View>
               </View>
               )}
            </Page>
         </Document>
      </PDFViewer>
   );
}

export default InformeRatificacionSecundariaPDf;
