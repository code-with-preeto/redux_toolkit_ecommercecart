import {createSlice} from "@reduxjs/toolkit"
 const initialState={
       carts:[]
 }

 const cartSlice=createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        //add to cart
        addToCart:(state,action)=>{
           // console.log("action",action);
           //state.carts=[...state.carts,action.payload]
           const IteamIndex =state.carts.findIndex((iteam)=>iteam.id === action.payload.id);
           console.log(IteamIndex);
           if(IteamIndex>=0){
            state.carts[IteamIndex].qnty += 1;
           }else{
            const temp={...action.payload,qnty:1}
            state.carts=[...state.carts,temp]
           }
        },
        //remove particular items
        removeToCart:(state,action)=>{
            const data= state.carts.filter((ele) => ele.id !== action.payload);
            state.carts=data;
        },
        //remove single items
        removeSingleIteams:(state,action)=>{
            const IteamIndex_dec =state.carts.findIndex((iteam)=>iteam.id === action.payload.id);  
            if(state.carts[IteamIndex_dec].qnty>=1){
                state.carts[IteamIndex_dec].qnty -= 1;
            } 
        },
        //clear cart
        emptycartItem:(state,action)=>{
            state.carts=[]
        }
    }
 });
 export const {addToCart,removeToCart,removeSingleIteams,emptycartItem}=cartSlice.actions;
 export default cartSlice.reducer;