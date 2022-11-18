import {TodoStatus} from "./TodoStatus";

export type Task = {
    id:string,
    description:string,
    status: TodoStatus
}