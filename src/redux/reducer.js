import { uid } from "uid"

let studentRecord = []

export const studentReducer = (state = studentRecord, action) =>{

    if(action.type == "ADD_STUDENT"){
        action.payload.id = uid()
        console.log(action.payload.id)
        state.push(action.payload)
    }else if(action.type == "DELETE_STUDENT"){
        const filterArr = state.filter((val) =>{
            return val.id != action.payload
        })

        state = [...filterArr]
    }else if(action.type == "EDIT_STUDENT"){
        const filterArr = state.filter((val) =>{
            return val.id != action.payload.id
        })

        filterArr.push(action.payload)
        state = [...filterArr]
    }

    return state
}