import {ChangeEvent, useState} from 'react';
import Button from '@mui/material/Button';
import {Box, TextField} from "@mui/material";

type AddTaskProps = {
    onClickAddTodo(description: string): void
}

export default function AddTask(props: AddTaskProps) {


    const [description, setNewTaskText] = useState<string>("")

    function onAddTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function addTodo() {
        props.onClickAddTodo(description)
        setNewTaskText("")
    }

    return (
        <div className="AddTaskForm">
            <Box mt={2}
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
            <TextField
                fullWidth
                required
                label="New Task"
                id="outlined-required"
                placeholder="Description"
                variant="outlined"
                onChange={onAddTaskTextChange}
                value={description}
            />
            </Box>

            <Box mt={2}>
                <Button  variant="contained" onClick={addTodo}>Add Task</Button>
            </Box>
        </div>)
}