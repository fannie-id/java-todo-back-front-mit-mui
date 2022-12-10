import axios from "axios";
import {NewTask, Task} from "../model/Task";

export const getAllTodos = () =>
    axios.get('/api/todo').then(response => response.data)


export const getTodoById = (id:string) =>
    axios.get(`/api/todo/${id}`).then(response => response.data)

export const postTodo = (todo: NewTask) =>
    axios.post('/api/todo', {description: todo.description, status: "OPEN"})


export const deleteTodo =(id:string)=>
    axios.delete(`/api/todo/${id}`)


export const putTodo = (todo:Task) =>
    axios.put(`/api/todo/${todo.id}`, todo)//.then((result)=>console.log(result))
