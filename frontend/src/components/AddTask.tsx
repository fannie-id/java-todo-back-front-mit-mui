import {ChangeEvent, useState} from 'react';
import Button from '@mui/material/Button';
import {Box, Stack, TextField} from "@mui/material";

type AddTaskProps = {
    onClickAddTodo(description: string): void
}

export default function AddTask(props: AddTaskProps) {


    const [description, setNewTaskText] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState("description is empty.");
    const [errorStatus, setErrorStatus] = useState(false);

    function handleTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
        if (description.length !== 0) {
            setErrorMessage("")
            setErrorStatus(false)
        }else{
            setErrorMessage("description is empty.")
        }
    }

    function addTodo() {
        if (description) {
            props.onClickAddTodo(description)
        }else{
            setErrorStatus(true)
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
                    error={errorStatus}
                    helperText={errorMessage}
                    fullWidth
                    required={true}
                    label="New Task"
                    id="outlined-required"
                    placeholder="Description"
                    variant="outlined"
                    onChange={handleTaskTextChange}
                    value={description}
                    multiline
                    rows={4}
                />
                <Button variant="contained" size="small" onClick={addTodo}>Add Task</Button>
            </Stack>
        </Box>
    )
}