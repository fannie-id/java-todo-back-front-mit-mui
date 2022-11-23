import {Task} from "../model/Task";
import {
    Box,
    FormControl,
    FormHelperText,
    MenuItem,
    Select, SelectChangeEvent,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import {ChangeEvent} from "react";


type TaskFromProps = {
    task: Task
    changeTodo(todo: Task): void
    deleteTodo(id: string): void
}

export default function TaskCard(props: TaskFromProps) {


    function statusIconColor(a: string): string {
        if (a === "OPEN") {
            return "#f9fbe7"
        } else if (a === "IN_PROGRESS") {
            return "#e0f2f1"
        } else {
            return "#fafafa"
        }
    }

    let changedTodo: Task = {
        id: props.task.id,
        description: props.task.description,
        status: props.task.status
    }
    const onDescriptionTextChange = (event: ChangeEvent<HTMLInputElement>) => {

        changedTodo.description = event.target.value
    }

    const onStatusChange = (event: SelectChangeEvent<string>) => {

        changedTodo.status = event.target.value

    }

    function handleDeleteTodo(id: string|undefined) {
        if (id) {
            props.deleteTodo(id)
        } else {
            console.log("dose not existed")
        }
    }

    function changeTodo(newTodo: Task) {
        props.changeTodo(newTodo)
    }


    return (
        <Box m={4}
             boxShadow={2}
             bgcolor={statusIconColor(props.task.status)}
             sx={{
                 p: 2,
                 width: '45%',
                 maxWidth: 400,
             }}>

            <TextField
                fullWidth
                required ={props.task.status !== "DONE"}
                id={props.task.status !== "DONE" ? "outlined-required":"outlined-read-only-input"}

                InputProps={{
                    readOnly: props.task.status === "DONE",
                }}
                label={"description"}
                defaultValue={props.task.description}
                onChange={onDescriptionTextChange}
            />

            <Box mb={4} sx={{minWidth: 120, pt: 2}}
            >
                <FormControl sx={{ minWidth: 120 }}>

                    <Select
                        defaultValue={props.task.status}
                        onChange={onStatusChange}
                        readOnly ={props.task.status === "DONE"}
                    >
                        <MenuItem value={"OPEN"}>OPEN</MenuItem>
                        <MenuItem value={"IN_PROGRESS"}>IN_PROGRESS</MenuItem>
                        <MenuItem value={"DONE"}>DONE</MenuItem>

                    </Select>
                    <FormHelperText>Status</FormHelperText>
                </FormControl>
            </Box>


            {props.task.status !== "DONE" &&
                <Button variant="contained" startIcon={<SaveAsIcon/>} onClick={() => changeTodo(changedTodo)}>Save
                    change</Button>}
            {props.task.status === "DONE" &&
                <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={() => handleDeleteTodo(props.task.id)}>Delete
                    Task</Button>}


        </Box>)

}