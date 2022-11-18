import {Task} from "../model/Task";

type TaskFromProps = {
    task: Task
    /*changeTodo(todo: Task) :void,*/
    deleteTodo(id:string): void
}

export default function TaskFrom (props: TaskFromProps) {

    function statusIconColor(a:string):string{
        if(a==="OPEN"){
            return "OPEN"
        }else if(a==="IN_PROGRESS"){
            return "IN_PROGRESS"
        }else {
            return "DONE"}

    }
    function deleteTodo(id:string){
        props.deleteTodo(id)
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

        <button className="btn-delete"
                type="button"  onClick={() => deleteTodo(props.task.id)}>
            delete Task
        </button>











    </div>

}