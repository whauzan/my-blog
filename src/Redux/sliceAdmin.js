import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
    name: "",
    password: "",
}

export const sliceAdmin = createSlice({
    name: "admin",
    initialState: {
        admins: initialValue
    },
    reducers: {
        saveAdmin: (state, action) => {
            const newAdmin = {...action.payload}
            state.admins = newAdmin
        },
        deleteAdmin: (state) => {
            state.admins = initialValue
        }
    }
})

export const { saveAdmin, deleteAdmin } = sliceAdmin.actions;
export default sliceAdmin.reducer;