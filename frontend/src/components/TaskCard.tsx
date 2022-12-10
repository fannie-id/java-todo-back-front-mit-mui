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
    const {id} = useParams()
    const {getTodo,deleteTodoById,changeDescription} = useTask(id)
    const [todo, setTodo] = useState<Task>(
        {
            id: getTodo.id,
            description: getTodo.description,
            status: getTodo.status
        }
    )
const navigate = useNavigate()
    if (!getTodo) {
        return (<p>loading</p>)
    }

    /*   let changedTodo: Task = {
           id: getTodo.id,
           description: getTodo.description,
           status: getTodo.status
       }
       setTodo(changedTodo)
   */

    const onDescriptionTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(prevState => ({...prevState, description: event.target.value}))
        //changedTodo.description = event.target.value
    }

    const onStatusChange = (event: SelectChangeEvent) => {
        setTodo(prevState => ({...prevState, status: event.target.value}))
        //changedTodo.status = event.target.value

    }

    function handleDeleteTodo(id: string) {
        deleteTodoById(id)
        navigate("/api/todo")

    }

    function handleChangeTask(description:string) {
        changeDescription(description)
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
             bgcolor={statusIconColor(todo.status)}
             sx={{
                 p: 2,
                 width: '45%',
                 maxWidth: 400,
             }}>

            <TextField
                fullWidth
                required={todo.status !== "DONE"}
                id={todo.status !== "DONE" ? "outlined-required" : "outlined-read-only-input"}
                inputProps={{
                    readOnly: todo.status === "DONE",
                }}
                value={todo.description}

                onChange={onDescriptionTextChange}

            />
            {todo.status !== "DONE" &&
                <Button sx={{
                    mt: 2
                }} variant="contained" startIcon={<SaveAsIcon/>} onClick={() => handleChangeTask(todo.description)}>Save
                    change</Button>}

            <Box mb={4} sx={{minWidth: 120, pt: 2}}
            >
                <FormControl sx={{minWidth: 120}}>

                    <Select


                        onChange={onStatusChange}
                        readOnly={todo.status === "DONE"}
                    >
                        <MenuItem value={"OPEN"}>OPEN</MenuItem>
                        <MenuItem value={"IN_PROGRESS"}>IN_PROGRESS</MenuItem>
                        <MenuItem value={"DONE"}>DONE</MenuItem>

                    </Select>
                    <FormHelperText>Status</FormHelperText>
                </FormControl>
            </Box>



            {todo.status === "DONE" &&
                <Button variant="outlined" startIcon={<DeleteIcon/>} onSubmit={() => handleDeleteTodo(getTodo.id)}>Delete
                    Task</Button>}


        </Box>)

};