import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import {Task} from "../model/Task";
import TodoList from "./TodoList";
import AddTask from "./AddTask";
import {deleteTodo, getAllTodos, postTodo} from "../service/api-service";
import {Box, Typography} from "@mui/material";

export default function TodoApp() {

    const [todoList, setTodoList] = useState<Task[]>([])

    useEffect(() => {
        getAllTodos()
            .then(todos => setTodoList(todos))
    }, [])

    function addNewTodo(description: string) {
        postTodo(description)
            .then(() => getAllTodos())
            .then(todos => setTodoList(todos))
    }

    function deleteTodoByID(id:string){
        deleteTodo(id)
            .then(() => getAllTodos())
            .then(todos => setTodoList(todos))
    }

    /*function changeTodo(text:string){
        putTodo(text)
            .then(() => getAllTodos())
            .then(todos => setTodoList(todos))
    }*/


    const [searchText, setSearchText] = useState<string>("")

    function onSearchTextChange(passedText: string) {
        setSearchText(passedText)


    }


        const filteredTasks = todoList.filter((task: Task) => {
            return task.id.toUpperCase().includes(searchText.toUpperCase()) ||
                task.status.toString().toUpperCase().includes(searchText.toUpperCase()) ||
                task.description.toUpperCase().includes(searchText.toUpperCase());
        })







    return (
            <Box m={6}>
                <Typography mt={6}  variant="h3" component="h4" align="center">
                    MY Kanban
                </Typography>

                <SearchBar onSearchTextChange={onSearchTextChange}/>
                <TodoList todoList={filteredTasks} /*changeTodo={}*/ deleteTodo={deleteTodoByID}/>

                <AddTask onClickAddTodo={addNewTodo}/>
            </Box>

    )
}