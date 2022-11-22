import {Task} from "../model/Task";
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';


type TaskPreviewProps = {
    task: Task
    deleteTodo(id: string): void
}

export default function TaskCard(props: TaskPreviewProps) {

    function statusIconColor(a: string): string {
        if (a === "OPEN") {
            return "#fffde7"
        } else if (a === "IN_PROGRESS") {
            return "#e0f2f1"
        } else {
            return "#fafafa"
        }
    }

    function deleteTodo(id: string|undefined) {
        if(id){
            props.deleteTodo(id)
        }else{
            console.log("dose not existed")
        }
    }

    //href={`${props.task.id}`}

    return (
        <Box m={2} boxShadow={2}
             bgcolor={statusIconColor(props.task.status)}
              sx={{
                  p: 2,
                  width: '29%',
                  maxWidth: 300,
                  '&:hover': {
                      scale: '1.06'
                  },
              }}
        >
            <Typography m={2} variant="h4" component="h4">
                {props.task.description}
            </Typography>

            <Typography
                m={2}
                variant="h6"
                component="h6"

            >
                {props.task.status}
            </Typography>

            <Button size="small" variant="contained" startIcon={<DeleteIcon/>}
                    onClick={() => deleteTodo(props.task.id)}>
                Delete Task
            </Button>
        </Box>)

}