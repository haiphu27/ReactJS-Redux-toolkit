import React from 'react';
import {useSelector} from 'react-redux'
import {todosSelector} from '../store/reducer/todoSlice'
const Narbar = () => {
    const todos=useSelector(todosSelector)
    return (
        <div className="navbar">
            <h1>Redux toolkit app todos</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total:{todos.length}</li>
            </ul>

        </div>
    );
};

export default Narbar;