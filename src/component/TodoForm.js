import React, {useState} from 'react';
import {addTodo} from "../store/reducer/todoSlice";
import {useDispatch} from "react-redux";

const TodoForm = () => {
    const [title,setTitle]=useState('')

    const changeTitle=(e)=>{
        setTitle(e.target.value)
    }

    const dispatch=useDispatch()
    const addSingleTodo=(e)=>{
        e.preventDefault()
        dispatch(addTodo(title))
        setTitle('')
    }
    return (
        <div>
            <form onSubmit={addSingleTodo}>
                <input type="text" value={title} onChange={changeTitle}/>
                <input type="submit" value="add"/>
            </form>
        </div>
    );
};

export default TodoForm;