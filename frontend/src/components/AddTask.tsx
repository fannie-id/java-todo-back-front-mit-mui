import {ChangeEvent, useState} from 'react';
import Button from '@mui/material/Button';
import {Box, Stack, TextField} from "@mui/material";

type AddTaskProps = {
    onClickAddTodo(description: string): void
}

export default function AddTask(props: AddTaskProps) {


    const [description, setNewTaskText] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState("description is empty.");

    function onAddTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
        if (description.length !== 0) {
            setErrorMessage("")
        }
    }

    function addTodo() {
        if (description) {
            props.onClickAddTodo(description)
        }
        setNewTaskText("")
        setErrorMessage("description is empty.")
    }


    return (
        <Box mt={4}
             sx={{
                 width: 500,
                 maxWidth: '100%',
             }}
        >
            <Stack spacing={2} direction="row">
                <TextField
                    error={description.length === 0}
                    helperText={errorMessage}
                    fullWidth
                    required={true}
                    label="New Task"
                    id="outlined-required"
                    placeholder="Description"
                    variant="outlined"
                    onChange={onAddTaskTextChange}
                    value={description}
                    multiline
                    rows={4}
                />
                <Button variant="contained" size="small" onClick={addTodo}>Add Task</Button>
            </Stack>
        </Box>
    )
}