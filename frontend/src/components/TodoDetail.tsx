import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Task} from "../model/Task";
import axios from "axios";


export default function TodoDetail(){
    const params = useParams()

    const[todo,setTodo] = useState<Task>()

    const id:string |undefined = params.id

    //nicht endlose laden, nur einmal laden
    useEffect(()=>{
        if(id){
            getTodoById(id)
        }
    },[id])


    function getTodoById(id:String){
        axios.get("/api/todo/" +id)
            .then(response =>response.data)
            .then(data=>{
                setTodo((data))
            })
            .catch(console.error)
    }

    return(
        <div>

            {todo?<p>description: {todo.description}<br/> status: {todo.status}</p>:<p>loading</p>}
        </div>
    )
}