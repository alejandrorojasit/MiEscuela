export const handleClickSeleccionarTodo = (addUserRef) => {
   Object.keys(addUserRef.current).map((values)=> {
      addUserRef.current[values].checked = true
   }) 
}
