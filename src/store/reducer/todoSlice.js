import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";
import axios from "axios";


//reducer thunk
export const getTodos = createAsyncThunk('todos/getTodos', async params => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return res.data
})

export const addTodo = createAsyncThunk('todos/addTodo', async title => {
    const newTodo = {
        id: nanoid(),
        title,
        completed: false
    }
    await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
    return newTodo
})

export const deleteJob=createAsyncThunk('todos/deleteJob',async id => {
    await axios.delete('https://jsonplaceholder.typicode.com/todos/'+id)
    return id
})

export const markComplete=createAsyncThunk('todos/markComplete',async id => {
    return id
})

//tao slice
const TodosSlicer = createSlice({
    name: "todos",
    initialState: {
        allTodos: []
    },
    reducers: {},
    extraReducers: {
        //get todo
        [getTodos.pending]: (state, action) => {
            console.log('Fetching todos from backend...')
        },
        [getTodos.fulfilled]: (state, action) => {
            state.allTodos = action.payload
        },
        [getTodos.rejected]: (state, action) => {
            console.log("false ")
        },

        //add todo
        [addTodo.pending]: (state, action) => {
            console.log('pending')
        },
        [addTodo.fulfilled]: (state, action) => {
            console.log('done')
            state.allTodos.unshift(action.payload)
        },
        [addTodo.rejected]: (state, action) => {
            console.log('false')
        },

        //delete job
        [deleteJob.pending]:(state,action)=>{
            console.log('pending')
        },
        [deleteJob.fulfilled]:(state,action) =>{
            console.log('done')
          const newState=state.allTodos.filter(todo => todo.id!==action.payload)
            state.allTodos=newState;
        },

        //markComplete job
        [markComplete.fulfilled]:(state,action)=>{
            state.allTodos.map(todo => {
                if(todo.id===action.payload){
                    todo.completed=!todo.completed
                }
                return todo
            })
        }
    }
})


//selector ->lay state
export const todosSelector = state => state.todoReducer.allTodos

//tao reducer
const todoReducer = TodosSlicer.reducer
export default todoReducer;
