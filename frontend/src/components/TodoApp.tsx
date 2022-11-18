import {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import {Task} from "../model/Task";
import TodoList from "./TodoList";
import AddTask from "./AddTask";
import {getAllTodos, postTodo} from "../service/api-service";

export default function TodoApp() {

    const [todoList, setTodoList] = useState<Task[]>([])

    useEffect(() => {
        getAllTodos()
            .then(todos => setTodoList(todos))
    }, [])

console.log(todoList)
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
                console.log("gefunden")
                return true
            } else {
                return false
            }
        })
        setTodoList(filteredTasks)

    }

    function addNewTodo(description: string) {
        postTodo(description)
            .then(() => getAllTodos())
            .then(todos => setTodoList(todos))
    }


    return (<div>

            <SearchBar onSearchTextChange={onSearchTextChange}/>
            <TodoList todoList={todoList}/>

            <AddTask onClickAddTodo={addNewTodo}/>


        </div>

    )
}