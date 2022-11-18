import {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import {Task} from "../model/Task";
import TodoList from "./TodoList";
import AddTask from "./AddTask";
import {deleteTodo, getAllTodos, postTodo} from "../service/api-service";

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

        filterTask()
    }

    function filterTask() {
        const filteredTasks = todoList.filter((task: Task) => {
            if (
                task.id.toUpperCase().includes(searchText.toUpperCase()) ||
                task.status.toString().toUpperCase().includes(searchText.toUpperCase()) ||
                task.description.toUpperCase().includes(searchText.toUpperCase())
            ) {
                return true
            } else {
                return false
            }
        })
        setTodoList(filteredTasks)

    }




    return (<div>

            <SearchBar onSearchTextChange={onSearchTextChange}/>
            <TodoList todoList={todoList} /*changeTodo={}*/ deleteTodo={deleteTodoByID}/>

            <AddTask onClickAddTodo={addNewTodo}/>


        </div>

    )
}