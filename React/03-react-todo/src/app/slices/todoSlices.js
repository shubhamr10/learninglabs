import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAlltodos = createAsyncThunk("FETCH_TODOS", async (body, thunkAPI)=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json();
    return data;
})


const initialState = {
    todos:[]
}


const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchAlltodos.pending, (state, action) => {
            console.log("called the apis");
        })

        builder.addCase(fetchAlltodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        })
    }
})

export const {} = todoSlice.actions;

export default todoSlice.reducer;