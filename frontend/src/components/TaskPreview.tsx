import {Task} from "../model/Task";
import {Box, easing, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';


type TaskPreviewProps = {
    task: Task

    deleteTodo(id: string): void
}

export default function TaskCard(props: TaskPreviewProps) {

    function statusIconColor(a: string): string {
        if (a === "OPEN") {
            return "blue"
        } else if (a === "IN_PROGRESS") {
            return "green"
        } else {
            return "grey"
        }
    }

    function deleteTodo(id: string) {
        props.deleteTodo(id)
    }

    //const url:string= "/api/"+props.task.id +"href={`${props.task.id}`}"

    return (
        < Box m={2} boxShadow={2}
             sx={{
                 p:2,
                 width: '29%',
                 maxWidth: 300,
                 '&:hover': {
                     scale: '1.06'
                 },
             }}
        >


            <Typography m={2} variant="h4" component="h4">
                {props.task.description}
            </Typography>

            <Typography
                m={2}
                variant="h6"
                component="h6"
                color={statusIconColor(props.task.status)}
            >
                {props.task.status}
            </Typography>

            <Button size="small" variant="contained" startIcon={<DeleteIcon/>} onClick={() => deleteTodo(props.task.id)}>
                Delete Task
            </Button>
        </Box>

    )

}