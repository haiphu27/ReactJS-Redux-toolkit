import React from 'react';
import './App.css';
import Narbar from "./component/Narbar";
import Todos from "./component/Todos";

function App() {
    return (
        <div className="App">
            <Narbar/>
            <Todos/>
        </div>
    );
}

export default App;
