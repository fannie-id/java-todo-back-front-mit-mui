import React from "react";
import SearchBar from "./SearchBar";

import TodoList from "./TodoList";
import AddTask from "./AddTask";

import {Box, Typography} from "@mui/material";
import useTodos from "../hooks/useTodos";

export default function TodoApp() {

   const {addNewTodo, deleteTodoByID, changeTodo,onSearchTextChange,filteredTasks,updateTodo} = useTodos()

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