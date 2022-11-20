import {Task} from "../model/Task";
import {Box, FormControl, InputLabel, NativeSelect, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import {ChangeEvent} from "react";

type TaskFromProps = {
    task: Task
    changeTodo(todo: Task) :void
    deleteTodo(id:string): void
}

export default function TaskCard (props: TaskFromProps) {

    function statusIconColor(a: string): string {
        if (a === "OPEN") {
            return "OPEN"
        } else if (a === "IN_PROGRESS") {
            return "IN_PROGRESS"
        } else {
            return "DONE"
        }

    }

let changedTodo: Task ={
        id:props.task.id,
        description: props.task.description,
    status:props.task.status
}
    const onDescriptionTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        changedTodo.description = event.target.value
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        changedTodo.status = event.target.value
    }


    function deleteTodo(id: string) {
        props.deleteTodo(id)
    }

    function changeTodo(todo: Task) {
        props.changeTodo(changedTodo)
    }


    return <Box m={4} boxShadow={2}
                sx={{
                    p:2,
                    width: '45%',
                    maxWidth: 400,
                }}>

        <TextField
            fullWidth
            required
            id="outlined-required"
            label="description"
            defaultValue={props.task.description}
            onChange={onDescriptionTextChange}
        />


        <Box mb={4} sx={{ minWidth: 120, pt:2 }}>
            <FormControl >
                <InputLabel variant="standard" htmlFor="uncontrolled-native" >
                    status
                </InputLabel>
                <NativeSelect
                    defaultValue={props.task.status}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}

                    onChange={onStatusChange}
                >
                    <option value={10}>OPEN</option>
                    <option value={20}>IN_PROGRESS</option>
                    <option value={30}>DONE</option>
                </NativeSelect>
            </FormControl>
        </Box>

        <Button variant="outlined" startIcon={<SaveAsIcon />} onClick={() => changeTodo(props.task)}>
            save Task
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteTodo(props.task.id)}>
            Delete Task
        </Button>

    </Box>

}