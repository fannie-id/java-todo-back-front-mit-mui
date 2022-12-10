import {Task} from "../model/Task";
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {useNavigate} from "react-router-dom";



type TaskPreviewProps = {
    task: Task
    deleteTodo(id: string): void
    nextStage(todo: Task): void
}

export default function TaskCard(props: TaskPreviewProps) {

    const navigate = useNavigate()


    function handleDeleteTodo(id: string) {

        props.deleteTodo(id)

    }

    function handleNextState(todo: Task) {
        const updateTodo: Task = {
            id: todo.id,
            description: todo.description,
            status: todo.status === "OPEN" ? "IN_PROGRESS" : "DONE"
        }
        props.nextStage(updateTodo)
    }

    function onDetailsClick() {
        navigate("/api/todo/" + props.task.id)
    }


    function statusIconColor(a: string): string {
        if (a === "OPEN") {
            return "#fffde7"
        } else if (a === "IN_PROGRESS") {
            return "#e0f2f1"
        } else {
            return "#fafafa"
        }
    }







    return (
        <Box m={2}
             boxShadow={2}
             bgcolor={statusIconColor(props.task.status)}

             sx={{
                 p: 2,
                 width: '29%',
                 maxWidth: 300,
                 '&:hover': {
                     scale: '1.06'
                 },
             }}
        >

           <Box onClick={onDetailsClick}>
                        <Typography mb={2} variant="h4" component="h4">
                            {props.task.description}
                        </Typography>


                        <Typography
                            mb={2}
                            variant="h6"
                            component="h6"
                        >
                            {props.task.status}
                        </Typography>

           </Box>

            {props.task.status !== "DONE" &&
                <Button variant="contained"
                        startIcon={<ArrowRightIcon/>}
                        onClick={() => handleNextState(props.task)}
                >next</Button>}
            {props.task.status === "DONE" &&
                <Button
                    variant="outlined"
                    startIcon={<DeleteIcon/>}
                    onClick={() => handleDeleteTodo(props.task.id)}
                >Delete Task</Button>}
        </Box>)

}