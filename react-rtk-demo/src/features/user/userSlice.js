import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers' ,async ()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/usersaas')
  const data = response.data.map((user)=> user.id)
  return data
})



const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder)=>{
    builder.addCase(fetchUsers.pending, (state)=>{
      state.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action)=>{
      console.log('Action',action);
      state.loading = false;
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action)=>{
      console.log('Action',action);
      state.loading = false;
      state.users = []
      state.error = action.error.code + ': ' + action.error.message
    })
  }
})

export default userSlice.reducer