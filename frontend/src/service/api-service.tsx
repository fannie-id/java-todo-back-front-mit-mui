import axios from "axios";

export const getAllTodos = () =>
    axios.get('/api/todo').then(response => response.data)


export const postTodo = (description: string) =>
    axios.post('/api/todo', {description: description, status: "OPEN"})
