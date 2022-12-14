import {Task} from "../model/Task";
import TaskPreview from "./TaskPreview";
import TaskCard from "./TaskCard";
import {Grid} from "@mui/material";


type TodoListProps = {
    todoList: Task[],
    changeTodo: (todo: Task) => void,
    deleteTodo: (id: string) => void
    nextStage:(todo:Task) => void
}


export default function TodoList(props: TodoListProps) {

    const allTasks = props.todoList.map((task) =>
        //<TaskCard key={task.id} task={task} deleteTodo={props.deleteTodo} changeTodo={props.changeTodo}/>)
        <TaskPreview key={task.id} task={task} deleteTodo={props.deleteTodo} nextStage={props.nextStage}/>)

    return (
        <div>
            <Grid container direction="row" boxShadow={2}>
                {allTasks}
            </Grid>
        </div>)

}