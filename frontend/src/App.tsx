import React from 'react';

import CssBaseline from "@mui/material/CssBaseline";
import './App.css';
import TodoApp from "./components/TodoApp";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";


function App() {

    return (
        <React.Fragment>
            <CssBaseline />

            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<p>Hi</p>}></Route>
                    <Route path="/todos" element={<TodoApp/>}></Route>
                </Routes>
            </BrowserRouter>

        </React.Fragment>

    );
}

export default App;
