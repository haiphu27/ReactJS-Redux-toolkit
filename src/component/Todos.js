import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoForm from "./TodoForm";
import {
    todosSelector,
    markComplete,
    deleteJob,
    getTodos
} from '../store/reducer/todoSlice'
const Todos = () => {
    const todos=useSelector(todosSelector)


    const dispatch=useDispatch()
    const toggleCompleted=(id)=>{
        dispatch(markComplete(id))
    }
    const deleteJobss=(id)=>{
        dispatch(deleteJob(id))
    }


    useEffect(()=>{
        dispatch(getTodos())
    },[dispatch])

    return (
        <div className="todo-list" >
            <TodoForm/>
            <ul>
                {todos.map(todo=>(
                    <li key={todo.id} className= {todo.completed?"completed":''}>
                        {todo.title}
                        <input type="checkbox" checked={todo.completed}
                         onChange={()=>toggleCompleted(todo.id)}
                        />
                        <button onClick={()=>deleteJobss(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Todos;