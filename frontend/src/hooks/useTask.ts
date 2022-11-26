import {useEffect, useState} from "react";
import {Task} from "../model/Task";
import axios from "axios";

export default function useTask(id: string|undefined) {

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

    }, [])

    function getTodoById(id: string) {
        axios.get("/api/todo/" + id)
            .then(response => response.data)
            .then(data => {
                setGetTodo((data))
                console.log("serve get:"+data)
            })
            .catch(console.error)
    }

    return {getTodo}
}
