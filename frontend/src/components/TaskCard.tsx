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
import useTask from "../hooks/useTask";
import {useParams} from "react-router-dom";


export default function TaskCard() {
    const params = useParams()
    const id:string |undefined = params.id
    if(!id){
        return <p>loading</p>
    }
    const {todo,deleteTodoByID,changeTodo} = useTask(id)

    if(!id){
        return (<p>loading</p>)
    }

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
        id: todo.id,
        description: todo.description,
        status: todo.status
    }
    const onDescriptionTextChange = (event: ChangeEvent<HTMLInputElement>) => {

        changedTodo.description = event.target.value
    }

    const onStatusChange = (event: SelectChangeEvent<string>) => {

        changedTodo.status = event.target.value

    }

    function handleDeleteTodo(id: string|undefined) {
        if (id) {
            deleteTodoByID(id)
        } else {
            console.log("dose not existed")
        }
    }

    function handleChangeTask(newTodo: Task) {
        changeTodo(newTodo)
    }


    return (
        <Box m={4}
             boxShadow={2}
             bgcolor={statusIconColor(todo.status)}
             sx={{
                 p: 2,
                 width: '45%',
                 maxWidth: 400,
             }}>

            <TextField
                fullWidth
                required ={todo.status !== "DONE"}
                id={todo.status !== "DONE" ? "outlined-required":"outlined-read-only-input"}

                InputProps={{
                    readOnly: todo.status === "DONE",
                }}
                label={"description"}
                defaultValue={todo.description}
                onChange={onDescriptionTextChange}
            />

            <Box mb={4} sx={{minWidth: 120, pt: 2}}
            >
                <FormControl sx={{ minWidth: 120 }}>

                    <Select
                        defaultValue={todo.status}
                        onChange={onStatusChange}
                        readOnly ={todo.status === "DONE"}
                    >
                        <MenuItem value={"OPEN"}>OPEN</MenuItem>
                        <MenuItem value={"IN_PROGRESS"}>IN_PROGRESS</MenuItem>
                        <MenuItem value={"DONE"}>DONE</MenuItem>

                    </Select>
                    <FormHelperText>Status</FormHelperText>
                </FormControl>
            </Box>


            {todo.status !== "DONE" &&
                <Button variant="contained" startIcon={<SaveAsIcon/>} onClick={() => handleChangeTask(changedTodo)}>Save
                    change</Button>}
            {todo.status === "DONE" &&
                <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={() => handleDeleteTodo(todo.id)}>Delete
                    Task</Button>}


        </Box>)

}