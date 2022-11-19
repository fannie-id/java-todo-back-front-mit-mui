import {Task} from "../model/Task";
import {Box, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

type TaskPreviewProps = {
    task: Task

    deleteTodo(id: string): void
}

export default function TaskCard(props: TaskPreviewProps) {

    function statusIconColor(a: string): string {
        if (a === "OPEN") {
            return "OPEN"
        } else if (a === "IN_PROGRESS") {
            return "IN_PROGRESS"
        } else {
            return "DONE"
        }

    }

    function deleteTodo(id: string) {
        props.deleteTodo(id)
    }

    const url:string= "/api/"+props.task.id

    return (
        <Button href={url}>
            <Stack spacing={2} direction="row">
            <Typography m={2} variant="h4" component="h4">
                {props.task.description}
            </Typography>

            <Typography m={2} variant="h6" component="h6">
                <span className={statusIconColor(props.task.status)}></span>
                {props.task.status}
            </Typography>

            <Button size="small" variant="contained" startIcon={<DeleteIcon/>} onClick={() => deleteTodo(props.task.id)}>
                Delete Task
            </Button>
            </Stack>
        </Button>
    )

}