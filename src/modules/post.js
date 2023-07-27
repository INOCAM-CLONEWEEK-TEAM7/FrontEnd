import { createSlice } from "@reduxjs/toolkit";


const PostSlice = createSlice({
  name: 'postData',
  initialState:{},
  reducers:{
    PostPosition: (state,action)=>{
      return {...state, postPosition : action.payload}
    },

    PostHeight: (state,action)=>{
      return {...state, postHeight : action.payload}
    }
  }
})

export const {PostPosition,PostHeight} = PostSlice.actions
export default PostSlice.reducer
