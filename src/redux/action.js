export const addStu = (data) =>{
   console.log(data)
    return {
        type:"ADD_STUDENT",
        payload: data
    }
} 

export const deleteStu = (id) =>{
    console.log(id)
     return {
         type:"DELETE_STUDENT",
         payload: id
     }
 } 

 
export const editStu = (data) =>{

     return {
         type:"EDIT_STUDENT",
         payload: data
     }
 } 