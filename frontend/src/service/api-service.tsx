import axios from "axios";
import {Task} from "../model/Task";

export const getAllTodos = () =>
    axios.get('/api/todo').then(response => response.data)


export const postTodo = (description: string) =>
    axios.post('/api/todo', {description: description, status: "OPEN"})


export const deleteTodo =(id:string)=>
    axios.delete(`/api/todo/${id}`)


export const putTodo = (todo:Task) =>
    axios.put(`/api/todo/${todo.id}`, todo)//.then((result)=>console.log(result))
