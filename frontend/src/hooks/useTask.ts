import {useEffect, useState} from "react";
import {Task} from "../model/Task";
import axios from "axios";
import {deleteTodo, putTodo} from "../service/api-service";

export default function useTask(id: string|undefined, myCallback:(task: Task) => void) {

const emptyTodo :Task ={
    id:"",
    description:"",
    status:"OPEN"
}
    const [getTodo, setGetTodo] = useState<Task>(emptyTodo)

    //nicht endlose laden, nur einmal laden
    useEffect(() => {
        if(id){
            getTodoById(id)
        }
        //eslint-disable-next-line
    },[])

    function getTodoById(id: string) {
        axios.get("/api/todo/" + id)
            .then(response => response.data)
            .then(data => {
                setGetTodo((data))
                myCallback(data)
            })
            .catch(console.error)
    }

    function deleteTodoById(id:string){
    deleteTodo(id)
        .catch(console.error)
    }


    function changeDescription(description:string){
    const changedTodo:Task ={
        id:getTodo.id,
        description:description,
        status:getTodo.status}

     putTodo(changedTodo)
        .then(response => response.data)
        .then(data => {
            setGetTodo((data))
        }).catch(console.error)

    }

    function changeStatus(status:string){
        const changedTodo:Task ={
            id:getTodo.id,
            description:getTodo.description,
            status:status}
        putTodo(changedTodo)
            .then(response => response.data)
            .then(data => {
                setGetTodo((data))
            }).catch(console.error)
    }
    return {getTodo, deleteTodoById, changeDescription, changeStatus}
}
