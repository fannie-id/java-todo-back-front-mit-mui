import {Task} from "../model/Task";
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

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

    return <Box m={4}
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}

        className="TaskFrom">

        <Typography  m={2} variant="h4" component="h4">
            {props.task.description}
        </Typography>

        <Typography  m={2} variant="h5" component="h5">
            status:
            <span className={statusIconColor(props.task.status)}></span>
            {props.task.status}
        </Typography>


        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteTodo(props.task.id)}>
            Delete Task
        </Button>












    </Box>

}