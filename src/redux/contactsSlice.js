import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "./contactsAPI";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    const response = await fetch(API_URL)
    if (!response.ok) {
        throw new Error("Не вдалося отримати контакти")
    }
    const data = await response.json()
    return data
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
    })
    if (!response.ok) {
        throw new Error("Не вдалося додати контакт")
    }
    const data = await response.json()
    return data
})

export const deleteContact = createAsyncThunk("contacts/deletecContact", async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    })
    if (!response.ok) {
        throw new Error("Не вдалося видалити контакт")
    }
    return id
})

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })

            .addCase(addContact.pending, (state) => {
                state.isLoading = true
                state.error = null
            })

            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false
                state.items.push(action.payload)
            })

            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })

            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true
                state.error = null
            })

            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = state.items.filter(contact => contact.id !== action.payload)
            })

            .addCase(deleteContact.rejected, (state, action) => {
                state.isLoading = false
                state.items = state.items.filter(contact => contact.id !== action.payload)
            })

    }
})

export default contactSlice.reducer