import {createSlice} from "@reduxjs/toolkit";
const initialState={
    loading:false,
    error:false,
    currentUser:null,
    message:""
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        signInStart(state){
         state.loading=true;
        },
        signInSucess(state,action){
        state.loading=false,
        state.currentUser=action.payload;
        state.message=action.payload;
        },
        signInFailed(state,action){
         state.loading=false;
         state.error=true;
         state.message=action.payload;

        }
    }
})
const {signInStart,signInSucess,signInFailed}=userSlice.actions;
export default userSlice.reducer;