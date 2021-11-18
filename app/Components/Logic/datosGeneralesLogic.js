export const dniCheck = (ref,setIsValid,setIsInvalid,oldDNI) => {

   if(oldDNI){
      if(ref.current[2].value.length === 9){
         let newArray = ref.current[2].value.split('.')
         if(newArray[0].length < 1){
            setIsInvalid(true)
         }
         if(newArray[2] !== undefined){
            if(newArray[1].length < 3 || newArray[2].length < 3){
               setIsInvalid(true)
            }
         }
         if(newArray[2] !== undefined){
            if(newArray[0].length === 1 && newArray[1].length === 3 && newArray[2].length === 3 ){
               setIsInvalid(false)
               setIsValid(true)
            }
         }else{
            setIsInvalid(true)
         }
      }
   }

   if(ref.current[2].value.length < 9){
      setIsValid(false)
      setIsInvalid(true)
   }

   if (ref.current[2].value.length > 10){
      setIsInvalid(true)
   }

   if(ref.current[2].value.length === 10){
      let newArray = ref.current[2].value.split('.')
      if(newArray[0].length < 2){
         setIsInvalid(true)
      }
      if (newArray[2] !== undefined){
         if(newArray[1].length < 3 || newArray[2].length < 3){
         }
      }

      if(newArray[2] !== undefined){
         if(newArray[0].length === 2 && newArray[1].length === 3 && newArray[2].length === 3 ){
            setIsInvalid(false)
            setIsValid(true)
         }
      }else{
         setIsInvalid(true)
      }

   }
}

export const cuilCheck = (sexo,dni) => {
   const factorNum = [5,4,3,2,7,6,5,4,3,2]
   let newArray = dni?.split('.')
   let dniWithOutDots = []
   let sumFactor = 0
   let cuil = '' 

   if(newArray !== undefined){ 

      if(sexo === 'Masculino'){
         dniWithOutDots=['2','0']
      }else{
         dniWithOutDots=['2','7']
      }

      dniWithOutDots=[...dniWithOutDots, ...newArray[0] , ...newArray[1] , ...newArray[2]]

      dniWithOutDots.map((dataMap,index)=> {
         sumFactor = sumFactor + (parseInt(dataMap) * factorNum[index])
      })

      let z = 11 - (sumFactor % 11)       

      dniWithOutDots=[...dniWithOutDots,z.toString()]

      dniWithOutDots.map((dataMap,index)=> {

         if(index === 2 || index === 10){
            cuil = cuil + '-' + dataMap 
         }else{
            cuil = cuil + dataMap
         } 

      })
   }
   
   return cuil 

}
