import {Task} from "../model/Task";
import TaskFrom from "./TaskFrom";


type TodoListProps={
    todoList: Task[],
    /*changeTodo: (todo: Task) => void,*/
    deleteTodo:(id:string)=>void
}


export default function TodoList(props:TodoListProps){

    const allTasks = props.todoList.map((task)=>
    <TaskFrom key={task.id} task={task} /*changeTodo={props.changeTodo}*/ deleteTodo={props.deleteTodo}/> )

    return <div>
        {allTasks}
    </div>

}