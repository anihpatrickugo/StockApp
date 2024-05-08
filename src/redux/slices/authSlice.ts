import { createSlice } from '@reduxjs/toolkit'
import { UserType } from '../../types'


export interface AuthStateProps {
  token: string | null
  user: UserType | null

}

const initialState: AuthStateProps = {
  token: null,
  user: null,
}




export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },

    removeToken: (state) => {
      state.token = null
    },

    setUser: (state, action)=>{
      state.user = action.payload
    }
    
  },

  
})

// Action creators are generated for each case reducer function
export const { setToken, removeToken, setUser } = authSlice.actions

export default authSlice.reducer