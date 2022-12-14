import {useEffect, useState} from "react";
import {NewTask, Task} from "../model/Task";
import {deleteTodo, getAllTodos, postTodo, putTodo} from "../service/api-service";
/*type UserTodos =
    [(description: string) => void,
    (id: string) => void,
    (newTask: Task) => void,
    (passedText: string) => void,
    Task[]]*/

export default function useTodos(){

    const [todoList, setTodoList] = useState<Task[]>([])

    useEffect(() => {
        getAllTodos()
            .then(todos => setTodoList(todos))
    }, [])

    function addNewTodo(newTodo: NewTask) {
        postTodo(newTodo)
            //.then(() => getAllTodos())
            //.then(todos => setTodoList(todos))
            //aktualisieren todolist mit Spread Operator
            .then(newTodoResponse => {
                setTodoList(prevTodoList => {
                    return [...prevTodoList, newTodoResponse.data]
                })
            }).catch(console.error)
    }

    function deleteTodoByID(id: string) {
        deleteTodo(id)
            .then(() => {
                const updateTodoList = todoList.filter((todo: Task) => todo.id !== id)
                setTodoList(updateTodoList)
            }).catch(console.error)
    }

    function changeTodo(updatedTodo: Task) {
        console.log(updatedTodo)
        putTodo(updatedTodo)
            //.then(() => getAllTodos())
            //.then(todos => setTodoList(todos))
            .then((updatedTodoResponse) => {
                setTodoList(((prevTodos) => {
                    const updatedTodo: Task = updatedTodoResponse.data
                    return prevTodos.map((todo: Task) => {
                        if (todo.id === updatedTodo.id) {
                            return updatedTodo
                        } else {
                            return todo
                        }
                    })
                }))
            }).catch(console.error)
    }


    function updateTodo(updateTodo: Task) {

        putTodo(updateTodo)
            //.then(() => getAllTodos())
            //.then(todos => setTodoList(todos))
            .then((updatedTodoResponse) => {
                setTodoList(((prevTodos) => {
                    const updatedTodo: Task = updatedTodoResponse.data
                    return prevTodos.map((todo: Task) => {
                        if (todo.id === updatedTodo.id) {
                            return updatedTodo
                        } else {
                            return todo
                        }
                    })
                }))
            }).catch(console.error)
    }


    const [searchText, setSearchText] = useState<string>("")

    function onSearchTextChange(passedText: string) {
        setSearchText(passedText)
    }


    const filteredTasks = todoList.filter((task: Task) => {
        return task.status.toString().toUpperCase().includes(searchText.toUpperCase()) ||
            task.description.toUpperCase().includes(searchText.toUpperCase());
    })


    return {addNewTodo, deleteTodoByID, changeTodo, onSearchTextChange, filteredTasks,updateTodo}
}