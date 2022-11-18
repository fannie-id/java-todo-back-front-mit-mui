import {useState} from "react";
import SearchBar from "./SearchBar";
import {Task} from "../model/Task";
import TodoList from "./TodoList";

export default function TodoApp() {

    const [todolist, setTodoList] = useState<Task[]>([])


    const [searchText, setSearchText] = useState<string>("")

    function onSearchTextChange(passedText: string) {
        setSearchText(passedText)
    }

    const [newTaskText, setNewTaskText] = useState<string>("")

    function onAddTaskText(passedText: string) {
        setSearchText(passedText)
    }

    function filterTask() {
        const filteredTasks = todolist.filter((task: Task) => {

            if (
                task.id.toUpperCase().includes(searchText.toUpperCase()) ||
                task.status.toString().toUpperCase().includes(searchText.toUpperCase()) ||
                task.description.toUpperCase().includes(searchText.toUpperCase())
            ) {
                console.log("gefunden")
                return true
            } else {
                return false
            }

        })
        setTodoList(filteredTasks)

    }


    function onClickAddTodo() {
        const addedTasks =
            setTodoList()
    }


    return (<div>

            <SearchBar onSearchTextChange={onSearchTextChange}/>
            <TodoList todoList={todolist}/>

            <form>
                <input onChange={onAddTaskText}/>

                <button onClick={onClickAddTodo}>
                    Add Todo
                </button>
            </form>


        </div>

    )
}