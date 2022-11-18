import {ChangeEvent, useState} from 'react';
import Button from '@mui/material/Button';

type AddTaskProps = {
    onClickAddTodo(description:string ): void
}

export default function AddTask(props: AddTaskProps) {


    const [description, setNewTaskText] = useState<string>("")

    function onAddTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function addTodo() {
        props.onClickAddTodo(description)
    }

    return (
        <div className="AddTaskForm">

            <input
                type="text"
                onChange={onAddTaskTextChange} value={description} />
            <div>
                <Button variant="contained">Add Task</Button>
            </div>
        </div>)
}