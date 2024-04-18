import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    listEmployees: (state, action) => {
      state = action.payload
      return state
    },
    addEmployee: (state, action) => {
        state = [action.payload, ...state]
        return state
      }
  }
})

export const { addEmployee, listEmployees } = employeesSlice.actions

export default employeesSlice.reducer