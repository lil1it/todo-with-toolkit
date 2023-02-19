import { createSlice } from "@reduxjs/toolkit"

// export const authActionTypes = {
//     LOG_IN: "LOG_IN",
//     LOG_OUT: "LOG_OUT",
//     }
    
   export const initialState = {
    email: "",
    isAuthorized: false
    }

    export const authSlice = createSlice({
        name:"auth",
        initialState,
        reducers:{
            login(state,action){
              state.email = action.payload;
              state.isAuthorized = true
            },
            logout(state){
              state.email = "";
              state.isAuthorized = false
           }
        }
    })

    export const actionsAuth = authSlice.actions

    // export const authReducer  = (state= initialState, action) => {
    // switch(action.type) {
    // case authActionTypes.LOG_IN:
    // return {
    // email: action.payload,
    // isAuthorized: true,
    // }
    // case authActionTypes.LOG_OUT:
    // return initialState;
    // default:
    // return state
    // }
    // }