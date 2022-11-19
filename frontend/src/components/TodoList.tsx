import {Task} from "../model/Task";
import TaskPreview from "./TaskPreview";
import TaskCard from "./TaskCard";


type TodoListProps={
    todoList: Task[],
    /*changeTodo: (todo: Task) => void,*/
    deleteTodo:(id:string)=>void
}


export default function TodoList(props:TodoListProps){

    const allTasks = props.todoList.map((task)=>
    <TaskCard key={task.id} task={task} deleteTodo={props.deleteTodo}/>)

    return <div>
        {allTasks}
    </div>

}