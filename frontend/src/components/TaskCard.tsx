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
import {deleteTodo, putTodo} from "../service/api-service";
import {useParams} from "react-router-dom";


export default function TaskCard() {
    const {id} = useParams()

    if (!id) {
        return (<p>loading</p>)
    }
    const {getTodo} = useTask(id)

    if(!getTodo){
        return (<p>loading</p>)
    }

    let changedTodo: Task = {
        id: getTodo.id,
        description: getTodo.description,
        status: getTodo.status
    }
    const onDescriptionTextChange = (event: ChangeEvent<HTMLInputElement>) => {

        changedTodo.description = event.target.value
    }

    const onStatusChange = (event: SelectChangeEvent<string>) => {

        changedTodo.status = event.target.value

    }

    function handleDeleteTodo(id: string) {

        deleteTodo(id)
            .catch(console.error)

    }

    function handleChangeTask(newTodo: Task) {
        putTodo(newTodo)
            .catch(console.error)
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

    return (
        <Box m={4}
             boxShadow={2}
             bgcolor={statusIconColor(changedTodo.status)}
             sx={{
                 p: 2,
                 width: '45%',
                 maxWidth: 400,
             }}>

            <TextField
                fullWidth
                required={changedTodo.status !== "DONE"}
                id={changedTodo.status !== "DONE" ? "outlined-required" : "outlined-read-only-input"}

                InputProps={{
                    readOnly: changedTodo.status === "DONE",
                }}
                label={"description"}
                defaultValue={changedTodo.description}
                onChange={onDescriptionTextChange}
            />

            <Box mb={4} sx={{minWidth: 120, pt: 2}}
            >
                <FormControl sx={{minWidth: 120}}>

                    <Select
                        defaultValue={changedTodo.status}
                        onChange={onStatusChange}
                        readOnly={changedTodo.status === "DONE"}
                    >
                        <MenuItem value={"OPEN"}>OPEN</MenuItem>
                        <MenuItem value={"IN_PROGRESS"}>IN_PROGRESS</MenuItem>
                        <MenuItem value={"DONE"}>DONE</MenuItem>

                    </Select>
                    <FormHelperText>Status</FormHelperText>
                </FormControl>
            </Box>


            {changedTodo.status !== "DONE" &&
                <Button variant="contained" startIcon={<SaveAsIcon/>} onClick={() => handleChangeTask(changedTodo)}>Save
                    change</Button>}
            {changedTodo.status === "DONE" &&
                <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={() => handleDeleteTodo(changedTodo.id)}>Delete
                    Task</Button>}


        </Box>)

};
