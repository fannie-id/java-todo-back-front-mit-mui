import {Task} from "../model/Task";

type TaskProps = {
    task: Task
}

export default function TaskFrom(props: TaskProps) {

    function statusIconColor(a:string):string{
        if(a==="OPEN"){
            return "OPEN"
        }else if(a==="IN_PROGRESS"){
            return "IN_PROGRESS"
        }else {
            return "DONE"}

    }


    return <div className="TaskFrom">

        <h3 className="TaskDesc">
            description:
            {props.task.description}
        </h3>

        <h2 className="TaskStatus">
            status:
            <span className={statusIconColor(props.task.status)}></span>
            {props.task.status}
        </h2>



    </div>

}