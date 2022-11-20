import {Task} from "../model/Task";
import {Box, ButtonGroup, FormControl, InputLabel, NativeSelect, TextField} from "@mui/material";
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
            return "#e1f5fe"
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

    const onStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
        changedTodo.status = event.target.value
    }

    function deleteTodo(id: string) {
        props.deleteTodo(id)
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
                required
                id="outlined-required"
                label="description"
                defaultValue={props.task.description}
                onChange={onDescriptionTextChange}
            />

            <Box mb={4} sx={{minWidth: 120, pt: 2}}
            >
                <FormControl>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        status
                    </InputLabel>
                    <NativeSelect
                        onChange={onStatusChange}
                        defaultValue={props.task.status}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={"OPEN"}>OPEN</option>
                        <option value={"IN_PROGRESS"}>IN_PROGRESS</option>
                        <option value={"DONE"}>DONE</option>
                    </NativeSelect>
                </FormControl>
            </Box>



            <ButtonGroup>
                <Button variant="contained" startIcon={<SaveAsIcon/>} onClick={() => changeTodo(changedTodo)} >save Task</Button>
                <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={() => deleteTodo(props.task.id)} >Delete Task</Button>

            </ButtonGroup>

        </Box>)

}