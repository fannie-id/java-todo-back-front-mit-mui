import {ChangeEvent, useState} from 'react';
import Button from '@mui/material/Button';
import {Box, Stack, TextField} from "@mui/material";

type AddTaskProps = {
    onClickAddTodo(description: string): void
}

export default function AddTask(props: AddTaskProps) {


    const [description, setNewTaskText] = useState<string>("")
    let isEmpty = true
    function onAddTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        isEmpty = (event.target.value==="")
            setNewTaskText(event.target.value)
    }

    function addTodo() {
        if(isEmpty){
            props.onClickAddTodo(description)
            setNewTaskText("")
        }
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
                fullWidth
                required={true}
                label="New Task"
                id="outlined-required"
                placeholder="Description"
                variant="outlined"
                onChange={onAddTaskTextChange}
                value={description}
            />
                <Button variant="contained" size="small" onClick={addTodo}>Add Task</Button>
                </Stack>
            </Box>
            )}