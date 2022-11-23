import React from 'react';

import CssBaseline from "@mui/material/CssBaseline";
import './App.css';
import TodoApp from "./components/TodoApp";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import TaskCard from "./components/TaskCard";



function App() {

    return (
        <React.Fragment>
            <CssBaseline />

            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<p>Hi</p>}></Route>
                    <Route path="/api/todo" element={<TodoApp/>}></Route>
                    <Route path="/api/todo/:id" element={<TaskCard/>}></Route>
                </Routes>
            </BrowserRouter>

        </React.Fragment>

    );
}

export default App;
