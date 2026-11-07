import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const contactSlice = createSlice({
    
    name: "contacts",
    initialState,
    reducers: {},
})

export default contactSlice.reducer