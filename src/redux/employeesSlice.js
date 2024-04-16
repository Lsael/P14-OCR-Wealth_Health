import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
        state = [action.payload, ...state]
      }
  }
})

export const { addEmployee } = employeesSlice.actions

export default employeesSlice.reducer