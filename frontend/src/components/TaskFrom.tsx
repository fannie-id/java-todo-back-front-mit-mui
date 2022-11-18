import {Task} from "../model/Task";
import {TodoStatus} from "../model/TodoStatus";

type TaskProps = {
    task: Task
}

export default function TaskFrom(props: TaskProps) {

    function statusIconColor(a:TodoStatus):string{
        if(a===0){
            return "OPEN"
        }else if(a===1){
            return "IN_PROGRESS"
        }else {
            return "DONE"}

    }


    return <div className="TaskFrom">

        <h2 className="TaskID">
            {props.task.id}
        </h2>

        <h3 className="TaskDesc">
            {props.task.description}
        </h3>

        <h2 className="TaskStatus">
            <span className={statusIconColor(props.task.status)}></span>
            {props.task.status}
        </h2>



    </div>

}