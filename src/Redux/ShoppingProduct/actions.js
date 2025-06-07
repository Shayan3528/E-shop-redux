
import {ADDTOCART,INCREMENT,DECREMENT,DELETE} from "./actionType";

export const addToCart = (item)=>{
   return{
     type:ADDTOCART,
    payload:item,
   }
}

export const increment=(id)=>{
    return{
        type:INCREMENT,
        payload:id,
    }
}

export const decrement = (id)=>{
    return{
        type:DECREMENT,
        payload:id,
    }
}

export const deleteItem=(id)=>{
    return{
        type:DELETE,
        payload:id,
    }
}