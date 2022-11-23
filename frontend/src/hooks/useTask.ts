
import {useEffect, useState} from "react";
import {Task} from "../model/Task";
import axios from "axios";
import {deleteTodo, getAllTodos, putTodo} from "../service/api-service";

export default function useTask(id:string){
    const [todoList, setTodoList] = useState<Task[]>([])

    useEffect(() => {
        getAllTodos()
            .then(todos => setTodoList(todos))
    }, [])

    const[todo,setTodo] = useState<Task>()

    //nicht endlose laden, nur einmal laden
    useEffect(()=>{
        if(id){
            getTodoById(id)
        }
    },[id])

    function getTodoById(id){
        axios.get("/api/todo/" +id)
            .then(response =>response.data)
            .then(data=>{
                setTodo((data))
            })
            .catch(console.error)
    }

    function deleteTodoByID(id) {
        deleteTodo(id)
            //.then(() => getAllTodos())
            //.then(todos => setTodoList(todos))
            .then(() => {
                const updateTodoList = todoList.filter((todo: Task) => todo.id !== id)
                setTodoList(updateTodoList)
            })
    }

    function changeTodo(updatedTodo: Task) {
        console.log(updatedTodo)
        putTodo(updatedTodo)
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
            })
    }

    return {todo,deleteTodoByID,changeTodo}
}
