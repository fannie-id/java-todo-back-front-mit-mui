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
import {ChangeEvent, useState} from "react";
import useTask from "../hooks/useTask";
import {useNavigate, useParams} from "react-router-dom";


export default function TaskCard() {
    const myCallback = (updatedTask: Task) => {
        setDescription(updatedTask.description)
    }

    const {id} = useParams()
    const {getTodo, deleteTodoById, changeDescription, changeStatus} = useTask(id, myCallback)

    const navigate = useNavigate()
    const [description, setDescription] = useState<string>(getTodo.description)
    if (!getTodo) {
        return <p>loading</p>
    }

    const onDescriptionTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)

    }

    const onStatusChange = (event: SelectChangeEvent) => {
        changeStatus(event.target.value)
    }

    function handleDeleteTodo(id: string) {
        deleteTodoById(id)
        navigate("/api/todo")
    }

    function handleChangeTask(description: string) {
        changeDescription(description)
    }

    function statusColor(a: string): string {
        if (a === "OPEN") {
            return "#f9fbe7"
        } else if (a === "IN_PROGRESS") {
            return "#e0f2f1"
        } else {
            return "#fafafa"
        }
    }

    return (
        <Box
            component="form"
            autoComplete="off"
            m={4}
            boxShadow={2}
            bgcolor={statusColor(getTodo.status)}
            sx={{
                p: 2,
                width: '45%',
                maxWidth: 400,
            }}>

            <TextField
                fullWidth
                required={getTodo.status !== "DONE"}
                id={getTodo.status !== "DONE" ? "outlined-required" : "outlined-read-only-input"}
                inputProps={{
                    readOnly: getTodo.status === "DONE",
                }}

                value={description}
                onChange={onDescriptionTextChange}
            />

            {getTodo.status !== "DONE" &&
                <Button sx={{
                    mt: 2
                }} variant="contained" startIcon={<SaveAsIcon/>} onClick={() => handleChangeTask(description)}>Save
                    change</Button>}

            <Box mb={4} sx={{minWidth: 120, pt: 2}}
            >
                <FormControl sx={{minWidth: 120}}>

                    <Select
                        value={getTodo.status}
                        onChange={onStatusChange}
                        readOnly={getTodo.status === "DONE"}
                        native={false}
                    >
                        <MenuItem value={"OPEN"}>OPEN</MenuItem>
                        <MenuItem value={"IN_PROGRESS"}>IN_PROGRESS</MenuItem>
                        <MenuItem value={"DONE"}>DONE</MenuItem>

                    </Select>
                    <FormHelperText>Status</FormHelperText>
                </FormControl>
            </Box>


            {getTodo.status === "DONE" &&
                <Button variant="outlined" startIcon={<DeleteIcon/>} onSubmit={() => handleDeleteTodo(getTodo.id)}>Delete
                    Task</Button>}


        </Box>)

};