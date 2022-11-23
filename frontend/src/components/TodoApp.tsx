import React from "react";
import SearchBar from "./SearchBar";

import TodoList from "./TodoList";
import AddTask from "./AddTask";

import {Box, Typography} from "@mui/material";
import userTasks from "../hooks/useTasks"

export default function TodoApp() {

   const {addNewTodo, deleteTodoByID, changeTodo,onSearchTextChange,filteredTasks,updateTodo} = userTasks()

    return (
        <Box m={6}>
            <Typography mt={6} variant="h3" component="h4" align="center">
                MY Kanban
            </Typography>

            <SearchBar onSearchTextChange={onSearchTextChange}/>
            <TodoList todoList={filteredTasks} changeTodo={changeTodo} deleteTodo={deleteTodoByID} nextStage={updateTodo}/>

            <AddTask onClickAddTodo={addNewTodo}/>
        </Box>)
}