import React from 'react';

import CssBaseline from "@mui/material/CssBaseline";
import './App.css';
import TodoApp from "./components/TodoApp";


function App() {

    return (
        <React.Fragment>
            <CssBaseline />
            <TodoApp/>
        </React.Fragment>

    );
}

export default App;
