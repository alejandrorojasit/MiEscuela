export const splitDate = (date,number) => {

   const myArr = date.split("/");
   if(number === 3){
      return myArr
   }else{
      return myArr[number]
   }
}

export const ageCalculate = (date) => {

   const dateToday = new Date()
   const day = dateToday.getDate()
   const month = dateToday.getMonth() + 1
   const year = dateToday.getFullYear()

   switch(true){
      case (month > parseInt(date[1])):
         let anios = year - parseInt(date[2])
         return anios
      case (month === parseInt(date[1]) && day < parseInt(date[0])):
         let anios2 = (year - parseInt(date[2])) - 1
         return anios2
      case (month === parseInt(date[1]) && day >= parseInt(date[1])):
         let anios4 = year - (parseInt(date[2]))
         return anios4
      case (month < parseInt(date[1])):
         let anios3 = (year - parseInt(date[2])) - 1
         return anios3
   }
}

export const ageCalculate3006 = (date) => {

   const dateToday = new Date()
   const year = dateToday.getFullYear() 
   switch(true){
      case (parseInt(date[1]) < 6):
         let anios = year - parseInt(date[2])
         return anios
      case (parseInt(date[1]) === 6 && parseInt(date[0]) <= 30 ):
         let anios2 = year - parseInt(date[2])
         return anios2
      case (parseInt(date[1]) > 6):
         let anios3 = (year - parseInt(date[2])) - 1
         return anios3
   }
}


export const createISODate = (date) => {
   const splitedDate = splitDate(date,3)
   const ISOdate = new Date(splitedDate[2],splitedDate[1] - 1,splitedDate[0])
   return ISOdate
}

export const createStringDate = (date) => {
   const stringDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
   return stringDate
}
