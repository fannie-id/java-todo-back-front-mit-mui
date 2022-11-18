import axios from "axios";
import {Task} from "../model/Task";

export const getAllTodos = () =>
    axios.get('/api/todo').then(response => response.data)


export const postTodo = (description: string) =>
    axios.post('/api/todo', {description: description, status: "OPEN"})


export const deleteTodo =(id:string)=>
    axios.delete(`/api/todo/${id}`).then((result)=>console.log(result))

/*
export const putTodo = (text:Task) =>
    axios.put('/api/todo/{task.id}',{description: task.description, status: task.status})*/
