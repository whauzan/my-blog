import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    nama: "",
    email: "",
}

export const sliceComment = createSlice({
    name: "comment",
    initialState: {
        comments: initialValue
    },
    reducers: {
        saveInfo: (state, action) => {
            const newComment = {...action.payload}
            state.comments = newComment
        }
    }
})

export const { saveInfo } = sliceComment.actions;
export default sliceComment.reducer;