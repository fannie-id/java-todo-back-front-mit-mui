import {Task} from "../model/Task";
import TaskFrom from "./TaskFrom";


type TodoListProps={
    todoList: Task[]
    addTask(id:number):void
}


export default function TodoList(props:TodoListProps){

    const allTasks = props.todoList.map((task)=>
    <TaskFrom  key={task.id} task={task}/> )
    }


    return <div>
        {allTasks}
    </div>

}