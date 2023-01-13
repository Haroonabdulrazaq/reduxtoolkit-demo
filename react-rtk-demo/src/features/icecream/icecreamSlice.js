import { createSlice } from '@reduxjs/toolkit'
import {ordered as cakeActions} from '../cake/cakeSlice'


const initialState={
  numOfIceCream: 20
}

const iceCreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state)=>{
      state.numOfIceCream--
    },
    restocked: (state, action)=> {
      state.numOfIceCream += action.payload
    }
  },
  // extraReducers: {
  //   ['cake/ordered']: (state)=>{
  //     state.numOfIceCream--
  //   }
  // }
  extraReducers: (builder) =>{
    builder.addCase(cakeActions, (state)=>{
      state.numOfIceCream--
    })
  }
})

export default iceCreamSlice.reducer
export const {ordered, restocked } = iceCreamSlice.actions